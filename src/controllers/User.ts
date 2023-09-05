import { Request, Response } from "express";

interface UserPrisonfellowship {
  displayStartupInformation: (req: Request, res: Response) => void;
  pageNotFound: (req: Request, res: Response) => void;
}

const userPrisonfellowship: UserPrisonfellowship = {} as UserPrisonfellowship;

userPrisonfellowship.displayStartupInformation = (_req, res) => {
  res.send('Hello, this is the use authentication api for the prision fellowship!!')
}

userPrisonfellowship.pageNotFound = (_req, res) => {
  res.status(404).send('Not found')
}

export default userPrisonfellowship;