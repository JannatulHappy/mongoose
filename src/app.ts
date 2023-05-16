import express, { Application } from "express";
import cors from "cors";

const app: Application = express();
// application routes
import userRoutes from "./app/modules/user/user.route"
// using cors
app.use(cors());
// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.get("/api/v1/user",userRoutes);
app.use("/api/v1/user",userRoutes);

export default app;

// inserting a test data into mongodb
/*
    
    step1-interface
    step 2- schema
    step3-model
    step4-database query on model

    */
// pattern mvc | modular

// breakdown for code organize

// 1.interface-interface.ts
// 2.schema and model in model.toString
// 3.route in
// 4.route function
// 5.route Controller--Controller.ts
// 6.database logic/query in service
