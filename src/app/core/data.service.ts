import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICustomer, IOrder } from '../shared/interfaces';

@Injectable()
export class DataService {

  // customersUrl: 'https://cors-anywhere.herokuapp.com/http://www.adam-marsh.com/customers.json';
  // ordersUrl: 'https://cors-anywhere.herokuapp.com/http://www.adam-marsh.com/orders.json';

    constructor(private http: HttpClient) { }

  getCustomers(): Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>('../../assets/customers.json');
  }

getCustomer(id: number): Observable<ICustomer> {
  return this.http.get<ICustomer[]>('../../assets/customers.json')
    .pipe(
      map(customers => {
        let customer = customers.filter((cust: ICustomer) => cust.id === id);
        return (customer && customer.length) ? customer[0] : null;
      }),
    );
  }

    getOrders(id: number): Observable<IOrder[]> {
      return this.http.get<IOrder[]>('../../assets/orders.json')
        .pipe(
          map(orders => {
            let custOrders = orders.filter((order: IOrder) => order.customerId === id);
            return custOrders;
          }),
        );
    }


    private handleError(error: any) {
      console.error('server error:', error);
      if (error.error instanceof Error) {
          const errMessage = error.error.message;
          return Error(errMessage);
      }
      return Error('Node.js server error');
    }

}
