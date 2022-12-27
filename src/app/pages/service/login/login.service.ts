import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment  } from "../../../../environments/environment";
import { HeaderService } from "../../../header/header.service";


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private headerService: HeaderService) { }

  apiUrl = environment.api_url;


  getSendOTP(data:any): Observable<any> {
    return this.http.post<any>(this.apiUrl+'getotp', data, {headers:this.headerService.getHeaders()})
      .pipe(
        tap(_ => console.log('OTP Send')),
        catchError(this.handleError<any>('get OTP'))
      );
  }

  verifyOTP(data:any): Observable<any> {
    return this.http.post<any>(this.apiUrl+'setotp_android', data, {headers:this.headerService.getHeaders()})
      .pipe(
        tap(_ => console.log('Verify OTP')),
        catchError(this.handleError<any>('Login'))
      );
  }

  setPersonalDetail(data:any): Observable<any> {
    return this.http.post<any>(this.apiUrl+'registration_android', data, {headers:this.headerService.getHeaders()})
      .pipe(
        tap(_ => console.log('Add Personal Info')),
        catchError(this.handleError<any>('Login'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }


}
