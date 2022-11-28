import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

    private baseUrl = 'http://localhost:8080/api/products';


    
    // createProducts (product: Product) : Observable<Product> {
    //     return this.http.post<Product>(`${environment.API_URL}/api/products`,product);
    // }

    createProduct(product: Object): Observable<Object> {
        return this.http.post(`${this.baseUrl}`, product);
      }
      

    getProduct (id : string) : Observable<Product> {
        return this.http.get<Product>(`${environment.API_URL}/api/products/${id}`);
    }

    constructor(private http : HttpClient) { }

    getProducts () : Observable<Product[]> {
        return this.http.get<Product[]>(`${environment.API_URL}/api/products`);
    }

    updateProduct (id : string,  product: Product ) : Observable<Product> {
        return this.http.post<Product>(`${environment.API_URL}/api/products/${id}`, product);
    }

    deleteProduct (id : string ) : Observable<Product> {
        return this.http.delete<Product>(`${environment.API_URL}/api/products/${id}`);
    }
}

  
  
  
   
  
  
    
  
    // getProduct (id : string) : Observable<Product> {
    //     return this.http.get<Product>(`${environment.API_URL}/api/products/${id}`);
    // }

