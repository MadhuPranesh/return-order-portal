import { HttpClient, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ProcessRequest } from '../model/ProcessRequest.model';
import { User } from '../model/User.model';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class RestcallService {
  error = new Subject<string>();
  constructor(private http: HttpClient, private router: Router) {}
  processComponentRequest(processRequest: ProcessRequest) {
    return this.http.post(
      'http://841223-return-order-mgmt-lb-1858501683.us-west-2.elb.amazonaws.com/process/process-detail',
      processRequest,
      {
        responseType: 'text' as 'json',
      }
    );
  }

  authenticateUser(user: User) {
    return this.http.post(
      'http://841223-return-order-mgmt-lb-1858501683.us-west-2.elb.amazonaws.com/auth/login',
      user,
      {
        responseType: 'text' as 'json',
        observe: 'response',
      }
    );
  }
  proceedToConfirm(requestID: any, processingCharge: any) {
    return this.http.post(
      `http://841223-return-order-mgmt-lb-1858501683.us-west-2.elb.amazonaws.com/process/completeProcessing/${requestID}/1234567890/300000/${processingCharge}`,
      {},
      { responseType: 'text' }
    );
  }
  details: any;
  processDetails(detail: any) {
    console.log(detail);
    this.details = detail;
    console.log(this.details);
  }
  returnProcessdetails() {
    console.log(this.details);
    return this.details;
  }
}
