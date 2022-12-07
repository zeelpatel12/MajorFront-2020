import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/models/Category';
import { CategoryService } from 'src/app/services/category.service';


@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  public error : string;
  public catName : string;
  category: Category ;

 constructor(private categoryService: CategoryService) {
    this.category=new Category();
   }

 ngOnInit(): void {}

  register () {
    if (this.catName==null) {
      this.error = "Enter Valid name"
     return
    }

   this.category.categoryName = this.catName;
   console.log(this.category.categoryName = this.catName);
     this.categoryService.save(this.category).subscribe(
       data => console.log(data),
       error => console.log(error));
      }
}



