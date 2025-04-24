import DiagramRequestDTO from "../../../shared/dtos/diagramRequest.dto";

const BASE_URL = 'https://kroki.io';

export async function generateDiagram(diagram: DiagramRequestDTO) {
    const url = `${BASE_URL}/${diagram.diagramType}/${diagram.outputFormat}`;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain',
        },
        body: diagram.diagramCode,
    });
    return response.text();
}