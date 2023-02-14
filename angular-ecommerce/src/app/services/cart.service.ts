import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

cartItems: CartItem[] = [];

totalPrice: Subject<number> = new Subject<number>();
totalQuantity: Subject<number> = new Subject<number>();

  constructor() { }

  addToCart(theCartItem: CartItem) {

  // check if we already have this item in the cart
  let alreadyInCart: boolean = false;
  let existingCartItem: CartItem = undefined;

  if(this.cartItems.length > 0) {
  // find the item in the cart based on the item providedIn
  for(let tempCartItem of this.cartItems) {
    if(tempCartItem.id === theCartItem.id){
      existingCartItem = tempCartItem;
      break;
    }
  }

  // check if we found it in the cart

  alreadyInCart = (existingCartItem!== undefined);
  }



  }
}
