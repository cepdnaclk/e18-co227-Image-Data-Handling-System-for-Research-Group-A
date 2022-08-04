/*
 * Project: CO227 Computer Engineering Project
 * Github Repository: https://github.com/e18-co227-Image-Data-Handling-System-for-Research-Group-A
 * Authors:
 *  - Kavinda Karunarathne (E/18/170)
 *  - Denuwan Weerarathne (E/18/382)
 *  - Nimuthu Wijerathne (E/18/398)
 */
const express = require("express");
const colors = require("colors");
const cors = require("cors");
const dotenv = require("dotenv").config();
// const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

const app = express();

connectDB();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

/* ROUTES */

// // image routes
// app.use('/api/images', require('./routes/imageRoutes.js'))
// // consultant routes
// app.use('/api/consultants', require('./routes/consultantRoutes.js'))
// // doctor routes
// app.use('/api/doctors', require('./routes/doctorRoutes.js'))
// admin routes
app.use("/api/admin", require("./routes/adminRoutes.js"));
// user auth routes
app.use("/api/users", require("./routes/userAuthRoutes.js"));

app.listen(port, () => console.log(`Server started on ${port}`.yellow));
