import express from 'express'
import doctorController from '../controllers/doctorController.js'
import path from 'path'
import multer from 'multer';

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Backend/public/images/doctors');
      
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  });
  
  const upload = multer({ 
    storage,
    limits: { fileSize: 10 * 1024 * 1024 }, 
   });

router.post('/login',doctorController.login)
router.post('/signup',upload.single('image'),doctorController.register)
router.get('/getDoctorProfile',doctorController.getDoctorProfile)

export default router;