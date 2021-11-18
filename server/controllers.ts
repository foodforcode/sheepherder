import { forms } from "../api/forms";
import { Request, Response } from "express";
import { PrismaClient, Prisma } from "@prisma/client";
import { userInfo } from "os";

const prisma = new PrismaClient();

export const getForms = (req: Request, res: Response) => {
  res.send(forms);
};

export const postForm = async (req: Request, res: Response) => {
  let form: Prisma.applicationCreateInput;

  const createForm = await prisma.application.create({
    data: req.body.params.values,
  });

  res.send(createForm);
};

export const loadForm = async (req: Request, res: Response) => {
  const { id } = req.body;

  const findForm = await prisma.application.findUnique({
    where: {
      id: id,
    },
  });

  res.json(findForm);
};
