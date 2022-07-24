import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerServiceService } from '../customer-service.service';

@Component({
  selector: 'edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  customerData: any = {};

  cid = this.aroute.snapshot.params['cid'];
  constructor(
    public router: Router,
    public aroute: ActivatedRoute,
    public restApi: CustomerServiceService
  ) { }

  ngOnInit(): void {
    this.restApi
      .getCustomerById(this.cid)
      .subscribe((data) => (this.customerData = data));
  }

  update() {
    if (window.confirm('You want to update?')) {
      this.restApi.update(this.customerData).subscribe((data: {}) => {
        this.router.navigate(['/view-customer']);
      });
    }
  }

}
