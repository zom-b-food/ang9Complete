import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../core/data.service';
import { ICustomer, IOrder, IOrderItem } from '../shared/interfaces';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  order: IOrder[] = [];
  customer: ICustomer;
  isVisible = false;

  showNote() {
    this.isVisible = !this.isVisible;
  }


  constructor(private dataService: DataService,
              private route: ActivatedRoute) { }


  ngOnInit(): void {

    const id = +this.route.snapshot.paramMap.get('id');
    this.dataService.getOrders(id).subscribe((order: IOrder[]) => {
      this.order = order;
    });

    this.dataService.getOrders(id).subscribe((purchaseNote: IOrder[]) => {
      this.order = purchaseNote;
    });

    this.dataService.getCustomer(id).subscribe((customer: ICustomer) => {
      this.customer = customer;
    });
  }
}
