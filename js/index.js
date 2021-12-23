import { getToken } from "./utilsFunction.js";
import { login } from "./login.js";
import { runningFunction } from "./running.js";

if (getToken()) {
  runningFunction();
} else {
  login();
}
