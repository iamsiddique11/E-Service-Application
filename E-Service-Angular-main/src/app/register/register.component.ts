import { registerLocaleData } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerServiceService } from '../customer-service.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input()
  customerDetails:any ={name:'', phone:'', email:'', address:'', password:'',
confirmpassword:'', gender:''};

 constructor(public router :Router,public resturl : CustomerServiceService){}
  
  ngOnInit(): void {
  }
  register() {
    

    // this.restApi.createCustomer(this.customerDetails).subscribe((data: {}) => {
    //   this.router.navigate(['/login']);
    // });
    this.resturl.createCustomer(this.customerDetails).subscribe((data:any)=>{this.router.navigate(['/login'])});
  }
  @ViewChild('f')
    signupForm = NgForm;
    name = '';
    phone = '';
    address ='';
    password = '';
    confirmpassword='';
    email = '';
    gender = ['male', 'female'];
  
    user = {
      name: '',
      phone:'',
      address:'',
      email: '',
      password: '',
      confirmpassword:'',
      gender: '',
    };
  
    submitted = false;
  
    onSubmit(f: NgForm) {
      this.submitted = true;
  
      console.log(f.value);
      this.user.name = f.value.userData.name;
      this.user.phone = f.value.userData.phone;
      this.user.address = f.value.userData.address;
      this.user.password = f.value.userData.password;
      this.user.confirmpassword = f.value.userData.confirmpassword;
      this.user.email = f.value.userData.email;
      this.user.gender = f.value.userData.gender;
  }
}