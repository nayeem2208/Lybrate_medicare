import Doctor from "../modals/doctorModel.js";
import User from "../modals/userModel.js";
import generateToken from "../utils/generateToken.js";

const userController = {
  authUser: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (user && (await user.matchPassword(password))) {
        let token = generateToken(res, user._id);
        res.json({
          _id: user._id,
          name: user.name,
          email: user.email,
          token,
        });
      } else {
        res.status(401);
        throw new Error("Either the email or password is incorrect");
      }
    } catch (error) {
      res.status(400).json(error);
    }
  },
  registerUser: async (req, res) => {
    const { email, mobile, password } = req.body;
    try {
      let userExists = await User.findOne({ email });

      if (userExists) {
        res.status(400).json({ message: "User already exists" });
      } else {
        userExists = await User.create({
          email,
          mobile,
          password,
        });
      }
      let token = generateToken(res, userExists._id);
      console.log(token,'tokeeeeeeeeeeeeeeeeeeeeeeeeeeeen')
      res.status(201).json({
        _id: userExists._id,
        name: userExists.name,
        email: userExists.email,
        token
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Registration failed", error: error.message });
    }
  },
  getUserProfile:async(req,res)=>{
    try {
      console.log('its here')
      let id=req.query.id
      let user=await User.findOne({_id:id})
      if(!user){
        res.status(400)
        throw new error('Invalid request , user is not found')
      }
      res.status(200).json(user)
    } catch (error) {
      console.log(error)
      res.status(400).json(error)
    }
  },
  getDoctors:async(req,res)=>{
    try {
      let doctors=await Doctor.find({})
      res.status(200).json(doctors)
    } catch (error) {
      res.status(400).json(error)
    }
  }
};

export default userController;
