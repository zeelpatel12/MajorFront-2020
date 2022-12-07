import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/Category';
import { Product } from 'src/app/models/Product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css']
})
export class AddCategoriesComponent implements OnInit {

  public error: string;
  public name: string;
  public description: string;
  public stock: number;
  public price: number;
  public category: any;
  public imageUrl: string;

  categories: Category[];
  product: Product;
  router: any;

  constructor(private categoryService: CategoryService, private productService: ProductsService) {

    this.product = new Product();
  }

  ngOnInit(): void {

    this.categoryService.getCategories().subscribe((data => {
      console.log(JSON.stringify(data));
      this.categories = data;
    }
    ), (error => console.log(error)));

  }

  onSubmit() {
    if (this.name == null) {
      this.error = "Enter Valid name"
      return
    }

    else if (this.description == null) {
      this.error = "Enter valid discription"
      return
    }

    else if (this.stock == null) {
      this.error = "Enter Valid stock"
      return
    }

    else if (this.price == null) {
      this.error = "Enter valid price"
      return
    }

    else if (this.category == null) {
      this.error = "Enter valid category"
      return
    }

    else if (this.imageUrl == null) {
      this.error = "Enter valid image"
      return
    }

    else {
      console.log("added");
    }

    debugger;

    this.product.name = this.name;
    this.product.description = this.description;
    this.product.stock = this.stock;
    this.product.price = this.price;
    this.product.categoryId = this.category.id;
    this.product.imageUrl = this.imageUrl;


    this.productService.createProducts(this.product).subscribe(
      data => console.log(data),
     // this.router.navigate(['products'])
      // error => console.log(error)
      );
  }




}
