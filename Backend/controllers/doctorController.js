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
        res.status(400);
        throw new Error("Invalid mail or password");
      }
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  },
  register: async (req, res) => {
    try {
        console.log('its here',req.body)
      const { email,phone, password } = req.body;
      const doctorExists = await Doctor.findOne({ email });
      console.log(doctorExists,'doc existsssssssssssss')
      if (doctorExists) {
        res.status(400);
        throw new Error("User already exists");
      }
      
      const doctor = await Doctor.create({
        email,
        phone,
        password,
      });

      let token = generateToken(res, doctor._id);
      console.log(token,'tokennnnnnnnnnnnnnnnnnnnn')
      res.status(201).json({
        _id: doctor._id,
        email: doctor.email,
        token,
      });
    } catch (error) {
      res.status(400).json(error);
    }
  },
};

export default doctorController
