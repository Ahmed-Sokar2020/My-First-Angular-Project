import { ResolverGuard } from '@app/core/guards/resolver.guard';
import { ProfileDetailsComponent } from '@app/pages/profile-details/profile-details.component';
import { ProfileComponent } from '@app/pages/profile/profile.component';
import { ContactUsComponent } from '@app/pages/contact-us/contact-us.component';
import { ServicesComponent } from '@app/pages/services/services.component';
import { AboutUsComponent } from '@app/pages/about-us/about-us.component';
import { LoginComponent } from '@app/pages/login/login.component';
import { HomeComponent } from '@app/pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembershipComponent } from '@app/pages/membership/membership.component';


const routes: Routes = [
  {
    path: '' ,
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'service',
    component: ServicesComponent
  },
  {
    path: 'membership',
    component: MembershipComponent
  },
  {
    path: 'contact',
    component: ContactUsComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    children: [
    {
      path: 'profile/:id',
      component: ProfileDetailsComponent,
      resolve: {myProfile: ResolverGuard}
    }
  ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
