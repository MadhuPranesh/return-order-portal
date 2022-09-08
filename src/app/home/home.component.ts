import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProcessRequest } from '../model/ProcessRequest.model';
import { RestcallService } from '../rest-service/restcall.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private http: HttpClientModule,
    private restservice: RestcallService,
    private router: Router
  ) {}

  @ViewChild('returnDetails') formElements!: NgForm;

  componentType: string = 'accessory';
  replaceOrReturn: string = 'return';
  isPriorityOne: string = 'yes';
  processRequest: any;
  processResponse: any;
  servererror = false;
  message: any;
  ngOnInit(): void {}
  onSubmit(form: NgForm) {
    console.log(form.form.value);
    let v = form.form.value;
    this.processRequest = new ProcessRequest(
      v.userName,
      v.contactNumber,
      v.componentType,
      v.componentName,
      v.noOfComponents,
      v.isPriorityOne,
      v.defectiveDetails,
      v.returnOrReplacement
    );
    console.log(form.form.value);
    this.processResponse = this.restservice
      .processComponentRequest(this.processRequest)
      .subscribe(
        (res) => {
          this.restservice.processDetails(res);
          this.router.navigate(['/process']);
        },
        (error) => {
          console.log(error);
          if (error.status == 401) {
            this.router.navigate(['/']);
          } else {
            this.servererror = true;
            this.message = 'Server Error happened!!!';
          }
        }
      );
  }
}
