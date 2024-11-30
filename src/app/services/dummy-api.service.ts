import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DummyApiService {

  constructor(private http:HttpClient) { }
  
  getDummyData(num:number): Observable<any>{
    const url=`https://jsonplaceholder.typicode.com/posts/${num}`
    return this.http.get(url).pipe(
      catchError(this.handleError)
    )
  }
  private handleError(error:HttpErrorResponse):Observable<any>{
    alert('DATA NOT FOUND!!');
    return throwError(error.message)
  }

} 
