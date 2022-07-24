import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_service/auth.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  cartDataNull: undefined;
  itemsCart: any = [];
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }
  url: string = "../assets/g1.jpg";
  changeImage(event: any) {
    this.url = event.target.src;

  }

  productArray = [

    {
      prodId: 1,
      img: '../assets/product-image.jpg',
      amt: 7000,
      qnt: 1
    },
    {
      prodId: 2,
      img: 'assets/product-image-2.jpg',
      amt: 4000,
      qnt: 1
    },
    {
      prodId: 3,
      img: 'assets/product-image-3.jpg',
      amt: 3500,
      qnt: 1
    },
    {
      prodId: 4,
      img: 'assets/product-image-4.jpg',
      amt: 12000,
      qnt: 1
    },
    {
      prodId: 5,
      img: 'assets/product-image-5.jpg',
      amt: 6500,
      qnt: 1
    },
    {
      prodId: 6,
      img: 'assets/product-image-6.jpg',
      amt: 8000,
      qnt: 1
    },
    {
      prodId: 7,
      img: 'assets/product-image-7.jpg',
      amt: 4500,
      qnt: 1
    },
    {
      prodId: 8,
      img: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/iot-explained-what-it-is-how-it-works-and-its-applications-banner.jpg',
      amt: 10000,
      qnt: 1
    },

  ];
  inc(prod: { qnt: any; }) {
    //console.log(prod.qnt);
    if (prod.qnt != 5) {
      prod.qnt = prod.qnt + 1;
    }
  }
  dec(prod: { qnt: any; }) {
    //console.log(prod.qnt);
    if (prod.qnt != 1) {
      prod.qnt = prod.qnt - 1;
    }
  }

  addCart(category: { prodId: any; qnt: any; }) {
    console.log(category);
    let cartDataNull = localStorage.getItem('localCart');
    if (cartDataNull == null) {
      let storeDataGet: any = [];
      storeDataGet.push(category);
      localStorage.setItem('localCart', JSON.stringify(storeDataGet));
    }
    else {
      var id = category.prodId;
      let index: number = -1;
      this.itemsCart = JSON.parse(localStorage.getItem('localCart') || '[]');
      for (let i = 0; i < this.itemsCart.length; i++) {
        if (parseInt(id) === parseInt(this.itemsCart[i].prodId)) {
          this.itemsCart[i].qnt = category.qnt;
          index = i;
          break;

        }
      }
      if (index == -1) {
        this.itemsCart.push(category);
        localStorage.setItem('localCart', JSON.stringify(this.itemsCart));
      }
      else {
        localStorage.setItem('localCart', JSON.stringify(this.itemsCart));
      }
    }

    this.cartNumberFunc();
  }

  cartNumber: number = 0;
  cartNumberFunc() {
    var cartValue = JSON.parse(localStorage.getItem('localCart') || '[]');
    this.cartNumber = cartValue.length;
    this.auth.cartSubject.next(this.cartNumber);

  }
}


