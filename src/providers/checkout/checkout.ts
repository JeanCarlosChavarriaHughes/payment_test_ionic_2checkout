import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CheckoutProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const API_SandBox: string = "https://sandbox.2checkout.com/checkout/purchase"; //source of information

@Injectable()
export class CheckoutProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CheckoutProvider Provider');
  }

  postPayment(body_input){
  	//
  	let url = API_SandBox;
  	let body = body_input;
  	let options = {};
  	console.log(url);
  	console.log(body);

  	return this.http.post(url, body, options);
  }
}
