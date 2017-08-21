import { 
    NgModule
} from '@angular/core';  
import { 
    Routes , 
    RouterModule  
} from '@angular/router';  

import {
    userRoutes
} from './routes/user';


// sign in component 
// import {SigninComponent} from './signin/signin.component';

const appRoutes : Routes = [
 ...userRoutes,
  {path: '',   redirectTo: '/', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

 