import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RecaptchaModule } from 'ng-recaptcha';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CaptchaComponentComponent } from './captcha-component/captcha-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ResultComponentComponent } from './result-component/result-component.component';
import { AppRoutingModule } from './app-routing.module';
import { RECAPTCHA_SETTINGS, RecaptchaFormsModule, RecaptchaSettings } from 'ng-recaptcha';
import { environment } from '../environments/environment';
import { MathQuestionComponent } from './math-question/math-question.component';
import { RandomQuestionComponent } from './random-question/random-question.component';

@NgModule({
  declarations: [
    AppComponent,
    CaptchaComponentComponent,
    HomeComponentComponent,
    ResultComponentComponent,
    MathQuestionComponent,
    RandomQuestionComponent
  ],
  imports: [
    BrowserModule,
    RecaptchaModule,
    FormsModule,
    AppRoutingModule,
    RecaptchaFormsModule,

  ],
  providers: [{
    provide: RECAPTCHA_SETTINGS,
    useValue: {
      siteKey: environment.recaptcha.siteKey,
    } as RecaptchaSettings,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
