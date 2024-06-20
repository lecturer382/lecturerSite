const addQuizElenNode = document.querySelector("#add-quiz-elen");
const testMakerInnerNode = document.querySelector(".test-maker-inner");

let elemCounter = 2;

addQuizElenNode.addEventListener("click", function () {
  const quizElemDiv = document.createElement("div");
  quizElemDiv.classList.add("quiz-elem");
  quizElemDiv.id = "question-" + elemCounter;
  quizElemDiv.innerHTML = `
  <div class="add-quiz-elen" id="add-answer-elen">
    <img src="../images/interract-files-icons/bx-x.svg" alt="" />
  </div>
  <div class="question-holder">
    <input
      type="text"
      placeholder="ВВедите вопрос..."
      class="question-elem question"
    />
    <span class="question-id">Вопрос №.${elemCounter}</span>
  </div>
  <hr />
  <div class="answer-holder">
    <span class="answer-id">1.</span>
    <input
      type="text"
      placeholder="ВВедите ответ..."
      class="question-elem"
    />
    <input type="checkbox" />
  </div>
`;
  testMakerInnerNode.appendChild(quizElemDiv);
  +elemCounter++;
});
