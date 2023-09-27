import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-random-question',
  templateUrl: './random-question.component.html',
  styleUrls: ['./random-question.component.scss']
})
export class RandomQuestionComponent implements OnInit {

  @Output() questionPassed = new EventEmitter<void>();

  questions = [
    { question: 'Who wrote "To Be or Not To Be?"', choices: ['Shakespeare', 'Tolstoy', 'Orwell'], correct: 'Shakespeare' },
    { question: 'Which planet is known as the Red Planet?', choices: ['Mars', 'Jupiter', 'Saturn'], correct: 'Mars' },
    { question: 'Who formulated the theory of General Relativity?', choices: ['Isaac Newton', 'Albert Einstein', 'Niels Bohr'], correct: 'Albert Einstein' },
    { question: 'In literature, who sought the Holy Grail?', choices: ['Odysseus', 'King Arthur', 'Robin Hood'], correct: 'King Arthur' },
    { question: 'What is the powerhouse of the cell?', choices: ['Ribosome', 'Mitochondria', 'Nucleus'], correct: 'Mitochondria' },
    { question: 'What is the atomic number of carbon?', choices: ['4', '6', '12'], correct: '6' },
    { question: 'In which year was the Magna Carta signed?', choices: ['1066', '1215', '1492'], correct: '1215' },
    { question: 'Who painted "Starry Night"?', choices: ['Leonardo da Vinci', 'Vincent van Gogh', 'Pablo Picasso'], correct: 'Vincent van Gogh' },
    { question: 'Who composed the "Moonlight Sonata"?', choices: ['Mozart', 'Beethoven', 'Bach'], correct: 'Beethoven' },
    { question: 'Which philosopher is known for the dictum "Cogito, ergo sum"?', choices: ['Descartes', 'Kant', 'Aristotle'], correct: 'Descartes' },
    { question: 'What is the main active ingredient in alcoholic beverages?', choices: ['Methanol', 'Ethanol', 'Isopropanol'], correct: 'Ethanol' },
    { question: 'Which king was married to Eleanor of Aquitaine?', choices: ['Henry I', 'Henry VIII', 'Henry II'], correct: 'Henry II' },
    { question: 'What did Friedrich Nietzsche declare about God?', choices: ['God is omniscient', 'God is dead', 'God is omnipotent'], correct: 'God is dead' },
    { question: 'What is Heisenberg\'s Uncertainty Principle primarily concerned with?', choices: ['Momentum and Position', 'Time and Space', 'Mass and Energy'], correct: 'Momentum and Position' },
    { question: 'Who penned "One Hundred Years of Solitude"?', choices: ['Gabriel García Márquez', 'Fyodor Dostoevsky', 'James Joyce'], correct: 'Gabriel García Márquez' },
    { question: 'What is the term for the branch of philosophy that deals with issues of beauty and artistic taste?', choices: ['Aesthetics', 'Ethics', 'Metaphysics'], correct: 'Aesthetics' },
    { question: 'What is the chief concept postulated in John Rawls\' "A Theory of Justice"?', choices: ['Veil of Ignorance', 'Social Contract', 'Utilitarianism'], correct: 'Veil of Ignorance' },
    { question: 'Which literary work is divided into "Inferno," "Purgatorio," and "Paradiso"?', choices: ['The Odyssey', 'The Divine Comedy', 'War and Peace'], correct: 'The Divine Comedy' },
    { question: 'What is the Gödel incompleteness theorem primarily about?', choices: ['Program Termination', 'Mathematical Proofs', 'Quantum Mechanics'], correct: 'Mathematical Proofs' },
    { question: 'Who is considered the father of modern linguistics?', choices: ['Noam Chomsky', 'Edward Sapir', 'Ferdinand de Saussure'], correct: 'Noam Chomsky' },
    { question: 'Which neurotransmitter is predominantly affected by SSRIs?', choices: ['Serotonin', 'Dopamine', 'Norepinephrine'], correct: 'Serotonin' },
    { question: 'Who first coined the term "Simulacra"?', choices: ['Jean Baudrillard', 'René Descartes', 'Simone de Beauvoir'], correct: 'Jean Baudrillard' },
    { question: 'What does the term "Pareto Efficiency" refer to?', choices: ['Game Theory', 'Optimal Resource Allocation', 'Economic Inequality'], correct: 'Optimal Resource Allocation' },
    { question: 'Who is credited with the discovery of oxygen?', choices: ['Henry Cavendish', 'Carl Wilhelm Scheele', 'Joseph Priestley'], correct: 'Joseph Priestley' },
    { question: 'What was the first programming language to implement Object-Oriented Programming?', choices: ['C++', 'Smalltalk', 'Java'], correct: 'Smalltalk' },
    { question: 'Which literary character uttered the phrase, "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife"?', choices: ['Elizabeth Bennet', 'Jane Eyre', 'Hester Prynne'], correct: 'Elizabeth Bennet' },
    { question: 'What is the primary aim of Hegelian Dialectics?', choices: ['Conflict Resolution', 'Synthesis of Ideas', 'Moral Absolutism'], correct: 'Synthesis of Ideas' },
    { question: 'Which Greek philosopher was sentenced to death by drinking a cup of poison hemlock?', choices: ['Socrates', 'Plato', 'Aristotle'], correct: 'Socrates' },
  ];

  currentQuestion: any;
  lastQuestionIndex: number | null = null;

  ngOnInit(): void {
    this.selectRandomQuestion();
  }

  selectRandomQuestion(): void {
    let index;
    do {
      index = Math.floor(Math.random() * this.questions.length);
    } while (index === this.lastQuestionIndex);

    this.lastQuestionIndex = index;
    this.currentQuestion = this.questions[index];
  }

  onAnswerSelected(answer: string): void {
    if (answer === this.currentQuestion.correct) {
      this.questionPassed.emit();
    } else {
      this.selectRandomQuestion();
    }
  }
}
