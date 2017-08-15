import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SuccessComponentComponent } from './success-component/success-component.component';
import { WarnComponent } from './warnComponent/warn.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessComponentComponent,
    WarnComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
