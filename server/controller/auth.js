
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import User from "../model/User.js";

dotenv.config();

//signUp
const postSignUp = async (req, res) => {
  const { name, email, mobile, city, country, password} = req.body;

  if (!name) {
    return res.json({
      success: false,
      message: "name is required",
      data: null,
    })
  }

  if (!email) {
    return res.json({
      success: false,
      message: "email is required",
      data: null,
    })
  }

  if (!password) {
    return res.json({
      success: false,
      message: "password is required",
      data: null,
    })
  }
  const existingUser = await User.findOne({ email: email });

  if (existingUser) {
    return res.json({
      success: false,
      message: "user with this email already exists",
      data: null,
    })
  }

  const salt = bcrypt.genSaltSync(10);
  const encryptedPassword = bcrypt.hashSync(password, salt);
  const newUser = new User({
    name,
    email,
    mobile,
    city,
    country,
    password: encryptedPassword
  })
  try {
    const savedUser = await newUser.save();
    return res.json({
      success: true,
      data: savedUser,
      message: "User register successfully"
    })
  } catch (e) {
    return res.json({
      success: false,
      message: `User register failed ${e.message}`,
      data: null
    })
  }
}

//login
const postLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    return res.json({
      success: false,
      message: "email is required",
      data: null,
    })
  }

  if (!password) {
    return res.json({
      success: false,
      message: "password is required",
      data: null,
    })
  }

  const existingUser = await User.findOne({ email });

  if (!existingUser) {
    return res.json({
      success: false,
      message: "user doesn`t exist with this email,please sign Up",
      data: null
    })
  }

  const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);

  if (isPasswordCorrect) {
    const jwttoken = jwt.sign(
      {
        id: existingUser._id,
        email: existingUser.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    const userData = existingUser.toObject();
    delete userData.password;

    return res.json({
      success: true,
      message: "login successfully",
      token: jwttoken,
      data: userData
    })
  } else {
    return res.json({
      success: false,
      message: "invalid username and password",
      data: null,
    })
  }

}
//update 
const updateUser = async (req, res) => {
  try {

    const userId = req.user?.id;

    if (!userId) {
      return res.json({
        success: false,
        message: "Unauthorized"
      });
    }

    const { name, mobile, whatsapp, email, address, city, country, pincode } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { name, mobile, whatsapp, email, address, city, country, pincode },
      { new: true, runValidators: true }
    ).select("-password");

    if (!updatedUser) {
      return res.json({
        success: false,
        message: "User not found"
      });
    }

    return res.json({
      success: true,
      message: "Profile updated successfully",
      data: updatedUser
    });

  } catch (error) {
    return res.json({
      success: false,
      message: error.message
    });
  }
};



export { postSignUp, postLogin, updateUser}