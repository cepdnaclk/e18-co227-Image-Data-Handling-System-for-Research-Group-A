/* 
 * Project: CO227 Computer Engineering Project
 * Github Repository: https://github.com/e18-co227-Image-Data-Handling-System-for-Research-Group-A
 * Authors: 
 *  - Kavinda Karunarathne (E/18/170)
 *  - Denuwan Weerarathne (E/18/382)
 *  - Nimuthu Wijerathne (E/18/398)
 */
const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectDB
