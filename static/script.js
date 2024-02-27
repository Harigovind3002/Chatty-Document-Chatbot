const pdfUpload = document.getElementById("pdf-upload");
const apiKeyInput = document.getElementById("api-key-input");
const uploadButton = document.getElementById("upload-button");
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");
const responseBox = document.getElementById("response-box");
const chatDisplay = document.getElementById("chat-display");
sendButton.addEventListener("click", sendMessage);
let pdfFile;

uploadButton.addEventListener("click", async () => {
    if (!pdfUpload.files.length) {
        alert("Please select a PDF file");
        return;
    }
    pdfFile = pdfUpload.files[0];

    const formData = new FormData();
    formData.append("file", pdfFile);

    try {
        console.log(formData);
        console.log(pdfFile);
        const response = await fetch("/upload", {
            method: "POST",
            body: formData,

        });
        const data = await response.json();
        displayMessage(`Upload PDF`, 'User');
        displayMessage(`${data['pdf_text']}`, 'ChattyBot');
        alert(data['pdf_text']);
    } catch (error) {
        console.error("Error uploading PDF:", error);
    }
});
function displayMessage(message, type) {
    const chatMessage = document.createElement("div");
    chatMessage.classList.add("chat-message");
    chatMessage.innerHTML = '<b>' + type + ":</b><br>" + message;
    chatDisplay.appendChild(chatMessage);
    chatDisplay.scrollTop = chatDisplay.scrollHeight;
}
async function sendMessage() {
    console.log("Heee");
    event.preventDefault();
    const message = messageInput.value.trim();
    if (!message) {
        alert("Please enter a message");
        return;
    }
    try {
        displayMessage(message, 'User');
        const response = await fetch("/ask", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                question: message,
            }),
        });
        const data = await response.json();
        console.log(data['response']);
        displayMessage(`${data['response']}`, 'ChattyBot');
        messageInput.value = "";
    } catch (error) {
        console.error("Error sending message:", error);
    }
}

function handleEnter(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        sendMessage();
    }
}