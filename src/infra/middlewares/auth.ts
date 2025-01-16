import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { env } from "../env/env";

export interface TokenPayload {
  id: string;
  name: string;
  email: string;
}

export class AuthMiddleware {

  createToken(payload: TokenPayload, expiresIn: string = "1h"): string {
    return jwt.sign(payload, env.SECRET_JWT, { expiresIn });
  }

  async verifyToken(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      throw new Error("Token não existe");
    }

    const payload = jwt.verify(token, env.SECRET_JWT) as {
      id: string;
      name: string;
      email: string;
    };

    if (payload) {
      throw new Error("Token invalido");
    }

   next()
  }
}
