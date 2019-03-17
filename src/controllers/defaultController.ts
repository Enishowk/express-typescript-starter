import { Request, Response } from 'express';

const index = (req: Request, res: Response) => {
  res.send('Hello World!');
};

export default {
  index
};
