import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

// class Values{
//   id?:number;
//   name?:string;
//   discription?:string;
//   stock?:number;
//   addedOn: Date;
//   price?:number;
//   img?:string;
//   categoryId?:number;
//   }
import { faUser , faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import { CartItem } from 'src/app/models/CartItem';
import { User } from './models/User';
import { UsersService } from './services/users.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    user=faUser;
    cart=faShoppingCart;
    
    mainDialogType="";
    cartItems : CartItem[]
    title = 'frontend';
    public term : string
    public isTokenThere : boolean
  

    user1 : User;
    editMode : boolean = false;

    name : string;
    username : string;
    email : string;
    address : string;
    phone : string;
    public role: string;

    constructor(private router: Router,private usersService:UsersService) {
        console.log("Token:  " + localStorage.getItem('token'));
        this.isTokenThere = localStorage.getItem('token') != null;
        
    }
    ngOnInit(): void {
        if (!localStorage.getItem('token')) {
            this.router.navigateByUrl('/login')
            return
        }

        this.usersService.getUserByToken().subscribe((user : User) => {
            this.user1 = user
            
            this.name = user.name;
            this.username = user.username;
            this.email = user.email;
            this.address = user.address;
            this.phone = user.phone;
            this.role = user.role;
       
        }, (error : ErrorEvent) => {
            console.log(error)
        })
    }
    
    search () {
        this.router.navigate(["/products", this.term]).then(() => window.location.reload())
    }  
  

  // formProfile=new FormGroup({

  //   id:new FormControl('',Validators.required),
  //   name:new FormControl('',Validators.required),
  //   discription:new FormControl('',Validators.required),
  //   stock:new FormControl('',Validators.required),
  //   addedOn:new FormControl('',Validators.required),
  //   price:new FormControl('',Validators.required),
  //   img:new FormControl('',Validators.required),
  //   categoryId:new FormControl('',Validators.required)

  // })

  // usdformSubmit(){
  //   this.http.post<any>("http://localhost:8080/api/create", this.formProfile.value).subscribe(
  //     x=>console.log("Added"),
  //     err=>console.log("error")
  //   )
  // }

    closeDialog(){
        this.mainDialogType = "";
     }
}
