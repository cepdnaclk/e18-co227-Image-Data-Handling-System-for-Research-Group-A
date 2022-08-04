/*
 * Project: CO227 Computer Engineering Project
 * Github Repository: https://github.com/e18-co227-Image-Data-Handling-System-for-Research-Group-A
 * Authors:
 *  - Kavinda Karunarathne (E/18/170)
 *  - Denuwan Weerarathne (E/18/382)
 *  - Nimuthu Wijerathne (E/18/398)
 */
const router = require("express").Router();
const {
  registerUser,
  loginUser,
} = require("../controllers/userAuthController");
const User = require("../models/userModel");
// const bcrypt = require('bcrypt')

/*
// initial admin user insertion 
router.post('/initial', async(req,res)=>{
    try{
        
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password,salt);
    
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
            role: req.body.role
        })
        const user = await newUser.save();
        return res.status(200).json({
            id: user._id,
            username: user.username,
            email: user.email,
            role: user.role,
            message:"The Request sent successfully"
        })
        

    }catch(err){
        res.status(500).json({
            error: "something wrong"
        })
    }
}) 
*/

// sign up request
router.post("/signup", registerUser);

// log in
router.post("/login", loginUser);

module.exports = router;
