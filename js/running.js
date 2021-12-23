import { textareaHandler } from "./chatSendingHandler.js";
import { launchToast } from "./launchToast.js";
import { getUserInformation, messageList } from "./messageList.js";
import { renderMassage } from "./renderMessageList.js";
import { socket, socketIo } from "./socket.js";
import { scrollToBottom } from "./utilsFunction.js";

export const runningFunction = () => {
  socketIo.on("message", (m) => console.log(m));
  renderMassage(messageList);
  scrollToBottom();
  textareaHandler();
  socket(getUserInformation().username, getUserInformation().username);
};
