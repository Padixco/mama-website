// Quiz Functionality
function checkAnswer(quizId, correctOptionId, resultId) {
    const result = document.getElementById(resultId);
    const correctOption = document.getElementById(correctOptionId);
    if (correctOption.checked) {
        result.textContent = "Correct! Great job!";
        result.style.color = "green";
    } else {
        result.textContent = "Incorrect! Try again.";
        result.style.color = "red";
    }
}
