import { NextFunction, Request, Response } from "express";

export default class ApiErrors extends Error {
  status: number;
  informations?: object | string;

  constructor(
    message = "Internal Server Error",
    status = 500,
    informations: object | string = ""
  ) {
    super(message);
    this.name = this.constructor.name;
    this.status = status;
    this.informations = informations;
  }
}

export const errorHandler = (
  err: ApiErrors,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.error(err);
  return res.status(err.status || 500).json({
    error: err.message,
    informations: err.informations,
  });
};
