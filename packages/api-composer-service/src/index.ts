import dotenv from 'dotenv';
import type { Request, Response } from 'express';
import express from 'express';
import { join } from 'path';
import { getDiagram } from './controllers/diagramController.ts';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Test route
app.get('/', (req: Request, res: Response) => {
  res.sendFile(join(__dirname, 'index.html'));
});


// Diagram route
app.post('/diagram', getDiagram);


app.listen(port, () => {
  console.log(process.env.PORT)
  console.log(`Server running at http://localhost:${port}`);
});