import compression from 'compression';
import express from 'express';
import helmet from 'helmet';

const app = express();
// init helmet
app.use(helmet());
// compress all responses
app.use(compression());

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3000, () =>
  console.log('Listening on port 3000! http://localhost:3000')
);
