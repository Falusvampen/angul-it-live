import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathQuestionComponent } from './math-question.component';

describe('MathQuestionComponent', () => {
  let component: MathQuestionComponent;
  let fixture: ComponentFixture<MathQuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MathQuestionComponent]
    });
    fixture = TestBed.createComponent(MathQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
