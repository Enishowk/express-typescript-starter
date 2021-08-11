import express from "express";

import * as userController from "../controllers/userController";

const userRouter = express.Router();

// Route '/users'
userRouter.get("/", userController.getUser);

export default userRouter;
