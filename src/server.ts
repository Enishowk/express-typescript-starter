import express from 'express';
import helmet from 'helmet';

const app = express();
app.use(helmet());

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3000, () =>
  console.log('Listening on port 3000! http://localhost:3000')
);
