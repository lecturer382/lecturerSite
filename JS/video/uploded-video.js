const searchQueryInputNode = document.querySelector("#search-query-input");

searchQueryInputNode.addEventListener("keydown", function (event) {
  if (event.key === "Enter" || event.keyCode === 13) {
    const allForms = document.querySelectorAll(".data-form");
    event.preventDefault();

    allForms.forEach((element) => {
      element.style.display = "block";
    });

    allForms.forEach((element) => {
      let fileNameNode = element.querySelector(".elem-file-name");
      if (
        fileNameNode.innerHTML
          .toLowerCase()
          .includes(searchQueryInputNode.value.toLowerCase())
      ) {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    });
  }
});

const subjcetFilterNode = document.querySelector("#subjcet-filter");
subjcetFilterNode.addEventListener("change", function () {
  const allForms = document.querySelectorAll(".data-form");

  //console.log(allForms);
  allForms.forEach((element) => {
    element.style.display = "block";
  });

  if (subjcetFilterNode.value == "Все") {
    allForms.forEach((element) => {
      element.style.display = "block";
    });
  } else {
    allForms.forEach((element) => {
      if (subjcetFilterNode.value != element.getAttribute("data-subject")) {
        element.style.display = "none";
      }
    });
  }
});

// importsnt level select _______________________________________

const ImprtLevelFilterNode = document.querySelector("#impr-level-filter");
ImprtLevelFilterNode.addEventListener("change", function () {
  const allForms = document.querySelectorAll(".data-form");

  //console.log(allForms);
  allForms.forEach((element) => {
    element.style.display = "block";
  });

  if (ImprtLevelFilterNode.value == "Все") {
    allForms.forEach((element) => {
      element.style.display = "block";
    });
  } else {
    allForms.forEach((element) => {
      let imprtLevel = element.querySelector(".elem-inportant-level");
      if (ImprtLevelFilterNode.value != imprtLevel.innerHTML) {
        element.style.display = "none";
      }
    });
  }
});
//_________________Проблемный код_____________________________________________________________________________________________
function toSendDataToDownload(id, lectRequest = false) {
  const stringFileName = "#elem-file-name-id-" + id;
  const downloadFileName = document.querySelector(stringFileName);
  const xhr = new XMLHttpRequest();

  if (lectRequest) {
    xhr.open(
      "GET",
      "../executers/download-material.php?id=" +
        encodeURIComponent(id) +
        "&ftype=videos"
    );
  } else {
    xhr.open(
      "GET",
      "../html/executers/download-material.php?id=" +
        encodeURIComponent(id) +
        "&ftype=videos"
    );
  }

  xhr.responseType = "blob";
  xhr.onload = function () {
    if (xhr.status === 200) {
      let blob = xhr.response;
      //console.log(blob);
      let url = window.URL.createObjectURL(blob);
      let a = document.createElement("a");
      a.href = url;
      a.download = downloadFileName.innerHTML;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
    }
  };
  xhr.send();
}
//_________________Проблемный код_____________________________________________________________________________________________
function toPreviewVideo(id, lectRequest = false) {
  const fileName = "#elem-file-name-id-" + id;
  const fileNameNode = document.querySelector(fileName);
  const videoDiv = document.createElement("div");
  videoDiv.style.position = "fixed";
  videoDiv.style.width = "100%";
  videoDiv.style.height = "100%";
  videoDiv.style.display = "flex";
  videoDiv.style.justifyContent = "center";
  videoDiv.style.alignItems = "center";
  videoDiv.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  videoDiv.innerHTML = `<button class="forCloseButton" id="forCloseButton-id">X</button><video id="videoPlayer" width="640" height="360" controls>

                        </video>`;
  document.body.appendChild(videoDiv);
  const videoPlayer = document.querySelector("#videoPlayer");
  videoPlayer.src = "../../files/videos/" + fileNameNode.innerHTML;
  let forCloseButtonNode = document.querySelector("#forCloseButton-id");
  forCloseButtonNode.addEventListener("click", function () {
    videoDiv.remove();
  });
  //console.log(videoPlayer.src);
}

function toGetComment(id, lectRequest = false) {
  const xhr = new XMLHttpRequest();
  if (lectRequest) {
    xhr.open(
      "GET",
      "../executers/download-material.php?id=" +
        encodeURIComponent(id) +
        "&ftype=video&commentStatus=getComment"
    );
  } else {
    xhr.open(
      "GET",
      "../html/executers/download-material.php?id=" +
        encodeURIComponent(id) +
        "&ftype=video&commentStatus=getComment"
    );
  }

  xhr.onload = function () {
    if (xhr.status === 200) {
      let blob = xhr.response;
      console.log(xhr.response);
      const divElem = document.createElement("div");
      divElem.classList.add("outer-modal-window-part");
      divElem.innerHTML = `<div class='comment-modal-window'>
      <h2>Комметарий</h2>
      <div class='comment-text'> 
          ${blob}
      </div>                     
       <button class='close-window-btn' onclick='toCkloseModalWindow()'>ОК</button>
       </div>
      
      `;
      const bodyNode = document.body;
      bodyNode.appendChild(divElem);
    }
  };
  xhr.send();
}

function toCkloseModalWindow() {
  const modalWindowNode = document.querySelector(".outer-modal-window-part");
  modalWindowNode.remove();
}

function toGetPreview(id) {
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "../html/executers/download-material.php?id=" +
      encodeURIComponent(id) +
      "&ftype=presetntations&previewStatus=getPreview"
  );
  xhr.responseType = "blob";
  xhr.onload = function () {
    if (xhr.status === 200) {
      let blob = xhr.response;
      console.log(blob);
      let url = window.URL.createObjectURL(blob);
      const divElem = document.createElement("div");
      divElem.classList.add("outer-modal-window-part");
      divElem.innerHTML = `<iframe src='${url}' class='preview-file-block'></iframe>
      `;
      const bodyNode = document.body;
      bodyNode.appendChild(divElem);
    }
  };
  xhr.send();
}
