import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  Email: string;
  phone: number;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'anusha',Email:'anusha@gmail.com', phone: 9956456,},
  {position: 2, name: 'renuka',Email: 'renuka@gmail.com', phone: 78954789},
  {position: 3, name: 'Archana',Email : 'archana@gmail.com', phone: 90987567},
  {position: 4, name: 'Phara', Email: 'phara@gmail.com', phone: 990077090},
  {position: 5, name: 'Bhargavi', Email: 'bhargavi@gmail.com', phone: 78907654},
  {position: 6, name: 'Chaithanya', Email: 'chaithanya@gmail.com', phone: 99089090},
  {position: 7, name: 'Nithin', Email: 'nithin@gmail.com', phone: 890897622},
  {position: 8, name: 'Omkar', Email: 'omakar@gmail.com',  phone:89078654}
];
@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'Email', 'phone'];
  dataSource = ELEMENT_DATA;
  constructor() { }
  ngOnInit() {
  }
}
