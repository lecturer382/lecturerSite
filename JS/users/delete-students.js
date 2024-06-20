function toDeleteStudent(event, id) {
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "../executers/delete-students.php?studentId=" +
      encodeURIComponent(id) +
      "&deleteStudent=delete"
  );

  xhr.onload = function () {
    const nearestParent = event.target.closest(".students-data-holder");
    nearestParent.remove();
  };

  xhr.send();
}
