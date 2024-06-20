const fileTypeSelectNode = document.querySelector("#file-type-select");
const uploadFileBlockNode = document.querySelector(".upload-file-block");

fileTypeSelectNode.addEventListener("change", function () {
  const allFileUploadElems = uploadFileBlockNode.querySelectorAll(
    ".file-block-js-elem"
  );
  const allLinkUploadElems = uploadFileBlockNode.querySelectorAll(
    ".link-block-js-elem"
  );
  if (fileTypeSelectNode.value == "link") {
    allFileUploadElems.forEach((elem) => {
      elem.style.display = "none";
    });

    allLinkUploadElems.forEach((elem) => {
      elem.style.display = "block";
    });
  } else {
    allFileUploadElems.forEach((elem) => {
      elem.style.display = "block";
    });

    allLinkUploadElems.forEach((elem) => {
      elem.style.display = "none";
    });
  }
});

const uploadFileNode = document.querySelector(".upload-file");
const fileLabelNode = document.querySelector("label[for='shoose-file-btn']");

function handleChange() {
  const fileName = this.files[0].name;
  fileLabelNode.innerHTML = fileName;
}

uploadFileNode.addEventListener("change", handleChange);
