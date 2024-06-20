const saveChandegNode = document.querySelector("#saveChandes");
const lectNameNode = document.querySelector("#lectName");
const lectPassNode = document.querySelector("#lectPass");
const lectEmailNode = document.querySelector("#lectEmail");
const lectPassQuestionNode = document.querySelector("#lectPassQuestion");

toFillInputs();

saveChandegNode.addEventListener("click", function (event) {
  event.preventDefault();
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "../html/executers/change-lecturer-data.php?name=" +
      encodeURIComponent(lectNameNode.value) +
      "&lectPass=" +
      encodeURIComponent(lectPassNode.value) +
      "&lectEmail=" +
      encodeURIComponent(lectEmailNode.value) +
      "&help_question=" +
      encodeURIComponent(lectPassQuestionNode.value)
  );

  xhr.send();
});

function toFillInputs() {
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "../html/executers/change-lecturer-data.php?getDatalStatus=getData"
  );

  xhr.onload = () => {
    const serverResponse = xhr.response.split("D-)9*9HHpdhhs%67@#$@**$#&");
    console.log(serverResponse);
    lectEmailNode.value = serverResponse[0];
    lectPassNode.value = serverResponse[1];
    lectPassQuestionNode.value = serverResponse[2];
    lectNameNode.value = serverResponse[3];
  };

  xhr.send();
}
