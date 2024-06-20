const getUpSignUpNode = document.querySelector(".get-up-sign-up");
const signUpNode = document.querySelector("#sign-up-form");
const cancelBtn = document.querySelector("#cancel-register");

const logInFormNode = document.querySelector("#log-in-form");
logInFormNode.method = "POST";

function toRisesignUp() {
  signUpNode.style.bottom = "0px";
  signUpNode.method = "POST";
}

function toDownignUp() {
  signUpNode.style.bottom = "-101%";
  signUpNode.method = "POST";
}

getUpSignUpNode.addEventListener("click", toRisesignUp);
cancelBtn.addEventListener("click", toDownignUp);

const imaLecturerNode = document.querySelector("#im-a-lecturer");
const modalWindowWrapperNode = document.querySelector(".modal-window-wrapper");
const modalWindowCancelNode = document.querySelector("#cancel-submit-btn");

function showModalWindow() {
  modalWindowWrapperNode.style.display = "flex";
  imaLecturerNode.checked = false;
}

function hideModalWindow() {
  modalWindowWrapperNode.style.display = "none";
}

imaLecturerNode.addEventListener("change", showModalWindow);
modalWindowCancelNode.addEventListener("click", hideModalWindow);
