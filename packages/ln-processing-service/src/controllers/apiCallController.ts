import type { Request, Response } from 'express';
import userPromptDTO from '@iagram/shared/dtos/userPrompt.dto';

export const apiCallController = (req: Request, res: Response) => {
    //
    try {
        // Validate the existence of the userPrompt
        if (!req.body || !req.body.userPrompt)
            throw new Error('userPrompt is required' + JSON.stringify(req));
        // Get the userPrompt from the request body
        const { userPrompt } = req.body;
        // Validate the userPrompt
        const userPromptInstance = new userPromptDTO(userPrompt);


        // Make the api call
        // Ensure api reponse with corresponding DTO
        console.log("API call controller: Api call not implemented yet");
        res.status(200).json({ "message": "Api call not implemented yet" });
    }
    catch (error) {
        console.error('Error in apiCallController:', error.message);
        res.status(500).json({ error: error.message });
    }
}