import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerServiceService } from '../customer-service.service';
import { AuthenticationService } from '../services/authentication.service';
import { Orders } from '../Orders';

@Component({
  selector: 'addcart',
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.css']
})
export class AddcartComponent implements OnInit {

  orders: any = [];
  data: any; 
  constructor(
    public router: Router,
    public aroute: ActivatedRoute,
    public restApi: CustomerServiceService
  ){
  }

  ngOnInit(): void {
    this.CartDetails();
    this.loadCart();
    this.loadOrders();
  }
  getCartDetails: any = [];
  CartDetails() {
    if (localStorage.getItem('localCart')) {
      this.getCartDetails = JSON.parse(localStorage.getItem('localCart') || '[]');
      console.log(this.getCartDetails);
    }
  }
  incQnt(prodId: any, qnt: any) {
    for (let i = 0; i < this.getCartDetails.length; i++) {
      if (this.getCartDetails[i].prodId === prodId) {
        if (qnt != 5)
          this.getCartDetails[i].qnt = parseInt(qnt) + 1;
      }
    }
    localStorage.setItem('localCart', JSON.stringify(this.getCartDetails));
    this.loadCart();
  }
  decQnt(prodId: any, qnt: any) {
    for (let i = 0; i < this.getCartDetails.length; i++) {
      if (this.getCartDetails[i].prodId === prodId) {
        if (qnt != 1)
          this.getCartDetails[i].qnt = parseInt(qnt) - 1;
      }
    }
    localStorage.setItem('localCart', JSON.stringify(this.getCartDetails));
    this.loadCart();
  }
  total: number = 0;
  loadCart() {
    if (localStorage.getItem('localCart')) {
      this.getCartDetails = JSON.parse(localStorage.getItem('localCart') || '[]');
      this.total = this.getCartDetails.reduce(function (acc: any, val: any) {
        let dateTime = new Date();
        if ((dateTime.getMonth() == 7) && ((dateTime.getDate() == 25) || (dateTime.getDate() == 26)) && (dateTime.getFullYear() == 2021)) {
          return acc + (val.amt * val.qnt) / 2;
        }
        else {
          console.log(dateTime.getMonth());
          console.log(dateTime.getDate());
          console.log(dateTime.getDate());
          console.log(dateTime.getFullYear());
          return acc + (val.amt * val.qnt);
        }
      }, 0)
    }
  }
  removeall() {
    localStorage.removeItem('localCart');
    this.getCartDetails = [];
    this.total = 0;
  }

  deleteOrder(orderId: any) {
    return this.restApi.deleteOrder(orderId).subscribe((data) => {
      this.loadOrders();
    }
    );
  }
  loadOrders() {
    return this.restApi
      .getCustomers()
      .subscribe((data) => (this.orders = data));
  }
}

