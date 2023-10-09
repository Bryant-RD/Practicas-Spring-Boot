import { loginUser } from "./api/user.controller.js";

const userName = document.getElementById("userName");
const password = document.getElementById("password");
const btnLogin = document.getElementById("btnLogin");
// console.log(userName.value);

btnLogin.addEventListener("click", (e) => {
    e.preventDefault();
    loginUser(userName.value, password.value);
})