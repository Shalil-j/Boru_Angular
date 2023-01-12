import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment  } from "../../../../environments/environment";
import { HeaderService } from "../../../header/header.service";

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http: HttpClient, private headerService: HeaderService) { }

  apiUrl = environment.api_url;


  getStoreDetail(data:any): Observable<any> {
    return this.http.post<any>(this.apiUrl+'getvendorprofile', data, {headers:this.headerService.getHeaders()})
      .pipe(
        tap(_ => console.log('Get Store')),
        catchError(this.handleError<any>('Store Page'))
      );
  }


  getProductDetailByStore(data:any): Observable<any> {
    return this.http.post<any>(this.apiUrl+'getproductscustomer', data, {headers:this.headerService.getHeaders()})
      .pipe(
        tap(_ => console.log('Get products by store')),
        catchError(this.handleError<any>('Store Page'))
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
