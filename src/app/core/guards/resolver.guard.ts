import { catchError } from 'rxjs/operators';
import { EMPTY, Observable, of } from 'rxjs';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { ApiService } from '@app/core/http/api.service';

@Injectable({ providedIn: 'root' })
export class ResolverGuard implements Resolve<any> {
  constructor(private myService: ApiService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const pageId = route.paramMap.get('id');
    return pageId ? this.myService.doGetToProfile(pageId).pipe(
          catchError((res) => {
            return of(res, 'No Data');
          })
        )
      : EMPTY;
  }
}
