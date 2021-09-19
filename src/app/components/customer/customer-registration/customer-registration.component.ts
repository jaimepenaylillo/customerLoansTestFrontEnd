import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      id: 0,
      name: ['', [Validators.required, Validators.maxLength(100), Validators.minLength(5)]],
      birthdate: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
  }

  saveCustomer() {
    console.log(this.form)
  }

  validFields() {
    return this.form.get('name') && this.form.get('name')?.valid
  }

}
