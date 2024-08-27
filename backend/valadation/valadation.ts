import { Request, Response, NextFunction } from "express";

export const Validation = (schema: any) => async (req:Request, res:Response, next:NextFunction) => {
  try {
    await schema.validate(req.body);
    return next();
  } catch (err: any) {
    return res.status(400).json({ type: err.name, message: err.message });
  }
};






