import { catchError } from 'rxjs/operators';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse)=>{
        let errorMessage = '';

        if(error.error instanceof ErrorEvent) {
          console.log('Client side error');
          errorMessage = `Error" ${error.error.message}`;
        } else {
          console.log('This is server side error;')
        }
        return throwError(errorMessage);
      })
      );
  }
}
