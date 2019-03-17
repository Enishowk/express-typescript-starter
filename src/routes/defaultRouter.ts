import express from 'express';

import defaultController from '../controllers/defaultController';

const defaultRouter = express.Router();

// Route '/'
defaultRouter.get('/', defaultController.index);

export default defaultRouter;
