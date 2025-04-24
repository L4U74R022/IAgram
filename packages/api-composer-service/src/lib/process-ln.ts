import userPromptDTO from "@iagram/shared/dtos/userPrompt.dto";

const processLn = async (userPrompt: userPromptDTO) => {
    const response = await fetch('http://localhost:3001/api-call', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userPrompt),
    })
    if (!response.ok) {
        throw new Error(`Error calling ln-processing-service: ${response.status} - ${(response.statusText)}`);
    }
    return await response.json();
}
export default processLn;