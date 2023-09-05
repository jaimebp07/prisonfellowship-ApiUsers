interface UserPrisonfellowship {
    displayStartupInformation: (req: any, res: any) => void;
    pageNotFound: (req: any, res: any) => void;
  }

const userPrisonfellowship: UserPrisonfellowship = {} as UserPrisonfellowship;

userPrisonfellowship.displayStartupInformation = (_req, res) => {
  res.send('Hello, this is the use authentication api for the prision fellowship!!')
}

userPrisonfellowship.pageNotFound = (_req, res) => {
  res.status(404).send('Not found')
}

export default userPrisonfellowship;