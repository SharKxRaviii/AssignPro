import express from 'express';
import { signUpController, signInController } from './user.controller.js';

const userRoutes = express.Router();

userRoutes.post('/signup', signUpController);
userRoutes.post('/signin', signInController);

export default userRoutes;