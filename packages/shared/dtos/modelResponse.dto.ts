export default class modelResponseDTO {
    public message: string;
    public diagramType: string;
    public diagramCode: string;
    
    constructor(message: string, diagramType: string, diagramCode: string){
        // Validate the message
        if (!message) 
            throw new Error('Message cannot be empty');
        if (typeof message !== 'string')
            throw new Error('Message must be a string');
        this.message = message;
        // Validate the diagram type
        if (!diagramType) 
            throw new Error('Diagram Type cannot be empty');
        if (typeof diagramType !== 'string') 
            throw new Error('Diagram Type must be a string');
        this.diagramType = diagramType;

        // Validate the diagram code
        if (!diagramCode) 
            throw new Error('Diagram Code cannot be empty');
        if (typeof diagramCode !== 'string') 
            throw new Error('Diagram Code must be a string');
        this.diagramCode = diagramCode;
    }
}