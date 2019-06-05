import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeeditComponent } from './employeeedit/employeeedit.component';
import { EmployeeviewComponent } from './employeeview/employeeview.component';
import { DashboardheaderComponent } from './dashboardheader/dashboardheader.component';
import{RouterModule,Routes} from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import { EmployeeaddComponent } from './employeeadd/employeeadd.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeeComponent } from './employee/employee.component';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

const routing:Routes=[
  {path:'',component: DashboardheaderComponent,
children:[
  {path:'',component:EmployeeComponent},
  {path:'add',component:  EmployeeaddComponent},
  {path:'edit',component: EmployeeeditComponent },
  {path:'view',component: EmployeeviewComponent},
  {path:'list',component:  EmployeelistComponent}
]
  }
]
@NgModule({
  declarations: [ EmployeeeditComponent, EmployeeviewComponent, DashboardheaderComponent, EmployeeaddComponent, EmployeelistComponent, EmployeeComponent],
  imports: [
    CommonModule,MatSidenavModule,MatCardModule,MatTableModule,MatFormFieldModule,FormsModule,ReactiveFormsModule,
    RouterModule.forChild(routing)
  ]
})
export class DashboardModule { }
