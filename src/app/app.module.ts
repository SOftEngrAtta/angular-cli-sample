import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

/***** Custome Module *****/ 
import {
  UsersModule
} from './modules/user';

/**** Routes ****/
import { 
  AppRoutingModule 
} from './app.route.config'; 


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule ,
    AppRoutingModule ,
    UsersModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
