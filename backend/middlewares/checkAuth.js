// authentication middleware
const jwt = require('jsonwebtoken')
const User = require('../models/userModel');



const authenticateToken = async(req, res , next) =>{
    
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer ')){
        try{

            const token = req.headers.authorization.split(" ")[1];
            const email = req.body.email;

            decoded = jwt.verify(token,process.env.JWT_SECRET );
            
            const user = await User.findOne({email: decoded.email}).select('-password');
            // console.log(user);
            // console.log(user.email)
            // console.log(email)
            // console.log(JSON.stringify(user.role))
            // console.log(JSON.stringify(user.role) !== JSON.stringify(decoded.role))
            
            if(!user || user.email !== email || JSON.stringify(user.role) !== JSON.stringify(decoded.role)){
                return  res.status(401).json({
                    error: "Unauthorized access"
                })
            }
    
            req.email = decoded.email
            req.role = decoded.role
    
            next();
        }catch(error){
            res.status(401).json({
                message: "Your session is expired"
            })
        }
    }
    
}

module.exports = authenticateToken