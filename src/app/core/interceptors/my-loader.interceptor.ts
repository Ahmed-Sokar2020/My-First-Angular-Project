import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { MyLoaderService } from '../http/my-loader.service';
import { finalize } from 'rxjs/operators';

@Injectable()
export class MyLoaderInterceptor implements HttpInterceptor {
  private totalRequests = 0;

  constructor(private loaderService: MyLoaderService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.totalRequests++;
    setTimeout(() => {
      this.loaderService.isLoading.next(true);
    }, 300);

    return next.handle(request).pipe(
      finalize(() => {
        this.totalRequests--;
        if (this.totalRequests === 0) {
          setTimeout(() => {
            this.loaderService.isLoading.next(false);
          }, 1000);
        }
      })
    );
  }
}
