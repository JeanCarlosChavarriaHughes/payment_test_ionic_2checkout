import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CheckoutProvider } from '../../providers/checkout/checkout';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(
    public navCtrl: NavController,
    private checkoutProvider: CheckoutProvider
    ) {
  }

  eventPurchase(){
  	//Verificar que se tiene la informacion necesaria
  	//Conectarse con 2Checkout Inline Payment
  	console.log("eventPurchase function called");
  	console.log(this['email']);
    console.log(this['phone']);
    console.log(this['card_holder_name']);
  	console.log(this);

    let body = {
      sid:'1303908', //2checkout account number, fixed
      mode:'2CO', //default '2CO', fixed
      li_0_type: 'product', // type of product0, fixed
      li_0_name: 'evento25032018', // name of event, variable
      li_0_quantity: '1', // number of inscriptions, fixed
      li_0_price: '25', //price to pay. variable
      country: 'Costa Rica', // country fixed
      //provincia: this['provincia'], //provincia
      state: this['state'], //state: canton
      city: this['city'], //city: distrito
      street_address2: this['street_address2'], //urbanizacion
      street_address: this['street_address'], //calle
      card_holder_name: this['card_holder_name'], //titular de la tarjeta
      zip: this['zip'], //postal code
      phone: this['phone'], //phone number
      email: this['email'], //email address
    };
    this.checkoutProvider.postPayment(body)
    .subscribe(response => {
      console.log(response);
    });
    }
  	//Buyer payment details are converted to a secure token
  	//You use the secure token to make the Puarchase API call
  	//2checkout securely processe buyer's payment information
  	//2checkout returns transaction result
  	//You handle the result and return a response to the buyer
  	//Buyer returns to the confirmation page of your website

  };