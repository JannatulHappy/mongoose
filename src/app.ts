import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { Schema, model } from "mongoose";

const app: Application = express();
// using cors
app.use(cors());
// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  // inserting a test data into mongodb
  /*
    
    step1-interface
    step 2- schema
    step3-model
    step4-database query on model

    */
  // 1. Create an interface representing a document in MongoDB.
  interface IUser {
    id: string;
    name: {
      firstName: string;
      middleName?: string;
      lastName: string;
    };
    dateOfBirth?: string;
    gender: "male" | "female";
    role: "Student";
    email?: string;
    password: string;
    contactNo: string;
    emergencyContactNo: string;
    presentAddress: string;
    permanentAddress: String;
  }
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
  const createUserToDb = async () => {
    const user = new User({
      id: 777,
      name: {
        firstName: "happy jnnatul",
        middleName: "koi",
        lastName: "gelo",
      },

      role: "Student",
      gender: "female",
      password: " dhfjdhfjdhf",
      contactNo: "0176544",
      emergencyContactNo: "0882811",
      email: "happy@gmail.com",
      presentAddress: "kulgaon",
      permanentAddress: "kulgao",
    });
    await user.save();

    console.log(user.email);
  };

  createUserToDb();
  res.send("Hello World!");
  next();
});

export default app;
