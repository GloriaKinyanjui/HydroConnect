## Watson Assistant Integration in HydroConnect

### Front-End Integration
The front-end of the HydroConnect platform is built using simple HTML and JavaScript, allowing users to interact with IBM Watson Assistant in real-time. The user interface features a chat form where users can input questions about water conservation, usage tips, or any other relevant information related to water management. This form sends the user's input to the back-end, which handles communication with the Watson Assistant API.

### Back-End Interaction
The back-end is powered by IBM Watson APIs, particularly the Watson Assistant service. When a user submits a question, it is sent to the back-end through an API call to Watson Assistant, which processes the query and returns an appropriate response. The result is then displayed in the user interface, making the interaction seamless and responsive.

### Code Overview:
- `index.html`: This file handles the front-end, where users interact with the form.
- `watson-assistant.js`: This file handles sending requests to Watson Assistant and updating the UI with the responses.

### Steps to Run the Project:
1. Install `http-server` via npm to serve the files.
2. Run the following command in the project folder:
   ```bash
   http-server public
