/* 
 * Project: CO227 Computer Engineering Project
 * Github Repository: https://github.com/e18-co227-Image-Data-Handling-System-for-Research-Group-A
 * Authors: 
 *  - Kavinda Karunarathne (E/18/170)
 *  - Denuwan Weerarathne (E/18/382)
 *  - Nimuthu Wijerathne (E/18/398)
 */
const router = require('express').Router();
const {
    getAllRequests,
    deleteRequest,
    acceptRequest
} = require('../controllers/adminController')

const jwtAuth = require('../middlewares/checkAuth.js')

// get all requests
router.get('/requests', jwtAuth, getAllRequests)

// delete requests
router.delete("/delete/:id",jwtAuth, deleteRequest)

// accept requests
router.post("/accept/:id", jwtAuth, acceptRequest)

module.exports = router;
