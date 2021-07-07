import { ApiService } from '@app/core/http/api.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  // constructor(private myService: ApiService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // console.log({ request });
    // console.log('In Error Handler Interceptor:');
    // const myUrl = environment.apiUrl;
    // request = request.clone({ url: myUrl + '/' + request.url });
    // this.myService.doPostToContact(request);
    // this.myService.doGetToProfile(request);
    return next.handle(request).pipe(
      catchError((err) => {
        console.log('In Error Handler Interceptor, Error Is:', err);
        return of(err);
      })
    );
  }
}
