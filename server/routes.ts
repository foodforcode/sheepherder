import { Router } from "express";
import { getForms, postForm, loadForm, updateForm } from "./controllers";

export const router = Router();

router.get("/forms", getForms);
router.post("/form", postForm);
router.get("/form/:id", loadForm);
router.put("/form/:id", updateForm);
