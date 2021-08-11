import express from "express";

import * as defaultController from "../controllers/defaultController";

const defaultRouter = express.Router();

// Route '/'
defaultRouter.get("/", defaultController.index);

export default defaultRouter;
