export default class userPromptDTO {
    public userPrompt: string;
    constructor(userPrompt: string) {
        // Validate the payload
        if (!userPrompt) 
            throw new Error('Payload cannot be empty');
        if (typeof userPrompt !== 'string') 
            throw new Error('Payload must be a string');
        this.userPrompt = userPrompt;
    }
}