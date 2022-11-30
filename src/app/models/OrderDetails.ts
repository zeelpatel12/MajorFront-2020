import { Product } from "./Product";
import { User } from "./User";

export class OrderDetails{
    
    id: Number;
    addedOn: Number;
    quantity: Number;
    product: Product;
    user:User
}