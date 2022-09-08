import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { JwtLoginComponent } from './jwt-login/jwt-login.component';
import { AuthInterceptor } from './rest-service/auth-interceptor.service';
import { ProcessdetailsComponent } from './processdetails/processdetails.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, JwtLoginComponent, ProcessdetailsComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
      },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
