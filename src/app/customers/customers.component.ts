import { DataService } from './../core/data.service';
import { Component, OnInit } from '@angular/core';

import { ICustomer } from './../shared/interfaces';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  title: string;
  people: any[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
   this.title = 'Customers';
   this.dataService.getCustomers()
      .subscribe((customers: ICustomer[]) => this.people = customers);
  }

}
