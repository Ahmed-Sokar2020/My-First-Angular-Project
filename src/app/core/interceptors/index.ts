import { APIInterceptor } from './api.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandlerInterceptor } from '@app/core/interceptors/error-handler.interceptor';
import { MyLoaderInterceptor } from '@app/core/interceptors/my-loader.interceptor';

export const HttpInterceptorsProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: APIInterceptor,
    multi: true,
  },

  {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorHandlerInterceptor,
    multi: true,
  },

  {
    provide: HTTP_INTERCEPTORS,
    useClass: MyLoaderInterceptor,
    multi: true,
  },
];
