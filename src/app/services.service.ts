import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';








@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:3000'
  genericPost(endPoint: String, payload: any) {
    return this.http.post(this.baseUrl + endPoint, payload)
  }
}
