import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  currentLanguage;
  testBrowser: boolean;
  // locales = ['en', 'ar'];
  constructor(
    public translate: TranslateService,
    @Inject(PLATFORM_ID) platformId: string
  ) {
    this.testBrowser = isPlatformBrowser(platformId);
    if (this.testBrowser) {
      this.currentLanguage = localStorage.getItem('currentLanguage') || 'en';
      this.translate.use(this.currentLanguage);
    }
  }

  changeCurrentLanguage(lang: string): any {
    if (this.testBrowser) {
      this.translate.use(lang);
      localStorage.setItem('currentLanguage', lang);
    }
  }
}
