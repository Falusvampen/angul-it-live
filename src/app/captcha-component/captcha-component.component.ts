import { Component , Output, EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-captcha-component',
  templateUrl: './captcha-component.component.html',
  styleUrls: ['./captcha-component.component.scss']
})


export class CaptchaComponentComponent {

  @Output() success = new EventEmitter<void>();
  token: string | undefined;

  constructor() {
    this.token = undefined;
  }

  public send(form: NgForm): void {

    if (form.invalid) {
      for (const control of Object.keys(form.controls)) {
        form.controls[control].markAsTouched();
      }
      return;
    }
    this.success.emit();
    console.debug(`Token [${this.token}] generated`);
    form.reset();
  }
}
