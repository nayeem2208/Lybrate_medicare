import express from 'express'
import userController from '../controllers/userController.js'

const router = express.Router();

router.post('/login',userController.authUser)
router.post('/signup',userController.registerUser)
router.get('/getuserProfile',userController.getUserProfile)
router.get('/getdoctors',userController.getDoctors)
export default router;