import express from 'express';

import userController from '../controllers/userController';

const userRouter = express.Router();

// Route '/user'
userRouter.get('/', userController.getUser);

export default userRouter;
