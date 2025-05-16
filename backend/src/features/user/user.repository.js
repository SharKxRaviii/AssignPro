import userModel from "./user.schema.js";

export const signUp = async (name, email, password) => {
  try {
    const newUser = new userModel({name, email, password});
    const savedUser = await newUser.save();
    return {
        success: true,
        res: savedUser
    }
  } catch (error) {
    return {
        success: false,
        error: {
            statusCode: 500,
            msg: error.message
        }
    }
  }
};
