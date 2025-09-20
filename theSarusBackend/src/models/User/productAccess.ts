// productAccessModel.ts
import mongoose, { Schema, Document, Model } from "mongoose";

// -------------------- Interfaces --------------------
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

// -------------------- Schema --------------------
const productAccessSchema: Schema<IProductAccess> = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true, // fast lookup of products per user
    },
    productAccess: [
      {
        id: {
          type: Schema.Types.ObjectId,
          required: true,
          refPath: "productAccess.model", // dynamic reference
        },
        model: {
          type: String,
          required: true,
          enum: ["Course", "Test"], // allowed models
        },
        grantedAt: {
          type: Date,
          default: Date.now, // tracks when access was granted
        },
      },
    ],
  },
  { timestamps: true }
);

// Optional: ensure a user cannot have duplicate access to the same product
productAccessSchema.index(
  { user: 1, "productAccess.id": 1, "productAccess.model": 1 },
  { unique: true, sparse: true }
);

// -------------------- Model --------------------
const ProductAccess: Model<IProductAccess> = mongoose.model<IProductAccess>(
  "ProductAccess",
  productAccessSchema
);

export default ProductAccess;
