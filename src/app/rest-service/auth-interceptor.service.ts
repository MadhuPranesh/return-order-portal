import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  token: any;
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log(req);
    this.token = 'Bearer ' + localStorage.getItem('authtoken');
    const modifiedReq = req.clone({
      headers: req.headers.append('Authorization', this.token),
    });
    return next.handle(modifiedReq);
  }
}
