#Project Name
#ChattyBot - Your Personal Document Assistant

Overview
ChattyBot is a FastAPI-based application that serves as a personal document assistant. It allows users to upload PDF files, ask questions based on the content of the PDF, and receive responses from ChattyBot.

Getting Started
To run ChattyBot locally, follow these steps:

Clone the repository:
git clone https://github.com/your-username/chattybot.git

Navigate to the project directory:
cd chattybot

Install the required dependencies:
pip install -r requirements.txt

Set up your environment variables. Ensure you have an OpenAI API key:
export OPENAI_API_KEY=your-api-key

Run the FastAPI application:
uvicorn main:app --reload

Visit http://localhost:8000 in your browser to access the application.

API Endpoints
GET /: Landing page with information about the project.
POST /upload: Upload a PDF file.
POST /ask: Ask a question based on the uploaded PDF.

Usage
Uploading a PDF

Send a POST request to /upload with a PDF file attached:
curl -X POST -F "file=@path/to/your/file.pdf" http://localhost:8000/upload
Asking a Question

Send a POST request to /ask with a JSON payload containing the question:
curl -X POST -H "Content-Type: application/json" -d '{"question": "What is FastAPI?"}' http://localhost:8000/ask
Check the Swagger documentation at http://localhost:8000/docs for more details.
