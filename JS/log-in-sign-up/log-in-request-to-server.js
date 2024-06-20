const logInNamelNode = document.querySelector("#log-in-name");
const logInPasswordNode = document.querySelector("#log-in-password");
const logInBtnNode = document.querySelector("#log-in-btn");

/* hidden spans */
const unpropriateEmailSpanNode = document.querySelector("#unpropriate-email");
const unpropriatePasswordSpanNode = document.querySelector(
  "#unpropriate-password"
);

const logInFormForServerNode = document.querySelector("#log-in-form");

function toSendLogInData() {
  if (logInNamelNode.value && logInPasswordNode.value) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "../html/executers/log-in-user.php");

    const logInFormData = new FormData(logInFormForServerNode);
    logInFormData.append("log-in-name", logInNamelNode.value);
    logInFormData.append("log-in-password", logInPasswordNode.value);

    xhr.onload = () => {
      console.log(xhr.response);
      if (xhr.responseText == "user let in!") {
        toSendUserSession();
        window.location.href = "../html/face-page.php";
      } else if (xhr.responseText == "lecturer let in!") {
        toSendUserSession();
        window.location.href = "../html/lecturer-cabinet.html";
      } else {
        unpropriateEmailSpanNode.classList.add("showed-warning");
        unpropriatePasswordSpanNode.classList.add("showed-warning");
      }
    };
    xhr.send(logInFormData);
  }
}

logInBtnNode.addEventListener("click", toSendLogInData);

function toSendUserSession() {
  localStorage.setItem("username", logInNamelNode.value);
  localStorage.setItem("userPass", logInPasswordNode.value);
  localStorage.setItem("userGroup", "empty");
  localStorage.setItem("lectPass", logInPasswordNode.value);
}
