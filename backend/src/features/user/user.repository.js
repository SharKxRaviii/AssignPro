import userModel from "./user.schema.js";
import bcrypt from "bcrypt";

export const signUp = async (name, email, password) => {
  try {
    // create or add new user to the db for register
    const newUser = new userModel({ name, email, password });
    const savedUser = await newUser.save();
    return {
      success: true,
      res: savedUser,
    };
  } catch (error) {
    return {
      success: false,
      error: {
        statusCode: 500,
        msg: error.message,
      },
    };
  }
};

export const signIn = async (email, password) => {
  try {
    // find user by email and exclude password to make the user credentials more secure
    const user = await userModel.findOne({ email }).select("-password");
    if (!user) {
      return {
        success: false,
        error: {
          statusCode: 404,
          msg: "User not found",
        },
      };
    }

    // compare the current password with the user password stored in db
    const comparedPass = await bcrypt.compare(password, user.password);
    if (!comparedPass) {
      return {
        success: false,
        error: {
          statusCode: 401,
          msg: "Invalid credentials",
        },
      };
    }

    // if compared password is correct then send response
    return {
      success: true,
      res: user,
    };
  } catch (error) {
    return {
      success: false,
      error: {
        statusCode: 500,
        msg: error.message,
      },
    };
  }
};
