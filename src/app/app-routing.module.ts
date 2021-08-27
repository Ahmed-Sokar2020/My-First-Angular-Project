import { TeamComponent } from './pages/team/team.component';
import { PageNotfoundComponent } from './pages/page-notfound/page-notfound.component';
import { ResolverGuard } from '@app/core/guards/resolver.guard';
import { ProfileComponent } from '@app/pages/profile/profile.component';
import { ContactUsComponent } from '@app/pages/contact-us/contact-us.component';
import { ServicesComponent } from '@app/pages/services/services.component';
import { AboutUsComponent } from '@app/pages/about-us/about-us.component';
import { LoginComponent } from '@app/pages/login/login.component';
import { HomeComponent } from '@app/pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: 'home' ,
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch:'full'
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
    path: 'team',
    component: TeamComponent
  },
  {
    path: 'contact',
    component: ContactUsComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: '**',
    component: PageNotfoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
