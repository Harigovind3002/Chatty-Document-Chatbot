# ChattyBot API Documentation

ChattyBot provides a simple API for interacting with its features. This documentation outlines the available endpoints, their functionalities, and how to use them.

## Base URL

The base URL for all endpoints is `http://localhost:8000` for local development.

## Endpoints

### 1. Upload PDF File

- **Endpoint:** `/upload`
- **Method:** `POST`
- **Description:** Upload a PDF file to be processed by ChattyBot.
- **Request Payload:**
  - `file`: PDF file to be uploaded.
- **Example using curl:**
  ```bash
  curl -X POST -F "file=@path/to/your/file.pdf" http://localhost:8000/upload
- **Response:**
  ```json
  {
  "pdf_text": "Parsed document successfully."
  }

### 2. Ask Question

- **Endpoint:** `/ask`
- **Method:** `POST`
- **Description:** Ask a question based on the content of the uploaded PDF.
- **Request Payload:**
  - `question`: The question you want to ask.
- **Example using curl:**
  ```bash
  curl -X POST -H "Content-Type: application/json" -d '{"question": "What is FastAPI?"}' http://localhost:8000/ask
- **Response:**
  ```json
  {
  "response": "The answer to your question."
  }

## Response Codes

- **200 OK:** `The request was successful.`
- **400 Bad Request:** `The request was malformed or missing required parameters.`
- **500 Internal Server Error:** `An unexpected error occurred on the server.`

## Error

```json
    {
      "error": "Error message goes here."
    }

