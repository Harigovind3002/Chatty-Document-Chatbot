# ChattyBot - Your Personal Document Assistant

## Overview
ChattyBot is a FastAPI-based application that serves as a personal document assistant. It allows users to upload PDF files, ask questions based on the content of the PDF, and receive responses from ChattyBot.

### Getting Started
To run ChattyBot locally, follow these steps:

### Clone the repository:
git clone https://github.com/Harigovind3002/Cydratech-Chatty-Document-Chatbot.git

### Navigate to the project directory:
cd Cydratech-Chatty-Document-Chatbot

### Install the required dependencies:
pip install -r requirements.txt

### Set up your environment variables. Ensure you have an OpenAI API key:
export OPENAI_API_KEY=your-api-key

### Run the FastAPI application:
uvicorn main:app --reload

Visit http://localhost:8000 in your browser to access the application.

## API Endpoints
- GET /: Landing page with information about the project.
- POST /upload: Upload a PDF file.
- POST /ask: Ask a question based on the uploaded PDF.
