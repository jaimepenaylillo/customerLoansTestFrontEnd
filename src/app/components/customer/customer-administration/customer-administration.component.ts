import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { loan } from 'src/app/shared/models/loans.model';
import { LoansService } from 'src/app/shared/sevices/loans.service';

@Component({
  selector: 'app-customer-administration',
  templateUrl: './customer-administration.component.html',
  styleUrls: ['./customer-administration.component.css']
})
export class CustomerAdministrationComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private loansServ: LoansService) {
    this.form = this.formBuilder.group({
      id: 0,
      dateOfRequest: ['', [Validators.required]],
      requestedAmount: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
  }

  saveLoan() {
    console.log(this.form);
    const loan: loan = {
      customerId: 1,
      dateOfRequest: this.form.get('dateOfRequest')?.value,
      requestedAmount: this.form.get('requestedAmount')?.value,
    };
    this.loansServ.postLoans(loan)
      .subscribe(data => {
        console.log('Loan Saved');
        this.form.reset();
      });
  }

}
