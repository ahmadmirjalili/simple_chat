import { chatContainer } from "./elementList.js";
import { scrollToBottom } from "./utilsFunction.js";

export const renderMassage = (messageList) => {
  chatContainer.innerHTML = "";
  messageList.map((message) => {
    if (message.type === "sender") {
      const nodeE = document.createElement("div");
      nodeE.innerText = message.message;
      nodeE.className = "chat-sender-item";
      chatContainer.appendChild(nodeE);
    } else {
      const node = document.createElement("div");
      node.innerText = message.message;
      node.className = "chat-receiver-item";
      chatContainer.appendChild(node);
    }
  });
};
