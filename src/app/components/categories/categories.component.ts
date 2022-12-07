import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/Category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  cat: Observable<Category[]>;
  public term : string
 public category: Category
  public categories: Category[]

  myCategory: Category = {
    categoryName: ' ',
    id: 0,
    get: undefined
  };
  route: any;

 
  constructor(router : Router, route : ActivatedRoute, private categoryService : CategoryService) {

     this.term = route.snapshot.paramMap.get('term') || ""

   }



  ngOnInit(): void {
     this.reloadData();
    //  this.getTutorial(this.route.snapshot.params.id);
    this.categoryService.getCategories().subscribe((categories : Category[]) => {

      this.categories = categories;

  }, (error: ErrorEvent) => {

    console.log(error);

  })

  
}
getTutorial(id: number): void {
  this.myCategory.get(id)
    .subscribe(
      data => {
        this.myCategory = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
}

reloadData() {
  
    this.cat = this.categoryService.getCategories();
}





updateCategory(): void {
  this.categoryService.updateCategory(this.category.id, this.myCategory)
    .subscribe(
      response => {
        this.myCategory.categoryName = this.category.categoryName;
        console.log(response);
      
      },
      error => {
        console.log(error);
      });
}



deleteCategory(id: number){
  console.log(this.categoryService.deleteCategory(id));
  this.categoryService.deleteCategory(id).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
}


}



