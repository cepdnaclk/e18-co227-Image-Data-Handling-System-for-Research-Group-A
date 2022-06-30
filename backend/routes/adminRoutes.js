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
