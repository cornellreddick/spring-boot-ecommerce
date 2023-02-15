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

  if(alreadyInCart) {
  existingCartItem.quantity++;
  }else{
  // just add the item to the array
  this.cartItems.push(theCartItem);
  }

  // compute cart total price and total quantity
  this.computeCartTotal();
  }
  computeCartTotal(){
  let totalPriceValue = number = 0;
  let totalQuantityValue = number = 0;

  for(let currentCartItem of this.cartItems){
    totalPriceValue += currentCartItem.quantity * currentCartItem.unitPrice;
    totalQuantityValue += currentCartItem.quantity;
  }
  // publicsh the new values .. all subscriber will recieve the new data.
  this.totalPrice.next(totalPriceValue);
  this.totalQuantity.next(totalQuantityValue);

  // log cart data just for debug
  this.logCartData(totalPriceValue, totalQuantityValue);
  }
  logCartData(totalPriceValue: number, totalQuantityValue: number){
  console.log("Contents of the cart");
  for(let tempCartItem of this.cartItems){
    const subTotalTotalPrice = tempCartItem.quantity * tempCartItem.unitPrice;
    console.log(`name: ${tempCartItem.name}, quantity: ${tempCartItem.quantity}, unitPrice: ${tempCartItem.unitPrice}, subTotalPrice: ${subTotalPrice}`);
  }

  console.log(`totalPrice: , ${totalPriceValue.toFixed(2)}, totalQuantity: ${totalQuantityValue.toFixed(2)}`);
  console.log(`____________________________________`);

  }
}
