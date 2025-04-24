import DiagramRequestDTO from "@iagram/shared/dtos/diagramRequest.dto";


const processLn = async (request: DiagramRequestDTO) => {
    const response = await fetch('http://localhost:3005/diagram', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
    })
    if (!response.ok || response.status !== 200) {
        throw new Error(`Error calling diagram-service: ${response.status} - ${(response.statusText)}`);
    }
    // console.log('Response from diagram-service:', await response.text());
    return await response.text();
}
export default processLn;