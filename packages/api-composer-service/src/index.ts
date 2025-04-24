import express from 'express';
import type { Request, Response } from 'express';
import { getDiagram } from './controllers/diagramController.ts';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Test route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello from TypeScript + Express!');
});


// Diagram route
app.post('/diagram', getDiagram);


app.listen(port, () => {
  console.log(process.env.PORT)
  console.log(`Server running at http://localhost:${port}`);
});