const uploadFileBtn = document.querySelector("#upload-file-btn");
const uploadMaterialFormNode = document.querySelector("#upload-material-form");
const messagestyleNode = document.querySelector(".messagestyle");

uploadFileBtn.addEventListener("click", function (event) {
  event.preventDefault();
  checkExistedData();
});

function toLoadMaterial() {
  const formData = new FormData(uploadMaterialFormNode);
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "../html/executers/upload-files.php");
  xhr.onload = () => {
    if ((xhr.status = 200)) {
      console.log(xhr.response);
      showmessage();
    }
  };

  xhr.send(formData);
}

function showmessage() {
  messagestyleNode.style.top = "20px";

  setTimeout(function () {
    messagestyleNode.style.top = "-50px";
  }, 3000);
}

function checkExistedData() {
  const formData = new FormData(uploadMaterialFormNode);
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "../html/executers/checkexistedData.php?");
  xhr.onload = () => {
    if ((xhr.status = 200)) {
      if (xhr.response == "exists") {
        alert("Материал ужесуществует");
      } else {
        toLoadMaterial();
      }
    }
  };

  xhr.send(formData);
}
