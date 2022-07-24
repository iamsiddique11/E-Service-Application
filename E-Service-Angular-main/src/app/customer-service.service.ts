import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Customer } from './customer';
import { User } from './model/user';
import { Payment } from './Payment';


@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
  private resturl: string = 'http://localhost:8080/EServiceSystem/customer';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };


  createCustomer(customer: any): Observable<Customer> {
    return this.http
      .post<Customer>(this.resturl + '/createCustomer', JSON.stringify(customer), this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  addPayment(payment: any): Observable<Payment> {
    return this.http
      .post<Payment>('http://localhost:8080/EServiceSystem/payment/addPayment', JSON.stringify(payment), this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  public getCustomerByEmail(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.resturl + '/getCustomerByEmail', customer)
  }


  getCustomers(): Observable<Customer[]> {
    return this.http
      .get<Customer[]>(this.resturl + '/allCustomers')
      .pipe(retry(1), catchError(this.handleError));
  }

  deleteCustomer(cid: any): Observable<Customer> {
    return this.http
      .delete<Customer>(this.resturl + '/deleteCustomer/' + cid, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }
  deleteOrder(orderId: any): Observable<Customer> {
    return this.http
      .delete<Customer>(this.resturl + '/deleteOrder/' + orderId, this.httpOptions)
      // .delete<Customer>('http://localhost:8080/EServiceSystem/order' + '/deleteOrder/' + orderId, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  getCustomerById(cid: any): Observable<Customer> {
    return this.http
      .get<Customer>(this.resturl + '/getCustomerById/' + cid)
      .pipe(retry(1), catchError(this.handleError));
  }

  update(customer: any): Observable<Customer> {
    return this.http
      .put<Customer>(
        this.resturl + '/updateProfile',
        JSON.stringify(customer),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }


  handleError(err: any) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = err.error.message;
    }
    else {
      errorMessage = `Error code : ${err.status}\nError message : ${err.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
