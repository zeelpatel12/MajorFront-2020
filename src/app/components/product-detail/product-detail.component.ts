import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { Product } from 'src/app/models/Product';
// import { ProductsService } from 'src/app/services/products.service';
// import { User } from 'src/app/models/User';
// import { UsersService } from 'src/app/services/users.service';
// import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/Product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

// class Values{
//     id?:number;
//     name?:string;
//     discription?:string;
//     stock?:number;
//     addedOn: Date;
//     price?:number;
//     img?:string;
//     categoryId?:number;
//   }
  


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
    // public product : Product
    product: Product = new Product();
    submitted = false;
    // public user : User
    // public isProductInCart : boolean
    // public username : string;
    // public password : string;
    // public passwordConfirm : string;
    // public email : string;
    // public address : string;
    // public phone : string;
    // public name : string;

    // public error : string
    // constructor(
    
    //     private usersService : UsersService
      
    // ) { }

    // ngOnInit(): void {}
    //     pId:any="";
    //     pName:any="";
    //     pDesc:any="";
    //     pStock:any="";
    //     pDate:any="";
    //     pRate:any="";
    //     pImg:any="";
    //     pCatId:any="";

    //     demoVar:any[]= [];
        constructor(
          private router : Router,
          private productsService : ProductsService 
        ){
          // this.http.get<Values[]>("http://localhost:8080/api/products").subscribe(
          // x=>this.demoVar=x,
          // err=>console.log("error"))


        }
      ngOnInit() {}
          formProfile=new FormGroup({
      
          // id:new FormControl('',Validators.required),
          name:new FormControl('',Validators.required),
          discription:new FormControl('',Validators.required),
          // stock:new FormControl('',Validators.required),
          addedOn:new FormControl('',Validators.required),
          price:new FormControl('',Validators.required),
          // img:new FormControl('',Validators.required)
          // categoryId:new FormControl('',Validators.required)
        })

        newProduct(): void {
          this.submitted = false;
          this.product = new Product();
        }
      
        saveProduct() {
          this.productsService.createProduct(this.product).subscribe(data =>{
            console.log(data);
            this.product = new Product();
            this.goToProductList();

          },
          error => console.log(error));
          
        }
 

  onSubmit() {
    this.submitted = true;
    console.log(this.product);
    this.saveProduct();
  }

  goToProductList() {
    // throw new Error('Method not implemented.');
    this.router.navigate(['/shop']);
  }
      }
        
        // usdformSubmit(){
        //   this.http.post<any>("http://localhost:8080/api/products", this.formProfile.value).subscribe(
        //     x=>console.log("Added"),
        //     err=>console.log("error")
        //   )
        // }
        // this.productsService.getProduct(this.route.snapshot.paramMap.get('id')).subscribe((product : Product) => {
        //     this.product = product
        //     this.product.imageUrl = product.image ? 'data:image/jpeg;base64,' + product.image :
        //     " ";
        // }, (error: ErrorEvent) => {
        //     console.log(this.product);
        // })

        // this.usersService.getUserByToken().subscribe((user : User) => {
        //     this.user = user
        //     console.log(this.user.id);
        //    }
        // )
    

    // import { Component, OnInit } from '@angular/core';
    // import { Router } from '@angular/router';
    // import { Token } from 'src/app/models/Token';
    
    // import { UsersService } from 'src/app/services/users.service';
   
    // export class RegisterComponent implements OnInit {
       
    
    //     constructor(private usersService : UsersService, private router : Router) { }
    
    //     ngOnInit(): void {
    //         if (localStorage.getItem('token')) {
    //             this.router.navigateByUrl('/account')
    //         }
    //     }
    
    //     register () {
    //         const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*/
    
    //         this.error = ''
    
    //         if (!this.email || !this.email.match(emailRegex)) {
    //             this.error = "Email is not valid"
    //             return
    //         }
    
    //         if (this.password != this.passwordConfirm) {
    //             this.error = "Passwords do not match"
    //             return
    //         }
    
    //         this.usersService.register(
    //             this.username, this.password, this.email, this.email, this.address, this.phone).subscribe((token : Token) => {
    //                 localStorage.setItem('token', token.token);
    //                 this.router.navigateByUrl('/account').then(() => window.location.reload())
    //             }, (error : ErrorEvent) => {
    //                 this.error = error.error
    //             })
    //     }
    // }
    

   
