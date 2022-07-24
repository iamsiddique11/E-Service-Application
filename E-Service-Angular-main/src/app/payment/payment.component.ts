import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerServiceService } from '../customer-service.service';

@Component({
  selector: 'payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  @Input()
  paymentDetails:any ={cardNumber:'', month:'', year:'', cvv:''};
  
  constructor(public router :Router,public resturl : CustomerServiceService) { }

  ngOnInit(): void {
  }

  payment() {
    // this.restApi.createCustomer(this.customerDetails).subscribe((data: {}) => {
    //   this.router.navigate(['/login']);
    // });
    this.resturl.addPayment(this.paymentDetails).subscribe((data:any)=>{
      window.alert("Payment is successful!")
      this.router.navigate(['/home'])});
  }

  // proceed(){
  //   window.alert("Payment is successful!")
  // }
  @ViewChild('f')
  paymentForm = NgForm;
  cardno = '';
  month = '';
  year ='';
  cvv = '';

  user = {
    cardno: '',
    month:'',
    year:'',
    cvv: '',
  };

  submitted = false;

  onSubmit(f: NgForm) {
    this.submitted = true;

    console.log(f.value);
    this.user.cardno = f.value.userData.cardno;
    this.user.month = f.value.userData.month;
    this.user.year = f.value.userData.year;
    this.user.cvv = f.value.userData.cvv;
}
}
