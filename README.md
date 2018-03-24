# payment_test_ionic_2checkout
This is to test a posible payment gateway implementation with ionic v3 and 2checkout provider

At the begining the project will contain only a home page where the user can enter personal but no sensible information into a form.
The form will be created with the ngModel approach and data is passed as an argument to a provider module, named body_input.

The provider module, called checkout will create the corresponding POST request and use such body_input into the http.post request.

# Sources
[inline-checkout in 2chekcout](https://www.2checkout.com/documentation/checkout/inline-checkout)
[2checkout sandbox website](https://sandbox.2checkout.com/sandbox/signup)

# Authors
JeanCarlos Chavarria Hughes
