import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule,Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import{FormsModule} from '@angular/forms';
import {MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';


const routing:Routes=[
  {path:'',loadChildren:'./login/login.module#LoginModule'},
  {path:'dashboard',loadChildren:'./dashboard/dashboard.module#DashboardModule'}

]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,MatInputModule ,MatCardModule,
    RouterModule.forRoot(routing)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
