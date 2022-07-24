import { Component } from '@angular/core';
import { AuthService } from './_service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EServiceAng';
  constructor(private auth:AuthService){
    this.auth.cartSubject.subscribe((data)=>{
      this.cartItem=data;
    });
  }
  ngOnInit():void{
    this.cartItemFunc();
  }
  cartItem:number=0;
  cartItemFunc=()=>{
    if(localStorage.getItem('localCart')!=null){

      var cartCount=JSON.parse(localStorage.getItem('localCart')||'[]');
      
      this.cartItem=cartCount.length;
    }

  }
}
