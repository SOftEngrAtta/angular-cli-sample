import {
    UserCreate
} from '../user/create/create.component';


import { Routes } from '@angular/router'; 

export const userRoutes : Routes = [

    {
        path: 'user',
        children:[
             {path : 'create' , component : UserCreate},
             {path: '',   redirectTo: 'UserCreate', pathMatch: 'full' }
        ]
    },
]