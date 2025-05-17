import ErrorHandler from "../../middlewares/errorHandler.middleware.js";
import { signUp, signIn } from "./user.repository.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const signUpController = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new ErrorHandler("All fields are required", 400);
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await signUp(name, email, hashedPassword);
    res.status(201).json({ message: "Signup successful", res: user });
  } catch (error) {
    throw new ErrorHandler("Server Error, try again later!!", 500);
  }
};

export const signInController = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ErrorHandler("Email and password are required", 400);
  }
  
  try {
    const result = await signIn(email, password);
    const user = result.res;
    const token = jwt.sign(
        {
            _id: user._id,
            name: user.name,
            email: user.email
        },
        process.env.SECRET_KEY,
        {
            expiresIn: '1hr', algorithm: 'HS256'
        }
    );
    res.status(200).json({ message: "Signin successful", token, user });
  } catch (error) {
    throw new ErrorHandler("Server Error, try again later!!", 500);
  }
};
