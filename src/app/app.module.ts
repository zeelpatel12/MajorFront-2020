import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AddressComponent } from './components/address/address.component';
import { PaymentComponent } from './components/payment/payment.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { AddadminComponent } from './components/addadmin/addadmin.component';
import { OrdersummaryComponent } from './components/ordersummary/ordersummary.component';
import { ProductsComponent } from './components/products/products.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductimageaddComponent } from './productimageadd/productimageadd.component';




@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ProductListComponent,
    ProductDetailComponent,
    CartComponent,
    UserDetailComponent,
    AdmindashboardComponent,
    AddressComponent,
    PaymentComponent,
    AddadminComponent,
    OrdersummaryComponent,
    ProductsComponent,
    AddCategoryComponent,
    CategoriesComponent,
    ProductimageaddComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
