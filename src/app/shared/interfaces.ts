export interface ICustomer {
  id: number;
  name: string;
  city: string;
  orderTotal?: any;
  customerSince: any;
}

export interface IOrder {
  customerId: number;
  purchaseNote: string;
  orderItems: IOrderItem[];
}

export interface IOrderItem {
  id: number;
  productName: string;
  itemCost: number;
  itemSize: string;
  itemColor: string;
}
