import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor() { }


  getHeaders(){
    return new HttpHeaders({
      'user-client':'WEB',
      'platform':'WEB',
      'api-version':'2',
      'app-version': '2',
      'Content-Type':'application/json'
       })
  }


  getAuthHeaders(){
    return new HttpHeaders({
      'user-client':'WEB',
      'platform':'WEB',
      'api-version':'2',
      'app-version': '2',
      'Content-Type':'application/json',
      'Authorization': 'bearer '+localStorage.getItem('customerToken')
       })
  }



}
