import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-math-question',
  templateUrl: './math-question.component.html',
  styleUrls: ['./math-question.component.scss']
})
export class MathQuestionComponent implements OnInit {
  @Output() questionPassed = new EventEmitter<void>();

  firstNumber!: number;
  secondNumber!: number;
  operator!: string;
  correctAnswer!: number;
  choices!: number[];
  userAnswer!: number;

  ngOnInit(): void {
    this.generateQuestion();
  }

  generateQuestion(): void {
    // Generate random operands and operator
    this.firstNumber = Math.floor(Math.random() * 100);
    this.secondNumber = Math.floor(Math.random() * 100);
    const operators = ['+', '-', '*'];
    this.operator = operators[Math.floor(Math.random() * operators.length)];

    // Calculate the correct answer based on the operator
    switch (this.operator) {
      case '+':
        this.correctAnswer = this.firstNumber + this.secondNumber;
        break;
      case '-':
        this.correctAnswer = this.firstNumber - this.secondNumber;
        break;
      case '*':
        this.correctAnswer = this.firstNumber * this.secondNumber;
        break;
    }

    // Generate incorrect choices
    this.choices = [
      this.correctAnswer,
      this.correctAnswer + Math.floor(Math.random() * 10) + 1,
      this.correctAnswer - Math.floor(Math.random() * 10) + 1,
      this.correctAnswer + Math.floor(Math.random() * 20) - 10
    ];

    // Shuffle the choices
    this.choices = this.choices.sort(() => Math.random() - 0.5);
  }

   checkAnswer(selectedAnswer: number): void {
    this.userAnswer = selectedAnswer;
    if (this.userAnswer === this.correctAnswer) {
      this.questionPassed.emit();
    } else {
      alert('Incorrect! 😢');
    }
    this.generateQuestion();
  }
}
