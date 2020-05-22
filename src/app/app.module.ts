import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UserComponent } from './user/user.component';
import { MatSliderModule } from '@angular/material/slider';
@NgModule({
  imports:      [ BrowserModule, FormsModule,MatSliderModule ],
  declarations: [ AppComponent, HelloComponent, UserComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
