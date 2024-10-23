const express = require('express');
const bodyParser = require('body-parser');
const AssistantV2 = require('ibm-watson/assistant/v2');
const { IamAuthenticator } = require('ibm-watson/auth');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Body-parser middleware
app.use(bodyParser.json());

// Watson Assistant configuration
const assistant = new AssistantV2({
  version: '2021-06-14',
  authenticator: new IamAuthenticator({
    apikey: process.env.ASSISTANT_APIKEY,
  }),
  serviceUrl: process.env.ASSISTANT_URL,
});

// Create a new session
app.get('/api/session', async (req, res) => {
  try {
    const session = await assistant.createSession({
      assistantId: process.env.ASSISTANT_ID,
    });
    res.json(session.result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create session' });
  }
});

// Send message to assistant
app.post('/api/message', async (req, res) => {
  const { message } = req.body;
  try {
    const session = req.query.session_id;
    const response = await assistant.message({
      assistantId: process.env.ASSISTANT_ID,
      sessionId: session,
      input: {
        'message_type': 'text',
        'text': message,
      },
    });
    res.json(response.result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
