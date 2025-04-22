import express from 'express';
import type { Request, Response } from 'express';
import { apiCallController } from './controllers/apiCallController.ts';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;


// Test route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello from TypeScript + Express!');
});


// Diagram route
app.post('/api-call', apiCallController);



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
app.use(express.json());