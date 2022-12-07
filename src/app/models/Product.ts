import { Byte } from "@angular/compiler/src/util"
import { Category } from "./Category"

export class Product {
    id : number
    name : string
    description : string
    price : number
    addedOn : Date
    image : [Byte]
    imageUrl : string
    stock : number
    category: Category
    categoryId: number
}