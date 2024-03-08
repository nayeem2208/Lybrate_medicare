import express from 'express'
import userController from '../controllers/userController.js'

const router = express.Router();

router.post('/login',userController.authUser)
router.post('/signup',userController.registerUser)

export default router;