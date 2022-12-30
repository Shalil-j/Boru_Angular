import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment  } from "../../../../environments/environment";
import { HeaderService } from "../../../header/header.service";


@Injectable({
  providedIn: 'root'
})
export class HomepageService {

  constructor(private http: HttpClient, private headerService: HeaderService) { }

  apiUrl = environment.api_url;
  gmap_url = environment.gmap_url;

  getAddressFromLatLong(lat:any, long:any): Observable<any> {
    return this.http.get<any>(this.gmap_url+'latlng='+lat+','+long+'&key='+environment.map_api_key, {})
      .pipe(
        tap(_ => console.log('get Map Address')),
        catchError(this.handleError<any>('Homepage'))
      );
  }

  bannerDetail(data:any): Observable<any> {
    return this.http.post<any>(this.apiUrl+'gettopbanner', data, {headers:this.headerService.getHeaders()})
      .pipe(
        tap(_ => console.log('Banner Detail')),
        catchError(this.handleError<any>('Home Page'))
      );
  }

  bottomBannerDetail(data:any): Observable<any> {
    return this.http.post<any>(this.apiUrl+'getbottomebanner', data, {headers:this.headerService.getHeaders()})
      .pipe(
        tap(_ => console.log('Banner Detail')),
        catchError(this.handleError<any>('Home Page'))
      );
  }

  getSubscribeShop(data:any): Observable<any> {
    return this.http.post<any>(this.apiUrl+'getsubscriber', data, {headers:this.headerService.getHeaders()})
      .pipe(
        tap(_ => console.log('Get Subscriber Shop')),
        catchError(this.handleError<any>('Home Page'))
      );
  }

  getFavShop(data:any): Observable<any> {
    return this.http.post<any>(this.apiUrl+'favouritestore', data, {headers:this.headerService.getHeaders()})
      .pipe(
        tap(_ => console.log('Get Fav Shop')),
        catchError(this.handleError<any>('Home Page'))
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
