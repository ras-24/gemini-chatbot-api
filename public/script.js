const form = document.getElementById("chat-form");
const input = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");
const API_URL = "/api/chat";

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const userMessage = input.value.trim();
  if (!userMessage) return;

  appendMessage("user", userMessage);
  const thinkingMessage = appendMessage("bot", "Thinking...");
  input.value = "";
  input.focus();

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: [{ role: "user", content: userMessage }],
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to get response from server.");
    }

    const data = await response.json();

    if (data.result) {
      thinkingMessage.textContent = data.result;
    } else {
      thinkingMessage.textContent = "Sorry, no response received.";
    }
  } catch (error) {
    console.error("Error:", error);
    thinkingMessage.textContent = "Failed to get response from server.";
  }
});

function appendMessage(sender, text) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
  return msg; // Return the element to allow modification
}
