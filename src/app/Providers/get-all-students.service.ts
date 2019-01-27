import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GetAllStudentsService {
  url;
  constructor(public http: HttpClient) {
    this.url = 'http://127.0.0.1:8000/api/students/all';
    console.log('Hello WeatherProvider Provider');
  }

  getAllStudents() {
  //  return 'Hi';
   return this.http.get(this.url);
  }
}
