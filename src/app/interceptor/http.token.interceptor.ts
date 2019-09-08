import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Injectable} from '@angular/core';
import {JwtService} from '../service';
import {catchError, retry} from 'rxjs/operators';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  constructor(private jwtService: JwtService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('#######################........intercept..........');
    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
    const token = this.jwtService.getToken();
    console.log('############# token :' + token);
    if (token) {
      headersConfig['Authorization'] = `Token ${token}`;
      // headersConfig['Authorization'] = `${token}`;
      console.log('###header :' + headersConfig['Authorization']);
    }
    const request = req.clone({ setHeaders: headersConfig });
    return next.handle(request)
      .pipe(
        retry(1),
        catchError((error: HttpErrorResponse) => {
          console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
          let errorMessage = '';
          if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `Error: ${error.error.message}`;
          } else {
            // server-side error
            switch (error.status) {
              case 401:
                console.log('401');
            }
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
          }

          console.log(errorMessage);
          return throwError(errorMessage);
        })
      );
  }
}
