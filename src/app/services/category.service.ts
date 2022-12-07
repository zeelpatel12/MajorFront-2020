import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category} from '../models/Category';
@Injectable({
    providedIn: 'root'
  })
export class CategoryService{

    constructor(private http:HttpClient){}
    
    // createCategory (category: Category) : Observable<Object> {
    //     return this.http.post(`${environment.API_URL}/api/create`,category);
    // }

    public save(category: Category) {
        return this.http.post(`${environment.API_URL}/api/create`, category);
      }

    getCategories () : Observable<Category[]> {
        return this.http.get<Category[]>(`${environment.API_URL}/api/allCats`);
    }

    getCategoryBYID(id:number):Observable<Category>{
        return this.http.get<Category>(`${environment.API_URL}/api/categoryBy/${id}`);
    }

    updateCategory (id : number,  category: Category ) : Observable<Category> {
        return this.http.post<Category>(`${environment.API_URL}/api/update/${id}`, category);
    }

    deleteCategory (id : number ) : Observable<Category> {
        return this.http.delete<Category>(`${environment.API_URL}/api/category/${id}`);
    }


}