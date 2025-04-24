import userPromptDTO from "@iagram/shared/dtos/userPrompt.dto";

const AIML_URL = 'https://router.huggingface.co/novita/v3/openai/chat/completions'
const apiCall = async (userPrompt: userPromptDTO) => {
    console.log(process.env.AIML_API_KEY)
    const response = await fetch(AIML_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + process.env.AIML_API_KEY,
        },
        body: JSON.stringify({
            "messages": [
                {
                    "role": "user",
                    "content": "Turn this user request into a graphviz code for kroki diagrams, i need you to only answer with the code and nothing else please: "+ userPrompt.userPrompt
                }
            ],
            "model": "deepseek/deepseek-v3-0324",
            "stream": false
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
    return filterOutput(data.choices[0].message.content);
}
const filterOutput = (output: string) => {
    return output
    .replace(/^```graphviz\s*/, '') // Remove starting triple backticks and 'graphviz'
    .replace(/\s*```$/, '')         // Remove ending triple backticks
    .replace(/\n/g, '');  

}
export default apiCall;