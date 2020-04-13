import { Request, Response } from "express";
import createUser from "./services/CreateUser";

export function helloDude(req: Request, res: Response) {
  const user = createUser({
    name: "Nome",
    email: "email@email.email",
    password: "password",
  });

  return res.json({ chama: "noreske" });
}
