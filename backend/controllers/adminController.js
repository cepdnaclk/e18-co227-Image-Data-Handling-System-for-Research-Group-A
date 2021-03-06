/* 
 * Project: CO227 Computer Engineering Project
 * Github Repository: https://github.com/e18-co227-Image-Data-Handling-System-for-Research-Group-A
 * Authors: 
 *  - Kavinda Karunarathne (E/18/170)
 *  - Denuwan Weerarathne (E/18/382)
 *  - Nimuthu Wijerathne (E/18/398)
 */
const User = require('../models/userModel')
const Request = require('../models/requestModel')


const getAllRequests = async(req, res)=>{
    try{
        const requests = await Request.find().select('-password')
        
        return res.status(200).json(requests)

    }catch(err){
        return res.status(500).json({
            error: err
        })
    }
}

const deleteRequest = async(req,res)=>{
    try{
        const request = await Request.findById(req.params.id)
        
        if(request){
            try{
                await Request.findByIdAndDelete(req.params.id)
                res.status(200).json({
                    message: "Request deleted successfully"
                });
                
            }catch(error){
                return res.status(500).json({
                    error:"Request deletion failed"});
            }
            
        }else{
            return res.status(404).json({
                error:"Request not found"})
        } 
    }catch(err){
        return res.status(500).json({
            error: err
        })
    } 
}

const acceptRequest = async(req,res)=>{
    try{
        const request = await Request.findById(req.params.id)

        if(request){
            const newUser = new User({
                username: request.username,
                email: request.email,
                password: request.password,
                role: request.role
            })

            // console.log(newUser)
            try{
                const adduser = await newUser.save();
                // const {password,...others} = adduser._doc;
                await Request.findByIdAndDelete(req.params.id)
                
                // others["message"] = "User registration successful!";
                // return res.status(200).json(others);
                return res.status(200).json({
                    id: adduser._id,
                    username: adduser.username,
                    email: adduser.email,
                    role: adduser.role,
                    message: "User registration successful!"
                });
            }catch (error) {
                return res.status(500).json({
                    error:"User registration failed"
                });
            }
            
        }else{
            return res.status(404).json({
                error:"Request not found"
            })
        } 
    }catch(err){
        return res.status(500).json({
            error: err
        })
    } 
}

module.exports = {
    getAllRequests,
    deleteRequest,
    acceptRequest
}