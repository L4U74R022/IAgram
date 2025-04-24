import userPromptDTO from "@iagram/shared/dtos/userPrompt.dto";

const AIML_URL = 'https://api.aimlapi.com/v1/chat/completions'
const apiCall = async (userPrompt: userPromptDTO) => {
    console.log(process.env.AIML_API_KEY)
    const response = await fetch(AIML_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + process.env.AIML_API_KEY,
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: 'user',
                    content: userPrompt.userPrompt,
                },
            ],
        }),
    })
    if (!response.ok) {
        throw new Error(`Error calling AIML API: ${response.status} - ${(response.statusText)}`);
    }
    const data = await response.json();
    if (data.choices[0].message.content === undefined) {
        throw new Error(`Error parsing AIML API response: no message was provided by the model`);
    }
    if (data.choices[0].message.content === null) {
        throw new Error(`Error parsing AIML API response: message was null`);
    }
    if (data.choices[0].message.content === '') {
        throw new Error(`Error parsing AIML API response: message was empty`);
    }

    return data.choices[0].message.content;
}
export default apiCall;