# Gemini AI Chatbot

A simple, yet powerful, web-based chatbot application powered by Google's Gemini API. This project features a Node.js/Express backend that communicates with the Gemini model and a clean, responsive frontend built with vanilla JavaScript, HTML, and CSS.

## Features

- **Interactive Chat Interface**: A clean and simple UI for sending and receiving messages.
- **Real-time AI Responses**: Get instant responses from the Google Gemini model.
- **"Thinking" Indicator**: Provides user feedback while the AI is generating a response.
- **Error Handling**: Gracefully handles API errors and displays a user-friendly message.
- **RESTful API**: A simple POST endpoint (`/api/chat`) to interact with the AI.
- **Zero Frontend Dependencies**: Built with pure vanilla JavaScript for a lightweight and fast experience.

## Technology Stack

### Backend

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for Node.js.
- **Google Gemini API (`@google/genai`)**: Node.js client for the Gemini API.
- **dotenv**: For environment variable management.

### Frontend

- **HTML5**
- **CSS3**
- **Vanilla JavaScript (ES6+)**

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v18 or later recommended)
- npm (comes with Node.js)
- A Google Gemini API Key. You can get one from [Google AI Studio](https://aistudio.google.com/u/0/api-keys).

### Installation & Running

1.  **Clone the repository:**

    ```sh
    git clone https://github.com/ras-24/gemini-chatbot-api.git
    ```

2.  **Navigate to the project directory:**

    ```sh
    cd gemini-chatbot-api
    ```

3.  **Install NPM packages:**

    ```sh
    npm install
    ```

4.  **Create a `.env` file** in the root of the project and add your Gemini API key:

    ```
    GEMINI_API_KEY="YOUR_API_KEY_HERE"
    ```

5.  **Start the server:**

    ```sh
    npm start
    ```

6.  **Open your browser** and navigate to `http://localhost:3000` to see the application in action.

## Gemini AI Chatbot in Action
![gemini-ai-chatbot](https://github.com/user-attachments/assets/e2a59bf2-4f4e-4688-bf13-8b66e9e4cc68)


