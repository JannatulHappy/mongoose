import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";

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
    step4-database query

    */
//    creating interface

  res.send("Hello World!");
  next();
});
export default app;
