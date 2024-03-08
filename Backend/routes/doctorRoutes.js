import express from 'express'
import doctorController from '../controllers/doctorController.js'

const router = express.Router();

router.post('/login',doctorController.login)
router.post('/signup',doctorController.register)

export default router;