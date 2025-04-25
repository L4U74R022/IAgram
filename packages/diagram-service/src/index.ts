import type { Request, Response } from 'express';
import express from 'express';
import { fetchDiagram } from './fetchDiagram';

const app = express();
const port = 3005;

app.use(express.json());

// Test route
app.get('/', async (req: Request, res: Response) => {
    // console.log(diagramDemo);
    req.body = {
        diagramType: 'graphviz',
        outputFormat: 'svg',
        diagramCode: 'digraph {    usuario -> sucursal [label="linkeado a"]}',
    };
    fetchDiagram(req, res);
});
app.post('/diagram', fetchDiagram);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
