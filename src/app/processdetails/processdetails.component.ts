import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestcallService } from '../rest-service/restcall.service';

@Component({
  selector: 'app-processdetails',
  templateUrl: './processdetails.component.html',
  styleUrls: ['./processdetails.component.css'],
})
export class ProcessdetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private service: RestcallService,
    private router: Router
  ) {}

  requestDetails = this.service.returnProcessdetails();
  response = false;
  btndisabled = false;
  message: any;
  processDetails: any;
  responseError = false;

  ngOnInit(): void {
    // this.requestDetails = JSON.parse(this.route.snapshot.queryParams['data']);
    // console.log(this.requestDetails);
    console.log(this.requestDetails);

    this.processDetails = JSON.parse(this.requestDetails);
    console.log(this.processDetails);
    console.log(this.processDetails.dateOfDelivery);
  }
  proceedToConfirm() {
    this.service
      .proceedToConfirm(
        this.processDetails.processRequestId,
        this.processDetails.processingCharge
      )
      .subscribe(
        (res) => {
          this.message = res;
          this.response = true;
          console.log(res);
        },
        (err) => {
          if (err.status == 401) {
            this.router.navigate(['/']);
          } else {
            this.message = 'Internal server error';
            this.response = false;
            this.responseError = true;
          }
        }
      );
  }
}
