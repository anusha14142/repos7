import { Component, OnInit } from '@angular/core';
import {  FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-employeeadd',
  templateUrl: './employeeadd.component.html',
  styleUrls: ['./employeeadd.component.css']
})
export class EmployeeaddComponent implements OnInit {

  constructor(public fb:FormBuilder) { }
public logindata;
  ngOnInit() {
    this.logindata=this.fb.group({
      name:['timsy'],
      email:['']
    });
  }

}
