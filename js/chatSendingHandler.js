import {
  chatContainer,
  chatSendIcon,
  chatTextarea,
  sendMessageContainer,
} from "./elementList.js";
import { getUserInformation, messageList } from "./messageList.js";
import { renderMassage } from "./renderMessageList.js";
import { sendMessage, socket } from "./socket.js";
import { scrollToBottom, scrollToTop } from "./utilsFunction.js";
export const textareaHandler = (e) => {
  chatTextarea.addEventListener("input", (e) => {
    changeMicToSendIcon(e.target.value);
  });
  sendMessageContainer.addEventListener("click", onSendMessage);
};
const changeMicToSendIcon = (txt) => {
  if (txt.length === 0) {
    chatSendIcon.innerText = "mic";
  } else {
    chatSendIcon.innerText = "send";
  }
};
const onSendMessage = () => {
  if (chatTextarea.value !== "") {
    const getTextMessage = chatTextarea.value;
    chatTextarea.value = "";
    changeMicToSendIcon("");
    sendMessage(getUserInformation().username, getTextMessage);
    messageList.push({ message: getTextMessage.trim(), type: "receiver" });
    renderMassage(messageList);
    scrollToTop(chatContainer.childNodes[chatContainer.childNodes.length - 1]);
  }
};
