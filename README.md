 # Getting Started 🚀

## Follow these steps to set up and run the backend service locally.

You need a valid API key to communicate with the Gemini models. 

1. Create your Gemini API Key: Obtain a key from the Google AI Studio platform:

  > [https://aistudio.google.com/api-keys]

## Setup

1. Clone the Repository:
  Bash

    ```git clone .... ```
    ``` cd repo ... ```

2. Install Dependencies: This project is built with Node.js and the Express framework.
  Bash


  ```npm install```             

3. Configure Environment Variables: Create a file named .env in the root directory of the project and add your API key:

```GEMINI_API_KEY="YOUR_API_KEY_HERE"```

## Usage 🛠️ 
## Running the Server

```node index.js```

### The backend server will start and listen on port 3001 (or the port defined in your configuration).

API Endpoint
> The service exposes a single GET endpoint to fetch an AI-generated task suggestion:

Method	          | Endpoint                   | Description
***GET	          | /api/suggest	           | Calls the Gemini API to request a creative task suggestion.**


## AI Model Used
This service uses the following model, which is available in the Free Tier (subject to usage limits):

***Model: gemini-2.5-flash**

## Technology Stack 🤝
> Backend: Node.js
> Framework: Express
> AI Integration: @google/generative-ai SDK
> Dependencies: cors, dotenv