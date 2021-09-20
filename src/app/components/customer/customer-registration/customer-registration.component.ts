import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { customer } from 'src/app/shared/models/customer.model';
import { CustomerService } from 'src/app/shared/sevices/customer.service';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private customerServ: CustomerService, private toastr: ToastrService) {
    this.form = this.formBuilder.group({
      id: 0,
      name: ['', [Validators.required, Validators.maxLength(100), Validators.minLength(5)]],
      birthdate: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
  }

  saveCustomer() {
    console.log(this.form);
    const customer: customer = {
      name: this.form.get('name')?.value,
      birthdate: this.form.get('birthdate')?.value,
    }
    this.customerServ.postCustomer(customer)
      .subscribe(data => {
        this.toastr.success('Customer Saved', 'Customer has been added');
        this.form.reset();
      });
  }


}
