const saveChandegNode = document.querySelector("#saveChandes");
const userNameNode = document.querySelector("#userName");
const userPassNode = document.querySelector("#userPass");
const userGroupNode = document.querySelector("#userGroup");

let userCurNameNode;
let userCurPassNode;
let userCurGroupNode;

toFillInputs();

console.log(userCurGroupNode);

saveChandegNode.addEventListener("click", function (event) {
  event.preventDefault();
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "../html/executers/change-user-data.php?userName=" +
      encodeURIComponent(userNameNode.value) +
      "&userPass=" +
      encodeURIComponent(userPassNode.value) +
      "&userGroup=" +
      encodeURIComponent(userGroupNode.value) +
      "&userCurName=" +
      encodeURIComponent(userCurNameNode) +
      "&userCurPass=" +
      encodeURIComponent(userCurPassNode) +
      "&userCurGroup=" +
      encodeURIComponent(userCurGroupNode)
  );

  xhr.onload = () => {
    if (xhr.status == 200) {
      const serverResponse = xhr.response.split("%");
      console.log(serverResponse);
      localStorage.setItem("username", serverResponse[0]);
      localStorage.setItem("userPass", serverResponse[1]);
      localStorage.setItem("userGroup", serverResponse[2]);
      toFillInputs();
    }
  };

  xhr.send();
});

function toFillInputs() {
  userNameNode.value = localStorage.getItem("username");
  userPassNode.value = localStorage.getItem("userPass");

  if (
    localStorage.getItem("userGroup") == "empty" ||
    localStorage.getItem("userGroup") == ""
  ) {
    const xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      "../html/executers/change-user-data.php?userGroup=empty&userName=" +
        encodeURIComponent(localStorage.getItem("username")) +
        "&userPass=" +
        encodeURIComponent(localStorage.getItem("userPass"))
    );

    xhr.onload = () => {
      if (xhr.status == 200) {
        localStorage.setItem("userGroup", xhr.response);
        userGroupNode.value = localStorage.getItem("userGroup");
        userCurNameNode = userNameNode.value;
        userCurPassNode = userPassNode.value;
        userCurGroupNode = userGroupNode.value;
      }
    };

    xhr.send();
  } else {
    userGroupNode.value = localStorage.getItem("userGroup");
    userGroupNode.value = localStorage.getItem("userGroup");
    userCurNameNode = userNameNode.value;
    userCurPassNode = userPassNode.value;
    userCurGroupNode = userGroupNode.value;
  }
}
