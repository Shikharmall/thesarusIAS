// userController.ts
import { Request, Response } from "express";
import { validationResult } from "express-validator";
import User, { IUser } from "../../models/User/userModel";
import generateToken from "../../utils/generateToken";

// -------------------- Register User --------------------
export const registerUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password, rePassword } = req.body;

    // Validate input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ status: "failed", errors: errors.array() });
    }

    // Check if email exists
    const emailExist = await User.findOne({ "email.value": email });
    if (emailExist) {
      return res.status(409).json({ status: "failed", message: "Email Already Exists" });
    }

    // Check password match
    if (password !== rePassword) {
      return res.status(422).json({ status: "failed", message: "Passwords do not match" });
    }

    // Create user (password hashing handled by schema pre-save hook)
    const userData = new User({
      name,
      email: { value: email },
      password,
      isAdmin: false,
      image: "N/A",
    });

    const savedUser = await userData.save();

    return res.status(201).json({ status: "success", data: savedUser });
  } catch (error: any) {
    return res.status(500).json({ status: "failed", message: error.message });
  }
};

// -------------------- Login User --------------------
export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Tell TS that this is IUser & Document
    const userData = await User.findOne({ "email.value": email })
      .select("+password")
      .exec() as (IUser & { comparePassword: (candidate: string) => Promise<boolean> }) | null;

    if (!userData) {
      return res.status(404).json({ status: "failed", message: "Email does not exist" });
    }

    // Use schema method to compare password
    const matchPassword = await userData.comparePassword(password);
    if (!matchPassword) {
      return res.status(401).json({ status: "failed", message: "Password is incorrect" });
    }

    const tokenAge = 259200; // 3 days
    const token = generateToken(userData._id.toString(), `${tokenAge}s`);

    return res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        maxAge: tokenAge * 1000,
      })
      .json({
        status: "success",
        data: { user_id: userData._id.toString(), token },
      });
  } catch (error: any) {
    return res.status(500).json({ status: "failed", message: error.message });
  }
};


// -------------------- Get User Details --------------------
export const getUserDetails = async (req: Request, res: Response) => {
  try {
    const { user_id } = req.query;

    if (!user_id || typeof user_id !== "string") {
      return res.status(400).json({ status: "failed", message: "User ID is required" });
    }

    const userData = await User.findById(user_id);
    if (!userData) {
      return res.status(404).json({ status: "failed", message: "User not found" });
    }

    return res.status(200).json({ status: "success", data: userData });
  } catch (error: any) {
    return res.status(500).json({ status: "failed", message: error.message });
  }
};

// -------------------- Get All Users --------------------
export const getAllUserDetails = async (_req: Request, res: Response) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    return res.status(200).json({ status: "success", data: users });
  } catch (error: any) {
    return res.status(500).json({ status: "failed", message: error.message });
  }
};

// -------------------- Logout --------------------
export const logout = (_req: Request, res: Response) => {
  return res
    .clearCookie("access_token")
    .status(200)
    .json({ status: "success", message: "Successfully logged out" });
};
