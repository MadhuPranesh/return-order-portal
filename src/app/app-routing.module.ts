import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JwtLoginComponent } from './jwt-login/jwt-login.component';
import { ProcessdetailsComponent } from './processdetails/processdetails.component';
import { RouteGuard } from './route-guard/route-guard.guard';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [RouteGuard],
  },
  { path: '', component: JwtLoginComponent },
  {
    path: 'process',
    component: ProcessdetailsComponent,
    canActivate: [RouteGuard],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
