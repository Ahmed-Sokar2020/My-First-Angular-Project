import { HomeComponent } from '@app/pages/home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { FooterComponent } from '@app/shared/components/footer/footer.component';
import { HeaderComponent } from '@app/shared/components/header/header.component';
import { LoginComponent } from '@app/pages/login/login.component';
import { AboutUsComponent } from '@app/pages/about-us/about-us.component';
import { ServicesComponent } from '@app/pages/services/services.component';
import { MembershipComponent } from '@app/pages/membership/membership.component';
import { ContactUsComponent } from '@app/pages/contact-us/contact-us.component';
import { ProfileComponent } from '@app/pages/profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpInterceptorsProviders } from '@app/core/interceptors';
import { ProfileDetailsComponent } from '@app/pages/profile-details/profile-details.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { CustomTranslateLoader } from '@app/shared/loaders/custom-translate-loader';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    AboutUsComponent,
    ServicesComponent,
    MembershipComponent,
    ContactUsComponent,
    ProfileComponent,
    ProfileDetailsComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useClass: CustomTranslateLoader,
      },
    }),
  ],
  providers: [HttpInterceptorsProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
