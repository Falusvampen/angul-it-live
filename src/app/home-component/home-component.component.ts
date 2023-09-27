import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent implements OnInit {
  completedStages: number[] = [1];
  currentStage = 1; 

  constructor() { }

  ngOnInit(): void {
    const savedStage = sessionStorage.getItem('currentStage');
    if (savedStage !== null) {
      this.currentStage = Number(savedStage);
    }
  }

  onCaptchaSuccess(): void {
    this.advanceStage();
  }

  onMathQuestionPassed(): void {
    this.advanceStage();
  }

  onRandomQuestionPassed(): void {
    this.advanceStage();
  }

  advanceStage(): void {
    this.currentStage++;
    // Check if the stage is already completed
    if (!this.completedStages.includes(this.currentStage)) {
      this.completedStages.push(this.currentStage);
    }
    sessionStorage.setItem('currentStage', this.currentStage.toString());
    console.log(`Current stage stored: ${this.currentStage}`);
  }

  navigateToStage(stage: number): void {
    this.currentStage = stage;
    sessionStorage.setItem('currentStage', stage.toString());
  }
}
