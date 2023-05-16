import { NextFunction, Request, Response, response } from "express";
import { createUserToDb, getUsersFromDb } from "./user.service";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await createUserToDb();
  response.status(200).json({
    status: "success",
    data: user,
  });
};
export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await getUsersFromDb();
  response.status(200).json({
    status: "success",
    data: user,
  });
};
// pattern
// route=>controller=>service
