export type DiagramType = 'blockdiag' | 'graphviz' | 'pnantuml';
export type Format = 'svg';

export default class DiagramRequestDTO {
    constructor(
        public readonly diagramType: DiagramType,
        public readonly diagramCode: string,
        public readonly outputFormat: Format = 'svg'
    ) {
        // Validate the payload
        this.validate(diagramType, outputFormat, diagramCode);
    }

    private validate(
        diagramType: string,
        outputFormat: string,
        diagramCode: string
    ) {
        if (!diagramType) throw new Error('Diagram type cannot be empty');
        if (typeof diagramType !== 'string')
            throw new Error('Diagram type must be a string');
        if (!outputFormat) throw new Error('Output format cannot be empty');
        if (typeof outputFormat !== 'string')
            throw new Error('Output format must be a string');
        if (!diagramCode) throw new Error('Diagram code cannot be empty');
        if (typeof diagramCode !== 'string')
            throw new Error('Diagram code must be a string');
        
        const validDiagramTypes: DiagramType[] = ['blockdiag', 'graphviz', 'pnantuml'];
        const validFormats: Format[] = ['svg'];

        if (!validDiagramTypes.includes(diagramType as DiagramType)) {
            throw new Error(`Invalid diagram type: ${diagramType}`);
        }
        if (!validFormats.includes(outputFormat as Format)) {
            throw new Error(`Invalid output format: ${outputFormat}`);
        }
    }
}
