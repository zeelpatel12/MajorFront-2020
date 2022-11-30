import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OrderDetails } from '../models/OrderDetails';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailService {
  constructor(private http : HttpClient) { }

  getOrders () : Observable<OrderDetails[]> {
      return this.http.get<OrderDetails[]>(`${environment.API_URL}/api/order-details`);
  }

  // getProduct (id : string) : Observable<OrderDetails> {
  //     return this.http.get<OrderDetails>(`${environment.API_URL}/api/products/${id}`);
  // }
}
