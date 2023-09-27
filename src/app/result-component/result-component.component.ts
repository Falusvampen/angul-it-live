import { Component } from '@angular/core';
import { HomeComponentComponent } from '../home-component/home-component.component';

@Component({
  selector: 'app-result-component',
  templateUrl: './result-component.component.html',
  styleUrls: ['./result-component.component.scss']
})
export class ResultComponentComponent {

  constructor(private homeComponent: HomeComponentComponent) { }

  restartChallenge(): void {
    this.homeComponent.currentStage = 1;
    sessionStorage.setItem('currentStage', '1');
  }

}
