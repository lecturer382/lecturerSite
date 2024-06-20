const signUpRegistrateNode = document.querySelector("#register");
const signUpNamelNone = document.querySelector("#sign-up-name");
const signUpPasswordOne = document.querySelector("#sign-up-password");
const signUpFormNode = document.querySelector("#sign-up-form");
const lecturerPasswordNode = document.querySelector("#lecturer-password");
const lecturerSubmitBtnNode = document.querySelector("#lecturer_submit-btn");
const lecturerPasswordModalWindow = document.querySelector("#im-a-lecturer");
const userGroup = document.querySelector("#user-sign-up-group");

// sign-up hidden inputs to be shown
const signUpInpropriateEmailSpanNode = document.querySelector(
  "#sign-up-unpropriate-email"
);
const signUpIatePasswordSpanNode = document.querySelector(
  "#sign-up-unpropriate-password"
);

const signUpIateGroupSpanNode = document.querySelector(
  "#sign-up-unpropriate-group"
);

lecturerPasswordModalWindow.value = ""; //что то важное!!!!!!!!

signUpPasswordOne.addEventListener("input", toBlockInput);
userGroup.addEventListener("input", toBlockInput);

signUpRegistrateNode.addEventListener("click", toValidData);
lecturerSubmitBtnNode.addEventListener("click", toValidData);

function toValidData() {
  if (
    (signUpNamelNone.value && signUpPasswordOne.value && userGroup.value) ||
    (signUpNamelNone.value && lecturerPasswordNode.value)
  ) {
    const formData = new FormData(signUpFormNode);
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "../html/executers/create-user.php");
    xhr.onload = () => {
      console.log(xhr.response);
      if (xhr.responseText == "lecturer_created") {
        localStorage.setItem("username", signUpNamelNone.value);
        //localStorage.setItem("lectPass", lecturerPasswordNode.value);
        window.location.href = "../html/lecturer-cabinet.html";
      } else if (xhr.responseText == "user_created") {
        localStorage.setItem("username", signUpNamelNone.value);
        localStorage.setItem("userPass", signUpPasswordOne.value);
        localStorage.setItem("userGroup", userGroup.value);
        window.location.href = "../html/face-page.php";
      } else if (xhr.responseText == "exist") {
        alert(
          "Проблемы с регистрцией попробуйте изменить вводимые вами данные в полях"
        );
      } else {
        signUpInpropriateEmailSpanNode.classList.add("showed-warning");
        signUpIatePasswordSpanNode.classList.add("showed-warning");
        signUpIateGroupSpanNode.classList.add("showed-warning");
      }
    };

    xhr.send(formData);
  } else {
    alert("Введите все данные!!!");
  }
}

function toBlockInput() {
  if (signUpPasswordOne.value.trim() !== "" || userGroup.value.trim() !== "") {
    lecturerPasswordModalWindow.disabled = true;
  } else {
    lecturerPasswordModalWindow.disabled = false;
  }
}
