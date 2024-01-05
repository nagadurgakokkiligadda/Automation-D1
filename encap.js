class Quiz {
    constructor() {
      // Private variables to store quiz questions and answers
      this._questions = [];
      this._answers = [];
    }
  
    // Method to add a question and its correct answer to the quiz
    addQuestion(question, correctAnswer) {
      this._questions.push(question);
      this._answers.push(correctAnswer);
    }
  
    // Method to take a quiz and submit answers
    takeQuiz(userAnswers) {
      if (userAnswers.length !== this._questions.length) {
        return "Invalid quiz submission. Please answer all questions.";
      }
  
      let score = 0;
      for (let i = 0; i < this._questions.length; i++) {
        if (userAnswers[i] === this._answers[i]) {
          score++;
        }
      }
  
      return `Your quiz score is ${score} out of ${this._questions.length}.`;
    }
  }
  
  // Example usage:
  
  // Creating an instance of the Quiz class
  const quiz = new Quiz();
  
  // Adding questions to the quiz
  quiz.addQuestion("What is the capital of France?", "Paris");
  quiz.addQuestion("Which planet is known as the Red Planet?", "Mars");
  quiz.addQuestion("What is the powerhouse of the cell?", "Mitochondria");
  
  // Taking the quiz
  const userAnswers = ["Paris", "Mars", "Mitochondria"];
  const quizResult = quiz.takeQuiz(userAnswers);
  
  // Displaying the result
  console.log(quizResult);
  