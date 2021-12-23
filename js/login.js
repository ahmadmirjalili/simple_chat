import {
  loginUserName,
  loginPassword,
  loginButton,
  loginReceiverUsername,
  modalContainer,
  errorText,
} from "./elementList.js";
import { handelResStatus } from "./fetchMethod/handelResStatus.js";
import { POST } from "./fetchMethod/postFetch.js";
import { register } from "./fetchMethod/routes.js";
import { launchToast } from "./launchToast.js";
import { getUserInformation } from "./messageList.js";
import { runningFunction } from "./running.js";

import { generateFakeEmail, removeToken, setToken } from "./utilsFunction.js";
let canClick = false;
export const login = () => {
  modalContainer.style.display = "flex";
  loginUserName.addEventListener("input", (e) => {
    activeLoginButton();
  });
  loginPassword.addEventListener("input", (e) => {
    activeLoginButton();
  });
  loginReceiverUsername.addEventListener("input", (e) => {
    activeLoginButton();
  });
  activeLoginButton();
};
const activeLoginButton = () => {
  if (
    loginUserName.value.length > 3 &&
    loginPassword.value.length > 3 &&
    loginReceiverUsername.value.length > 3
  ) {
    loginButton.style.backgroundColor = "var(--chat-primary)";
    canClick = true;
  } else {
    loginButton.style.backgroundColor = "var(--chat-gray)";
  }
};
loginButton.addEventListener("click", async () => {
  if (canClick) {
    console.log("run here");
    loginButton.disabled = true;
    loginButton.style.backgroundColor = "var(--chat-gray)";
    const getUserInfo = await POST(register, {
      email: generateFakeEmail(),
      password: "1234",
      username: loginUserName.value,
    });
    if (handelResStatus(getUserInfo)) {
      removeToken();
      // setToken(getUserInfo.jwt);
      modalContainer.style.display = "none";
      runningFunction();
      launchToast(`همه چی درسته خوش اومدی ${loginUserName.value} جون ‍‍‍`);
    } else {
      errorText.style.display = "block";
      loginButton.style.backgroundColor = "var(--chat-gray)";
    }
    loginUserName.value = null;
    loginPassword.value = null;
    loginReceiverUsername.value = null;
  }
});
