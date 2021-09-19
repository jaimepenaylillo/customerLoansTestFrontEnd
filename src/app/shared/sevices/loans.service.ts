import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import * as appConstants from '../consts';
import { loan } from '../models/loans.model';

@Injectable({
  providedIn: 'root'
})
export class LoansService {
  loansApi: string = appConstants.apiUrl + 'loans/'
  constructor(private http: HttpClient) { }

  postLoans(loan: loan): Observable<loan> {
    console.log(appConstants.appUrl + this.loansApi, loan);
    return this.http.post<loan>(appConstants.appUrl + this.loansApi, loan);
  }
}
