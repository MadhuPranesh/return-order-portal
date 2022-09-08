import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../model/User.model';
import { UserToken } from '../model/UserToken.model';
import { RestcallService } from '../rest-service/restcall.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jwt-login',
  templateUrl: './jwt-login.component.html',
  styleUrls: ['./jwt-login.component.css'],
})
export class JwtLoginComponent implements OnInit {
  constructor(private restService: RestcallService, private router: Router) {}

  ngOnInit(): void {}
  isLoading = false;
  message = false;
  authResponse: any;
  servererror = false;

  userCredentials: any;
  authenticatedUser: any;

  OnSubmit(form: NgForm) {
    this.userCredentials = new User(form.value.userName, form.value.password);
    this.isLoading = true;

    this.restService.authenticateUser(this.userCredentials).subscribe(
      (res) => {
        this.isLoading = false;
        this.authResponse = res.body;
        this.message = false;
        this.authResponse = JSON.parse(this.authResponse);
        console.log(this.authResponse.token);
        // this.authenticatedUser = new UserToken(
        //   this.authResponse.userName,
        //   this.authResponse.token
        // );
        localStorage.setItem('user', this.authResponse.userName);
        localStorage.setItem('authtoken', this.authResponse.token);
        localStorage.setItem('token', 'valid');
        this.router.navigate(['/home']);
      },
      (error) => {
        this.isLoading = false;
        if (error.status == 401) {
          this.message = true;
        } else {
          this.message = false;
          this.servererror = true;
        }
      }
    );
  }
}
