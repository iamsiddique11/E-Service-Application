import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { SignInData } from '../model/sign-in-data';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})

export class LoginAdminComponent implements OnInit {

  // email: String ='' 
  // password: String =''
  isFormValid = false;
  areCredentialsInvalid = false;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }
  onSubmit(signInForm: NgForm) {
    if (!signInForm.valid) {
      this.isFormValid = true;
      this.areCredentialsInvalid = false;
      return;
    }
    this.checkCredentials(signInForm);

  }

  private checkCredentials(signInForm: NgForm) {
    const signInData = new SignInData(signInForm.value.email, signInForm.value.password);
    if (!this.authenticationService.authenticate(signInData)) {
      this.isFormValid = false;
      this.areCredentialsInvalid = true;
    }
  }
  // loginadmin(){
  //   if(this.email =="admin@gmail.com" && this.password=="admin")
  //   {
  //     console.log("Welcome admin")
  //     this.router.navigate(['/home-admin']);
  //   }
  //   else{
  //     window.alert("Invalid credentials")
  //     this.router.navigate(['']);
  //     console.log("Bahar nikal")
  //   }
  // }

}
