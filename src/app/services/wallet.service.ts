import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Wallet } from '../models/Wallet';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor(private http : HttpClient) { }
  getWallet (id : string) : Observable<Wallet> {
    return this.http.get<Wallet>(`${environment.API_URL}/api/products/${id}`);
}

}
