import { Component } from '@angular/core';
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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'frontend';
    public term : string
    public isTokenThere : boolean

    

    search () {
        this.router.navigate(["/shop", this.term]).then(() => window.location.reload())
    }
       
  constructor(private router: Router){
  
    console.log("Token:  " + localStorage.getItem('token'));
    this.isTokenThere = localStorage.getItem('token') != null
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

}
