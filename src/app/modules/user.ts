import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , FormGroup }  from '@angular/forms';





/************** Components import **************/ 

import {
    UserCreate
} from '../user/create/create.component';


/***************** Services *********************/


@NgModule({
  imports: [
    CommonModule , 
    FormsModule 
  ],
  declarations: [ UserCreate],
  providers : []
})
export class UsersModule { }
