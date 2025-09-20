import express, { Router } from "express";
import {
  registerUser,
  loginUser,
  logout,
  getUserDetails,
  getAllUserDetails,
} from "../controllers/User/userController";

const userRouter: Router = express.Router();

// -------------------- User Registration --------------------
userRouter.post("/register", registerUser);

// -------------------- User Login --------------------
userRouter.post("/login", loginUser);

// -------------------- Logout --------------------
userRouter.post("/logout", logout);

// -------------------- Get Single User Details --------------------
userRouter.get("/details", getUserDetails);

// -------------------- Get All Users --------------------
userRouter.get("/all", getAllUserDetails);

export default userRouter;
