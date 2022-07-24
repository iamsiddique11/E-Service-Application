import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerServiceService } from '../customer-service.service';
import { Customer } from '../customer';
import { User } from '../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  customer = new Customer();
  constructor(public router: Router, private service: CustomerServiceService) { }

  ngOnInit(): void {
  }
  loginUser() {
    this.service.getCustomerByEmail(this.customer).subscribe(
      (data: any) => { this.router.navigate(['/home']) },
      error => window.alert("Please enter valid credentials")
    )
  }
}


