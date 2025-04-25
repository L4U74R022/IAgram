import type { Request, Response } from 'express';
import userPromptDTO from '@iagram/shared/dtos/userPrompt.dto';
import modelResponseDTO from '@iagram/shared/dtos/modelResponse.dto';
import apiCall from '../lib/ln-call';

export const apiCallController = async (req: Request, res: Response) => {
    //
    try {
        // Validate the existence of the userPrompt
        if (!req.body || !req.body.userPrompt || req.body.userPrompt === '')  // Check if userPrompt is present in the request body 
            throw new Error('userPrompt is required');
        // Get the userPrompt from the request body
        const { userPrompt } = req.body;
        // Validate the userPrompt
        const userPromptInstance = new userPromptDTO(userPrompt);

        // Call the LN api with the userPrompt
        const response = await apiCall(userPromptInstance);

        //Ensure API response with the DTO
        const modelResponse = new modelResponseDTO("message", "graphviz", response)

        console.log(modelResponse);

        res.status(200).json(modelResponse);
    }
    catch (error) {
        console.error('Error in apiCallController:', error.message);
        res.status(500).json({ error: error.message });
    }
}