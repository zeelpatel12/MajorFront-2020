import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/Product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Observable<Product[]>;
  public term : string

  constructor(private productsService: ProductsService,

    private router: Router) {

      
    }

 

  ngOnInit(): void {
    this.reloadData();
  }

  // getCategoryNameBYId(id:number):string{
  //   catName:String;
  //   this.categoryService.getCategoryBYID(id).subscribe(data=>{
  //     console.log(data);
  //     catName=data.name;
  //   },error=>{});
  //   return this.getCategoryNameBYId;
  // }

reloadData() {
  this.products = this.productsService.getProducts();
}

deleteProduct(id: number) {
  this.productsService.deleteProduct(id).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
}

updateProduct(id: number, product: Product ) {
  this.productsService.updateProduct(id, product).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
}

productDetails(id: number){
  this.router.navigate(['products', id]);
}
  }



