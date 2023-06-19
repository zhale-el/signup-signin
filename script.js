const btnSignIn = document.getElementById("signin");

const btnSignUp = document.getElementById("signup");
const divMain = document.getElementById("main");
btnSignUp.addEventListener("click", () => {
  divMain.classList.add("right-panel-active");
});
btnSignIn.addEventListener("click", () => {
  divMain.classList.remove("right-panel-active");
});
