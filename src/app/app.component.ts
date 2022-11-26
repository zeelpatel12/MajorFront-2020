import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faUser , faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import { CartItem } from 'src/app/models/CartItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    user=faUser;
    cart=faShoppingCart;
    mainDialogType="";
    cartItems : CartItem[]
    title = 'frontend';
    public term : string
    public isTokenThere : boolean

    constructor(private router: Router) {
        console.log("Token:  " + localStorage.getItem('token'));
        this.isTokenThere = localStorage.getItem('token') != null
    }

    search () {
        this.router.navigate(["/shop", this.term]).then(() => window.location.reload())
    }
    closeDialog(){
        this.mainDialogType = "";
     }
}
