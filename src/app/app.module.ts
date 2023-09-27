import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { CaptchaComponentComponent } from './captcha-component/captcha-component.component';
import { ResultComponentComponent } from './result-component/result-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    CaptchaComponentComponent,
    ResultComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
