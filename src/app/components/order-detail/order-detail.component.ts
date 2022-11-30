import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderDetails } from 'src/app/models/OrderDetails';
import { OrderDetailService } from 'src/app/services/order-detail.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  public term : string
  public orders: OrderDetails[]
  constructor(router : Router, route : ActivatedRoute, private orderDetailService: OrderDetailService) {
    this.term = route.snapshot.paramMap.get('term') || ""
   }

  ngOnInit(): void {
    this.orderDetailService.getOrders().subscribe((orders : OrderDetails[]) => {
      this.orders = orders;
      console.log(JSON.stringify(this.orders));
  }, (error: ErrorEvent) => {
  })
}
  }


