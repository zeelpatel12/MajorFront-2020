import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './components/add-category/add-category/add-category.component';
import { AddCategoriesComponent } from './components/add-products/add-categories.component';
import { AddressComponent } from './components/address/address.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { LoginComponent } from './components/login/login.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { RegisterComponent } from './components/register/register.component';
import { UpdateCategoryComponent } from './components/update-category/update-category.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';

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
    {path: 'addproduct' , component: AddCategoriesComponent},
    {path: 'products' , component: ProductComponent},
    {path: 'addcategory' , component: AddCategoryComponent},
    {path: 'categories' , component: CategoriesComponent},
    { path: 'update/:id', component: UpdateCategoryComponent  },
    {path: 'payment', component:PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
    constructor (router : Router) {}
}
