interface IData {
  name: string;
  price: number;
  currency: string;
  id: number;
  total: number;
}

export interface Props {
  data: IData;
  key: string;
  children: React.ReactNode;
  addItem: (arg: number) => void;
  currency?: string;
}
