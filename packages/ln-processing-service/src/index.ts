import dotenv from 'dotenv';
import type { Request, Response } from 'express';
import express from 'express';
import { apiCallController } from './controllers/apiCallController.ts';
dotenv.config();
const app = express();
const port = process.env.PORT || 3001;
app.use(express.json());

// Test route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello from TypeScript + Express!');
});


// Diagram route
app.post('/api-call', apiCallController);



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
