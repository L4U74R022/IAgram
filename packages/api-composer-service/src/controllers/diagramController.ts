import type { Request, Response } from 'express';
import userPromptDTO from '@iagram/shared/dtos/userPrompt.dto';

export const getDiagram = (req: Request, res: Response) => {
    //
    try {
        // Validate the existence of the promp
        if (!req.body || !req.body.prompt)
            throw new Error('Prompt is required:' + JSON.stringify(req));

        // Get the prompt from the request body
        const { prompt } = req.body;

        // Validate the prompt
        const userPrompt = new userPromptDTO(prompt);
        // http call to natural language processing service
        // const response = await generateDiagram(userPrompt);

        fetch('http://localhost:3001/api-call', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userPrompt),
        })
            .then((response) => { console.log("success", response) })
            .catch((error) => { console.error('Error:', error); });


        // validate rpc response 
        // const modelResponse = new modelResponseDTO(response.diagramType, response.diagramCode);

        // call the diagram generation service
        // const diagramResponse = await generateDiagram(modelResponse);

        // validate diagram response
        // const diagramResponse = new DiagramResponseDTO(diagramResponse);

        // Send the diagram response back to the client
        // res.status(200).json(diagramResponse);
        res.status(200).json({ "message": "Diagram generation is not implemented yet." });

    }
    catch (error) {
        // Handle errors
        // console.error('Error generating diagram:', error);
        res.status(500).json({ error: error.message });
        // res.status(500).json({ error: 'An error occurred while generating the diagram. Please try again' });
    }
}