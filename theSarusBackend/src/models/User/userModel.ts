// userModel.ts
import mongoose, { Schema, Model } from "mongoose";
import { IUser } from "../../utils/types/user";

// -------------------- Interfaces --------------------


// -------------------- Schema --------------------
const userSchema: Schema<IUser> = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      index: true, // speed up search by name
    },
    phone: {
      value: {
        type: String, // support +country codes
        unique: true,
        sparse: true,
        trim: true,
      },
      isVerified: {
        type: Boolean,
        default: false,
        index: true,
      },
    },
    email: {
      value: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
      },
      isVerified: {
        type: Boolean,
        default: false,
        index: true,
      },
    },
    password: {
      type: String,
      required: true,
      select: false, // do not return by default
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
      index: true,
    },
    image: {
      type: String,
      trim: true,
    },
    lastLogin: {
      type: Date,
      index: true,
    },
    status: {
      type: String,
      enum: ["active", "inactive", "banned"],
      default: "active",
      index: true,
    },
  },
  { timestamps: true }
);

// Compound index for login/auth queries
userSchema.index({ "email.value": 1, "phone.value": 1 });

// -------------------- Model --------------------
const User: Model<IUser> = mongoose.model<IUser>("User", userSchema);

export default User;
