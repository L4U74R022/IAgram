import type { Request, Response } from 'express';
import userPromptDTO from '@iagram/shared/dtos/userPrompt.dto';
import modelResponseDTO from '@iagram/shared/dtos/modelResponse.dto';
import processLn from '../lib/process-ln';
import DiagramRequestDTO, { DiagramType } from '@iagram/shared/dtos/diagramRequest.dto';
import DiagramResponseDTO from '@iagram/shared/dtos/diagramResponse.dto';
import diagram from '../lib/diagram';


export const getDiagram = async (req: Request, res: Response) => {
    //
    try {
        // Validate the existence of the promp
        if (!req.body || !req.body.prompt || req.body.prompt === "")
            throw new Error('Prompt is required');

        // Get the prompt from the request body
        const { prompt } = req.body;

        // Validate the prompt
        const userPrompt = new userPromptDTO(prompt);

        // Call the processLn function to get the response
        const response = await processLn(userPrompt); // As this throws an error if not done correctly, we don't need to check the response for null or undefined

        // console.log(response);

        // Validate HTTP response 
        const modelResponse = new modelResponseDTO(response.message, response.diagramType, response.diagramCode);

        const request = new DiagramRequestDTO(modelResponse.diagramType as DiagramType, modelResponse.diagramCode)
        // call the diagram generation service
        const diagramed = await diagram(request);

        // validate diagram response
        // const diagramed = new DiagramResponseDTO(diagramResponse);

        // Send the diagram response back to the client
        res.header('Content-Type', 'image/svg+xml');
        res.status(200).send(diagramed);
    }
    catch (error) {
        // Handle errors
        // console.error('Error generating diagram:', error);
        res.status(500).json({ error: error.message });
        // res.status(500).json({ error: 'An error occurred while generating the diagram. Please try again' });
    }
}