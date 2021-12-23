import { io } from "./socketMin.js";
export const socketIo = io("http://127.0.0.1:1337");
export const socket = (username, room) => {
  socketIo.on(
    "connect",
    function () {
      console.log("socket connect", socketIo);
      socketIo.emit("join", {
        username,
        room,
      });
    },
    (e) => {
      console.log(e);
    }
  );
};

export const sendMessage = (user, message) => {
  socketIo.emit("sendMessage", { user, message });
};
