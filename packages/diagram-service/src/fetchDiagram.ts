import type { Request, Response } from 'express';
import DiagramRequestDTO from '../../shared/dtos/diagramRequest.dto';
import { generateDiagram } from './lib/diagram-generator';

export async function fetchDiagram(req: Request, res: Response) {
    try {
        const { diagramType, outputFormat, diagramCode } = req.body;
        console.log(diagramType, outputFormat, diagramCode);
        const diagram = new DiagramRequestDTO(diagramType, outputFormat, diagramCode);
        const response = await generateDiagram(diagram);
        res.status(200).end(response);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(400).json({ error: error.message });
    }
}
