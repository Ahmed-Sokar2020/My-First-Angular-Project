import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HandleErrorsService {

  constructor() { }

  logError(err: HttpErrorResponse): any {
    if (err.error instanceof ErrorEvent) {
    console.log(`Client Side Error: ${err}`);
    } else{
      console.log('Server Side Error', err);
    }
    return throwError('There Is Something Wrong');
  }


}
