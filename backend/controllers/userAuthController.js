const jwt = require('jsonwebtoken')
const User = require('../models/userModel');
const Request = require('../models/requestModel');
const bcrypt = require('bcrypt');


const registerUser = async(req,res)=>{
    try{
        const emailRequested = await Request.findOne({email: req.body.email});
        if(emailRequested) {
            return res.status(401).json({
                error:'Request already sent'
            })
        }
        
        const emailRegistered = await User.findOne({email: req.body.email});
        if(emailRegistered) {
            return res.status(401).json({
                error:'Email address is already in use'
            })
        }
        
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password,salt);
    
        const newRequest = new Request({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
            role: req.body.role
        })
        const user = await newRequest.save();
        return res.status(200).json({
            id: user._id,
            username: user.username,
            email: user.email,
            role: user.role,
            message:"The Request sent successfully"
        })
        

    }catch(err){
        res.status(500).json({
            error: err
        })
    }
}

const loginUser = async(req,res)=>{
    try{
        const user = await User.findOne({email: req.body.email})
        if(!user) {
            return res.status(400).json({
                error: "Incorrect credentials!"
            })
        }

        const validatedPassword = await bcrypt.compare(req.body.password,user.password)
        if(!validatedPassword) {
            return res.status(400).json({
                error:"Incorrect credentials!"
            })
        }

        const access_token = jwt.sign(
            { 
                email: user.email, 
                role: user.role
             }, 
            process.env.JWT_SECRET, 
            { expiresIn: process.env.JWT_TOKEN_EXPIRATION }
        )
        
        res.status(200).json({
            id: user._id,
            username: user.username,
            email: user.email,
            role: user.role,
            message: "Login Successful",
            token: access_token
        })
        
    }catch(err){
        res.status(500).json({
            error: err
        })
    }
}

module.exports = {
    registerUser,
    loginUser
}