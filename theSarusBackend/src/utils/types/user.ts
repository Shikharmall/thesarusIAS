import mongoose, { Types } from "mongoose";

export interface IPhone {
  value?: string;
  isVerified: boolean;
}

export interface IEmail {
  value: string;
  isVerified: boolean;
}

export interface IUser extends Document {
  _id: Types.ObjectId,
  name: string;
  phone?: IPhone;
  email: IEmail;
  password: string;
  isAdmin: boolean;
  image?: string;
  lastLogin?: Date;
  status: "active" | "inactive" | "banned";
  createdAt: Date;
  updatedAt: Date;
}

export interface IProductItem {
  id: mongoose.Types.ObjectId;
  model: "Course" | "Test";
  grantedAt?: Date;
}

export interface IProductAccess extends Document {
  user: mongoose.Types.ObjectId;
  productAccess: IProductItem[];
  createdAt: Date;
  updatedAt: Date;
}