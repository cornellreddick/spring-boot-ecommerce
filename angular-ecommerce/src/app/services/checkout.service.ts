import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Purchase } from './purchase';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

private purchaseUrl = 'https://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  placeOrder(purchase: Purchase): Obeservable<any>{
    return this.httpClient.post<Purchase>(this.purchaseUrl, purchase);
  }
}
