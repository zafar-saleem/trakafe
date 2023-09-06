export interface IItems {
  id: number;
  name: string;
  price: number;
  numberOfOrders: number;
  total: number;
}

export interface IData {
  currency: string;
  grandTotal: number;
  totalItems: number;
  data: IItems[];
}
