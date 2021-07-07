import { ApiService } from '@app/core/http/api.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

@Injectable()
export class APIInterceptor implements HttpInterceptor {
  // constructor(private myService: ApiService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log('In Error Handler Interceptor:');
    let myUrl;
    console.log('here');
    if (!request.url.includes('.json')) {
      myUrl = request.clone({
        url: `${environment.apiUrl}/${request.url}`,
      });
    }

    return next.handle(myUrl ?? request);
  }
}
