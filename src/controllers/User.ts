interface UserPrisonfellowship {
    displayStartupInformation: (req: any, res: any) => void;
    pageNotFound: (req: any, res: any) => void;
  }

const userPrisonfellowship: UserPrisonfellowship = {} as UserPrisonfellowship;

userPrisonfellowship.displayStartupInformation = (_req, res) => {
  res.send('Hola, esta es la APi de personas a contactar!!')
}

userPrisonfellowship.pageNotFound = (_req, res) => {
  res.status(404).send('Not found')
}

export default userPrisonfellowship;