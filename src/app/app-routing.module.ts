import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './components/address/address.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { RegisterComponent } from './components/register/register.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { OrdersummaryComponent } from './components/ordersummary/ordersummary.component';
import { Product } from './models/Product';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductimageaddComponent } from './productimageadd/productimageadd.component';

const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'shop', component: ProductListComponent},
    {path: 'shop/:term', component: ProductListComponent},
    {path: 'shop/products/:id', component: ProductDetailComponent},
    {path: 'account', component: UserDetailComponent},
    {path: 'cart', component: CartComponent},
    {path: 'address' , component: AddressComponent},
    {path: 'payment', component:PaymentComponent},
    {path: 'dashboard', component: AdmindashboardComponent},
    {path: 'ordersummary', component: OrdersummaryComponent},
    {path: 'product', component: ProductimageaddComponent},
    {path: 'addCategory', component: AddCategoryComponent},
    {path:'categories', component: CategoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
    constructor (router : Router) {}
}
