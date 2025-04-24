export default class DiagramResponseDTO {
    constructor(
        public readonly diagramType: DiagramType,
        public readonly outputFormat: Format,
        public readonly diagramCode: string
    ) {
        // Validate the payload
        this.validate(diagramType, outputFormat, diagramCode);
    }

    private validate(diagramType: string, outputFormat: string, diagramCode: string) {
        if (!diagramType) throw new Error('Diagram type cannot be empty');
        if (typeof diagramType !== 'string')
            throw new Error('Diagram type must be a string');
        if (!outputFormat) throw new Error('Output format cannot be empty');
        if (typeof outputFormat !== 'string')
            throw new Error('Output format must be a string');
        if (!diagramCode) throw new Error('Diagram code cannot be empty');
        if (typeof diagramCode !== 'string')
            throw new Error('Diagram code must be a string');
    }
}
 type DiagramType = 'graphviz' | 'plantuml' | 'mermaid' | 'dbml'
 type Format = 'svg'