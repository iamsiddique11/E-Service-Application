import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  contactUs() {
    window.alert("Your message has been submitted.\nWe will contact you in a short while.")
    this.router.navigate(['/home'])
  }

}
