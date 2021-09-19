import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as appConstants from '../consts';
import { customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customersApi: string = appConstants.apiUrl + 'customers/'
  constructor(private http: HttpClient) { }

  postCustomer(customer: customer): Observable<customer> {
    return this.http.post<customer>(appConstants.appUrl + this.customersApi, customer);
  }
}
