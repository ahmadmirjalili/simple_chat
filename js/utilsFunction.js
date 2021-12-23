import { chatContainer } from "./elementList.js";

export const scrollToBottom = (smooth = false) => {
  setTimeout(() => {
    chatContainer.scrollTo({
      left: 0,
      top: chatContainer.scrollHeight,
      behavior: smooth ? "smooth" : "auto",
    });
  }, 0);
};
export const scrollToTop = (lastElement, smooth = true) => {
  setTimeout(() => {
    lastElement.scrollIntoView({
      behavior: smooth ? "smooth" : "auto",
    });
  }, 300);
};
export const generateFakeEmail = () => {
  return `${Math.random() * 1000000000}a${Math.random() * 10000000000}a${
    Math.random() * 10000000000000
  }a${Math.random() * 100000000}a@a.com`;
};

export const setToken = (token) => {
  localStorage.setItem("JwtToken", token);
};
export const getToken = () => {
  return localStorage.getItem("JwtToken");
};
export const removeToken = () => {
  localStorage.removeItem("JwtToken");
};
