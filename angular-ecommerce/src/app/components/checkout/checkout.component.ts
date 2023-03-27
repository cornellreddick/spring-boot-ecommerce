import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutFormGroup!: FormGroup;

  totalPrice: number = 0;
  totalQuantity: number = 0;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.checkoutFormGroup = this.formBuilder.group({
      customer: this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      emailAddress: [''],
    }),
    shippingAddress: this.formBuilder.group({
      street: [''],
      country: [''],
      city: [''],
      state: [''],
      zipCode: [''],
    }),
    billingAddress: this.formBuilder.group({
        street: [''],
        country: [''],
        city: [''],
        state: [''],
        zipCode: [''],
    }),
    creditCard: this.formBuilder.group({
        cardType: [''],
        nameOnCard: [''],
        cardNumber: [''],
        securityCode: [''],
        expirationMonth: [''],
        expirationYear: ['']
    })

  });
  }


onSubmit(){
  console.log("Handling the submit button.");
  console.log(this.checkoutFormGroup.get('customer')!.value);
}


}
