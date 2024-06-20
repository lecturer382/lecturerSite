const forgotPassTextNode = document.querySelector("#forgot-pass-text");

forgotPassTextNode.addEventListener("click", forgotPasswordWindow);

function forgotPasswordWindow() {
  const forgotPasswordDiv = document.createElement("div");
  forgotPasswordDiv.classList.add("forgotPassModalWindowStyle");
  forgotPasswordDiv.id = "forgotPassModalWindow";
  forgotPasswordDiv.innerHTML = `<div class="imalecturer forgotPassnavig" onclick="tosendLecturerPass()">
                                      <span class="forgotpassText">Я преподаватель</span>
                                    </div>
                                    <div class="imastudent forgotPassnavig" onclick="tosendamail()">
                                      <span class="forgotpassText">Я студент</span>
                                    </div>
                                    <button class="form-button" id="cancel-forgot-pass-btn">Отмена</button>`;
  document.body.appendChild(forgotPasswordDiv);

  const cancelForgotPassBtnNode = document.querySelector(
    "#cancel-forgot-pass-btn"
  );
  cancelForgotPassBtnNode.addEventListener("click", function () {
    forgotPasswordDiv.remove();
  });
}

function tosendamail() {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "../html/executers/sendissuemailToLecturer.php");

  xhr.onload = () => {
    const lectEmail = xhr.response;
    const subject = "Утрата пароля";
    const body =
      "Пароль студента группы (Далее группа), (ФИО студента) был утерян, просьба сообщить пароль";

    // Создаем mailto URL
    const mailtoLink = `mailto:${lectEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Открываем почтовый клиент
    window.open(mailtoLink);
  };

  xhr.send();
}

function tosendLecturerPass() {
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "../html/executers/sendissuemailToLecturer.php?getlectPassStatus=GetPass"
  );

  xhr.onload = () => {
    const hintQuestionWindow = document.createElement("div");
    hintQuestionWindow.classList.add("forgotPassModalWindowStyle");
    hintQuestionWindow.id = "hint-question-window";
    hintQuestionWindow.innerHTML = `${xhr.response}
                                    <button class="form-button" id="cancel-hint-question-btn">Отмена</button>`;
    document.body.appendChild(hintQuestionWindow);

    const forgotPassModalWindowNode = document.querySelector(
      "#forgotPassModalWindow"
    );

    const cancelForgotPassBtnNode = document.querySelector(
      "#cancel-hint-question-btn"
    );
    cancelForgotPassBtnNode.addEventListener("click", function () {
      hintQuestionWindow.remove();
      forgotPassModalWindowNode.remove();
    });
  };

  xhr.send();
}

function toClosefrgtPassWindow() {
  const forgotPassModalWindowNode = document.querySelector(
    "#forgotPassModalWindow"
  );
  forgotPassModalWindowNode.remove();
}
