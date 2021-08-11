import { Request, Response } from "express";

export const index = (_req: Request, res: Response) => {
  return res.send("Hello World!");
};
