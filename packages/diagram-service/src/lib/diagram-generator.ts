import DiagramRequestDTO from '@iagram/shared/dtos/diagramRequest.dto';

const KROKI_URL = 'http://localhost:8000';

export async function generateDiagram(diagram: DiagramRequestDTO) {
    const url = `${KROKI_URL}/${diagram.diagramType}/${diagram.outputFormat}`;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain',
        },
        body: diagram.diagramCode,
    });
    return response.text();
}
