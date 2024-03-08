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
};

export default userController;
