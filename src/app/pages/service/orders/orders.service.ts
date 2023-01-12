import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment  } from "../../../../environments/environment";
import { HeaderService } from "../../../header/header.service";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient, private headerService: HeaderService) { }

  apiUrl = environment.api_url;
  

  getAllOrders(data:any): Observable<any> {
    return this.http.post<any>(this.apiUrl+'getallorders', data, {headers:this.headerService.getHeaders()})
      .pipe(
        tap(_ => console.log('Get Orders')),
        catchError(this.handleError<any>('Order Page'))
      );
  }

  getAllSubscribeOrders(data:any): Observable<any> {
    return this.http.post<any>(this.apiUrl+'getsubscribeorders', data, {headers:this.headerService.getHeaders()})
      .pipe(
        tap(_ => console.log('Get Subscribe Orders')),
        catchError(this.handleError<any>('Order Page'))
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
