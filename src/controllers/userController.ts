import { Request, Response } from 'express';

const getUser = (req: Request, res: Response) => {
  res.send('Hello User!');
};

export default {
  getUser
};
