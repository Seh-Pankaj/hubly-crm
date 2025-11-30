import store from "./store";
import { registerLogin } from "./authReducer";

const user = JSON.parse(localStorage.getItem("user"));

if (user) {
  store.dispatch(registerLogin(user));
}
