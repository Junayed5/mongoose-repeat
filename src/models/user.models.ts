import { model, Schema } from "mongoose";
import { IUser } from "../interface/user.interface";
import validator from 'validator'

const userSchema = new Schema<IUser>(
  {
    firstName: {
      type: String,
      required: true,
      minLength: [3, "First name must be 3 charecters, got {VALUE}"],
      maxLength: 10
    },
    lastName: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 10
    },
    age: {
      type: Number,
      required: true,
      min: [18, 'Age must be 18, got {VALUE}'],
      max: 60
    },
    email: {
      type: String,
      required: true,
      unique: [true, "Already have an account, Please Login"],
      lowercase: true,
      trim:true,
      validate: [validator.isEmail, "Email is not valid, got {VALUE}"]
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: {
        values: ["USER", "ADMIN", "SUPERADMIN"],
        message: 'Role is not valid, You have to give like : user, admin, superadmin'
      },
      default: "USER",
      uppercase: true
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const User = model("User", userSchema);
