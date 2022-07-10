/* 
 * Project: CO227 Computer Engineering Project
 * Github Repository: https://github.com/e18-co227-Image-Data-Handling-System-for-Research-Group-A
 * Authors: 
 *  - Kavinda Karunarathne (E/18/170)
 *  - Denuwan Weerarathne (E/18/382)
 *  - Nimuthu Wijerathne (E/18/398)
 */
const mongoose = require('mongoose');

const RequestSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true

    },
    password:{
        type: String,
        required: true,                                        
    },
    role:{
        type: String,
        required: true,
        default:""
    }
},
{
    timestamps:true
}
);

module.exports = mongoose.model("Request",RequestSchema)