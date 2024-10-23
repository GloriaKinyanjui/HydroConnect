// Function to handle Watson Assistant interaction  
async function sendMessageToAssistant(userMessage) {
    const apiUrl = 'https://<your-assistant-api-url>'; // Replace with your Watson Assistant API URL
    const apiKey = '<your-api-key>'; // Replace with your Watson Assistant API key

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            input: {
                text: userMessage
            }
        })
    });

    const responseData = await response.json();
    return responseData.output.generic[0].text;
}

// Function to display the assistant's response on the page
document.getElementById('chat-form').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent form from submitting

    // Get the user's message from the input field
    const userMessage = document.getElementById('userMessage').value;

    // Send the message to Watson Assistant and get the response
    const assistantResponse = await sendMessageToAssistant(userMessage);

    // Display the assistant's response on the page
    document.getElementById('response-area').innerText = assistantResponse;
});
