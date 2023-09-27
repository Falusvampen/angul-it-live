import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent implements OnInit {

  currentStage = 1; 

  constructor() { }

  ngOnInit(): void {
    
    const savedStage = sessionStorage.getItem('currentStage');

    
    if (savedStage !== null) {
      this.currentStage = Number(savedStage);  
    }
  }

  onCaptchaSuccess(): void {

    this.currentStage++;

    
    sessionStorage.setItem('currentStage', this.currentStage.toString());

    
    console.log('Current stage stored:', this.currentStage);
  }

}
