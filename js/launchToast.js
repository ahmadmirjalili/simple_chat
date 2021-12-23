import { toast } from "./elementList.js";

export const launchToast = (text) => {
  toast.childNodes[1].innerText = text;
  toast.className = "show";
  setTimeout(function () {
    toast.className = toast.className.replace("show", "");
  }, 3000);
  toast.addEventListener("click", () => {
    toast.className = toast.className.replace("show", "");
  });
};
