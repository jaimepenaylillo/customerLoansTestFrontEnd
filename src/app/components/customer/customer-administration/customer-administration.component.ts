import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-customer-administration',
  templateUrl: './customer-administration.component.html',
  styleUrls: ['./customer-administration.component.css']
})
export class CustomerAdministrationComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {
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
  }

}
