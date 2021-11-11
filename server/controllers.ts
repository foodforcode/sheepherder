import { forms } from "../api/forms";
import { Request, Response } from "express";

export const getForms = (req: Request, res: Response) => {
  res.send(forms);
};
