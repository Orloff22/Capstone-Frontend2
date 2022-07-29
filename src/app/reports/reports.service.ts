import { Injectable } from '@angular/core';
import {IReports} from "./reports";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
const baseUrl = 'http://localhost:8180/api/v1/reports';

@Injectable({
    providedIn: 'root'
  })
  

export class ReportsService{
    constructor(private http: HttpClient) { }
    getAll(): Observable<IReports[]> {
      return this.http.get<IReports[]>(baseUrl);
  
    }
}

