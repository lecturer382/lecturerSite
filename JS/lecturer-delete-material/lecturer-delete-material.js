function todeleteData(event, id, materialToDelete = "none") {
  if (materialToDelete == "books") {
    const xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      "../../html/executers/delete-material.php?id=" +
        encodeURIComponent(id) +
        "&deltype=books"
    );
    const eventTargetElem = event.target;
    const parentElem = eventTargetElem.closest(".data-form");
    xhr.onload = function () {
      if (xhr.status == 200) {
        parentElem.remove();
        const allForms = document.querySelectorAll(".data-form");
        let i = 1;
        allForms.forEach((elem) => {
          const elemIdNode = elem.querySelector(".elem-id");
          elemIdNode.innerHTML = `${i++}`;
        });
      }
    };
    xhr.send();
  } else if (materialToDelete == "presentations") {
    const xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      "../../html/executers/delete-material.php?id=" +
        encodeURIComponent(id) +
        "&deltype=presentations"
    );
    const eventTargetElem = event.target;
    const parentElem = eventTargetElem.closest(".data-form");
    xhr.onload = function () {
      if (xhr.status == 200) {
        console.log(xhr.response);
        parentElem.remove();
        const allForms = document.querySelectorAll(".data-form");
        let i = 1;
        allForms.forEach((elem) => {
          const elemIdNode = elem.querySelector(".elem-id");
          elemIdNode.innerHTML = `${i++}`;
        });
      }
    };
    xhr.send();
  } else if (materialToDelete == "video") {
    const xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      "../../html/executers/delete-material.php?id=" +
        encodeURIComponent(id) +
        "&deltype=video"
    );
    const eventTargetElem = event.target;
    const parentElem = eventTargetElem.closest(".data-form");
    xhr.onload = function () {
      if (xhr.status == 200) {
        console.log(xhr.response);
        parentElem.remove();
        const allForms = document.querySelectorAll(".data-form");
        let i = 1;
        allForms.forEach((elem) => {
          const elemIdNode = elem.querySelector(".elem-id");
          elemIdNode.innerHTML = `${i++}`;
        });
      }
    };
    xhr.send();
  } else if (materialToDelete == "link") {
    const xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      "../../html/executers/delete-material.php?id=" +
        encodeURIComponent(id) +
        "&deltype=link"
    );
    const eventTargetElem = event.target;
    const parentElem = eventTargetElem.closest(".data-form");
    xhr.onload = function () {
      if (xhr.status == 200) {
        parentElem.remove();
        const allForms = document.querySelectorAll(".data-form");
        let i = 1;
        allForms.forEach((elem) => {
          const elemIdNode = elem.querySelector(".elem-id");
          elemIdNode.innerHTML = `${i++}`;
        });
      }
    };
    xhr.send();
  }
}
