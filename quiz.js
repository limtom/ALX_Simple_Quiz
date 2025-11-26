document.addEventListener("DOMContentLoaded", function () {
  //Get the feedback
  const feedback = document.getElementById("feedback");

  function checkAnswer() {
    const correctAnswer = "4";

    //Get the checked radio-button
    const checkedRadio = document.querySelector('[name="quiz"]:checked');
    let userAnswer = checkedRadio.value;

    if (userAnswer === correctAnswer) {
      feedback.textContent = "Correct! Well done.";
    } else {
      feedback.textContent = "That's incorrect. Try again!";
    }
  }

  //Get the submitButton
  const submitButton = document.getElementById("submit-answer");
  submitButton.addEventListener("click", checkAnswer);
});
