import { en } from '@assets/i18n/en';
import { ar } from '@assets/i18n/ar';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs';

export class CustomTranslateLoader implements TranslateLoader {
  public getTranslation(lang: string): Observable<any> {
    return new Observable((observer: any) => {
      if (lang === 'ar') {
        observer.next(ar);
      } else {
        observer.next(en);
      }
      observer.complete();
    });
  }
}
