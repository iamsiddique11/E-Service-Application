import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';

import { CustomerServiceService } from '../customer-service.service';
import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {

  @Input()
  customerDetails: any = { cid: '' };

  searchTerm!: string;
  Customer!: Customer[];
  term!: string;
  customers: any = [];
  data: any;

  //cid :string|number ='';
  constructor(
    public router: Router,
    public aroute: ActivatedRoute,
    public restApi: CustomerServiceService,
    public authenticationService: AuthenticationService
  ) { }


  logout() {
    this.authenticationService.logout();
  }
  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers() {
    return this.restApi
      .getCustomers()
      .subscribe((data) => (this.customers = data));
  }

  deleteCustomer(cid: any) {
    return this.restApi.deleteCustomer(cid).subscribe((data) => {
      this.loadCustomers();
    }
    );
  }

  search(cid: any) {

    console.log(typeof parseInt(cid));
    return this.restApi.getCustomerById(cid).subscribe((data) => {
      this.loadCustomers();
    });
  }

  sort() {
    if (this.customerDetails) {
      let newarr = this.customers.sort((a: { cid: number; }, b: { cid: number; }) => a.cid - b.cid);
      this.data = newarr;
    }
    else {
      let newarr = this.customers.sort((a: { cid: number; }, b: { cid: number; }) => b.cid - a.cid);
      this.data = newarr;
    }
    this.customerDetails = !this.customerDetails;
  }
}
