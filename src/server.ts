import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';

// declare all routers
import defaultRouter from './routes/defaultRouter';
import userRouter from './routes/userRouter';

const app = express();
app.use(helmet());
app.use(compression());
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// init your routes
app.use('/', defaultRouter);
app.use('/user', userRouter);

app.listen(3000, () =>
  console.log('Listening on port 3000! http://localhost:3000')
);
