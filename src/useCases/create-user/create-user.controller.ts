import { Request, Response } from "express";
import { CreateUserUsecase } from "./create-user.usecase";

export class CreateUserController {
  async handle(req: Request, res: Response) {
    try {
      const data = req.body;
      const useCase = new CreateUserUsecase();
      const result = await useCase.execute(data);

      return res.json(result);
    } catch(error: any) {
        return res.status(400).json(error.message)
    }
  }
}
