import asyncHandler from "express-async-handler";
import generateToken from '../utils/generateToken.js'
import User from "../models/userModel.js";

//Auth user & get token - POST/api/users/login
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
   console.log(user)
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or password");
  }
});

export { authUser };
