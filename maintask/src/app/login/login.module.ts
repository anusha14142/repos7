import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import{RouterModule,Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';


const routing:Routes=[
  {path:'',component:AdminloginComponent}
]
@NgModule({
  declarations: [AdminloginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,FormsModule,MatInputModule,MatCardModule,
    RouterModule.forChild(routing)
  ]
})
export class LoginModule { }
