import { Address } from './address';
import { Customer } from './customer';
import { Order } from './order';
import { OrderItem } from './order-itmem';

export class Purchase {
  customer: Customer;
  shippingAddress: Address;
  billingAddress: Address;
  order: Order;
  orderItems: OrderItem[];
}
