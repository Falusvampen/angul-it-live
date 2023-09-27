import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent implements OnInit{

  currentStage = 1; // Initialize to stage 1

  constructor() { }

  ngOnInit(): void {
  }

  onCaptchaSuccess(): void {
    this.currentStage++; // Increment to the next stage
  }

}
