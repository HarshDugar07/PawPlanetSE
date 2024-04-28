import { catchAsyncErrors } from "../middlewares/catchAsyncErros.js";
import { User } from "../models/userSchema.js";
import { generateToken } from "../utils/jwtToken.js";

export const userRegister = catchAsyncErrors(async (req, res, next) => {
  const { firstName, lastName, email, phone, password } = req.body;
  if (!firstName || !lastName || !email || !phone || !password) {
    return res.status(400).json({ success: false, message: "Please fill in all fields" });
  }

  const isRegistered = await User.findOne({ email });
  if (isRegistered) {
    return res.status(400).json({ success: false, message: "User already registered" });
  }

  const user = await User.create({
    firstName,
    lastName,
    email,
    phone,
    password,
  });
  generateToken(user, "User Registered!", 200, res);
});

export const login = catchAsyncErrors(async (req, res, next) => {
  const { email, password, confirmPassword } = req.body;
  if (!email || !password || !confirmPassword) {
    return res.status(400).json({ success: false, message: "Please fill in all fields" });
  }
  if (password !== confirmPassword) {
    return res.status(400).json({ success: false, message: "Password and Confirm Password do not match" });
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return res.status(400).json({ success: false, message: "Invalid Email or Password" });
  }

  const isPasswordMatch = await user.comparePassword(password);
  if (!isPasswordMatch) {
    return res.status(400).json({ success: false, message: "Invalid Email or Password" });
  }
  generateToken(user, "Login Successfully!", 201, res);
});

export const addNewAdmin = catchAsyncErrors(async (req, res, next) => {
  const { firstName, lastName, email, phone, nic, dob, gender, password } = req.body;
  if (!firstName || !lastName || !email || !phone || !password) {
    return res.status(400).json({ success: false, message: "Please fill in all fields" });
  }

  const isRegistered = await User.findOne({ email });
  if (isRegistered) {
    return res.status(400).json({ success: false, message: "Admin with this email already exists" });
  }

  const admin = await User.create({
    firstName,
    lastName,
    email,
    phone,
    password,
  });
  res.status(200).json({
    success: true,
    message: "New Admin Registered",
    admin,
  });
});

export const getUserDetails = catchAsyncErrors(async (req, res, next) => {
  const user = req.user;
  res.status(200).json({
    success: true,
    user,
  });
});
