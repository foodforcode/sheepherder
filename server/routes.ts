import { Router } from "express";
import { getForms } from "./controllers";

export const router = Router();

router.get("/forms", getForms);
