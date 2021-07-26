import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  doPostToContact(url: any): any {
    // to do => change the name and refine url
    return this.http.post(url, { params: { page: '2021' } });
  }

  doGetToProfile(url: any): any {
    // to do => change the name and refuine url
    return this.http.get(url);
  }
}
