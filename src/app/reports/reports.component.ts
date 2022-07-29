import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  reports: any[] =[
  {
    "reportName":500,
    "as400Id":"yes",
    "status": "a",
    "skipPages": 1,
    "creationDate": "3/3/99"
  }
];
}
