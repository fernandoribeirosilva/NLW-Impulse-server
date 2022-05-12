import { Router, Request, Response } from "express";
import { NodemailerMailAdapter } from "./adapters/nodemailer/nodemailer-mail-adapter";
import { PrismaFeedbacksRepository } from "./repositories/prisma/prisma-feedbacks-repository";
import { SubmitFeedbackUseCase } from "./use-cases/submit-feedback-use-case";

export const route = Router();

route.post('/feedbacks', async (req: Request, res: Response) => {
   const { type, comment, screenshot } = req.body;

   try {
      const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
      const nodemailerMailAdapter = new NodemailerMailAdapter()

      const submitFeedbackUseCase = new SubmitFeedbackUseCase(prismaFeedbacksRepository, nodemailerMailAdapter);

      await submitFeedbackUseCase.execute({
         type,
         comment,
         screenshot
      })



      return res.status(201).json({});
   } catch (err) {
      console.log(err);

      return res.status(500).send();
   }
});

