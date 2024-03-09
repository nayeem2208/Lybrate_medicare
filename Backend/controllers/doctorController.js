import Doctor from "../modals/doctorModel.js";
import generateToken from "../utils/doctorGenerateToken.js";

const doctorController = {
  login: async (req, res) => {
    try {
        
      let { email, password } = req.body;
      let doctor = await Doctor.findOne({ email });
      if (doctor && (await doctor.matchPassword(password))) {
        let token = generateToken(res, doctor._id);
        res.status(201).json({
          _id: doctor._id,
          name: doctor.name,
          email: doctor.email,
          token,
        });
      } else {
        res.status(400).json({ error: 'Invalid email or Password' })
      }
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  },
  register: async (req, res) => {
    try {
        console.log('its here',req.file)
        const {
          email,
          phone,
          name,
          password,
          specialisation,
          address,
          qualification,
          experience,
          hospital,
        } = req.body;

        const image = req.file.filename ? req.file.filename: null;
      const doctorExists = await Doctor.findOne({ email });
      if (doctorExists) {
        res.status(400);
        throw new Error("User already exists");
      }
      
      const doctor = await Doctor.create({
        name,
        email,
        phone,
        password,
        specialisation,
        address,
        qualification,
        experience,
        hospital,
        imagePath:image
      });

      let token = generateToken(res, doctor._id);
      res.status(201).json({
        _id: doctor._id,
        email: doctor.email,
        token,
      });
    } catch (error) {
      res.status(400).json(error);
    }
  },
  getDoctorProfile:async(req,res)=>{
    try {
      let id=req.query.id
      let doctor=await Doctor.findOne({_id:id})
      if(!doctor){
        res.status(400)
        throw new error('Invalid request , Doctor is not found')
      }
      res.status(200).json(doctor)
    } catch (error) {
      console.log(error)
      res.status(400).json(error)
    }
  }
};

export default doctorController
