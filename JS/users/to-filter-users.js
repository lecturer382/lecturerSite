const searchQueryInputNode = document.querySelector("#search-query-input");

searchQueryInputNode.addEventListener("keydown", function (event) {
  if (event.key === "Enter" || event.keyCode === 13) {
    const allStudents = document.querySelectorAll(".data-form");
    event.preventDefault();

    allStudents.forEach((element) => {
      element.style.display = "flex";
    });

    allStudents.forEach((element) => {
      let userNameNode = element.querySelector(".elem-id");
      if (
        userNameNode.innerHTML
          .toLowerCase()
          .includes(searchQueryInputNode.value.toLowerCase())
      ) {
        element.style.display = "flex";
      } else {
        element.style.display = "none";
      }
    });
  }
});

const subjcetFilterNode = document.querySelector("#subjcet-filter");
subjcetFilterNode.addEventListener("change", function () {
  const allStudents = document.querySelectorAll(".data-form");

  //console.log(allForms);
  allStudents.forEach((element) => {
    element.style.display = "flex";
  });

  if (subjcetFilterNode.value == "Все") {
    allStudents.forEach((element) => {
      element.style.display = "flex";
    });
  } else {
    allStudents.forEach((element) => {
      if (subjcetFilterNode.value != element.getAttribute("data-subject")) {
        element.style.display = "none";
      }
    });
  }
});
