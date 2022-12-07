import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/Category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {

  id: number;
  category: Category;

  constructor(private route: ActivatedRoute,private router: Router,
    private categoryService: CategoryService) { }

  ngOnInit() {
    this.category = new Category();

    this.id = this.route.snapshot.params['id'];
    
    this.categoryService.getCategories()
      .subscribe(data => {
        console.log(data)
        
      }, error => console.log(error));
  }

  updateCategory() {
    this.categoryService.updateCategory(this.id, this.category)
      .subscribe(data => {
        console.log(data);
        this.category = new Category();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateCategory();    
  }

  gotoList() {
    this.router.navigate(['/categories']);
  }
}
