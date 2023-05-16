import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

// // 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser>({
  id: { type: String, required: true, unique: true },
  name: {
    firstName: {
      type: String,
      required: true,
    },
    middleName: {
      type: String,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  dateOfBirth: { type: String },
  role: { type: String, required: true },
  gender: { type: String, enum: ["male", "female"] },
  password: { type: String, required: true },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  email: { type: String },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
});
// 3. Create a Model.
const User = model<IUser>("User", userSchema);
export default User