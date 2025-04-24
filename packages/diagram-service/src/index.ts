import type { Request, Response } from 'express';
import express from 'express';
import DiagramRequestDTO from '../../shared/dtos/diagramRequest.dto';
import { fetchDiagram } from './fetchDiagram';
import { generateDiagram } from './lib/diagram-generator';

const app = express();
const port = 3005;

const diagramDemo = new DiagramRequestDTO(
    'graphviz',
    'digraph { A -> B; C -> D; B -> D }'
);
const DbDiagram = new DiagramRequestDTO(
    'dbml',
    `table Customers { 
    Id int [pk, increment]
    Name varchar(50)
    Address varchar(50)
}
table Orders { 
    Id int [pk, increment]
    CustomerId int [ref: > Customers.Id]
    OrderDate date
}`
);

app.use(express.json());

// Test route
app.get('/', async (req: Request, res: Response) => {
    // console.log(diagramDemo);
    const resDiag = await Promise.all([
        generateDiagram(diagramDemo),
        generateDiagram(DbDiagram),
    ]);
    res.send(resDiag.reduce((d, acc) => acc + d, ''));
});
app.post('/diagram', fetchDiagram);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
