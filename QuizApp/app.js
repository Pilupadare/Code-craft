const form = document.querySelector(".quiz-form");
const questions = document.querySelectorAll(".question");
const result = document.querySelector(".result");
const correctAnswers = ['D', 'B', 'C', 'B', 'D'];

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let score = 0;

  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
    form.q5.value
  ];

  userAnswers.forEach((answer, index) => {
    const question = questions[index];
    const correct = correctAnswers[index];

    // Clear previous highlights
    question.classList.remove('correct-answer', 'wrong-answer');

    if (answer === correct) {
      score++;
      question.classList.add('correct-answer');
    } else {
      question.classList.add('wrong-answer');
    }
  });

  result.classList.remove('hide');
  result.querySelector('p').textContent = `You scored ${score} out of ${correctAnswers.length}!`;
});
