import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/Category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {



 

  public term : string
  public categories: Category[]
  constructor(router : Router, route : ActivatedRoute, private categoryService : CategoryService) {
    this.term = route.snapshot.paramMap.get('term') || ""
   }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((categories : Category[]) => {
      this.categories = categories;
  }, (error: ErrorEvent) => {
    console.log(error);
  })
}

}
