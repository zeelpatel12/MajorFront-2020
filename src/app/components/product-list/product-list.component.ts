import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductsService } from 'src/app/services/products.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    public term : string
    public products : Product[]

    constructor(router : Router, route : ActivatedRoute, private productsService : ProductsService,private sanitizer:DomSanitizer) { 
        this.term = route.snapshot.paramMap.get('term') || ""
    }

    ngOnInit(): void {
        this.productsService.getProducts().subscribe((productss : Product[]) => {
            this.products = productss
            console.log(this.products)
           // this.products[0].imageUrl = '../../../assets/static/images/apple.jpg';
        }, (error: ErrorEvent) => {
        })
    }
    }
