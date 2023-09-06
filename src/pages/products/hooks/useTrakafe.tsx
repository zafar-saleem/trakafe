import React from "react";
import { fakeData } from "../fakeData";
import { IData, IItems } from "../../../interfaces/interfaces";

export const useTrakafe = () => {
  const [items, updateItems] = React.useState<IData>(fakeData);

  const addItem = React.useCallback((id: number) => {
    const updatedStateValues = items.data.map((item: IItems) => {
      if (item.id === id) {
        item.numberOfOrders++;
        item.total = item.total + item.price;
        items.totalItems++;
        items.grandTotal = items.grandTotal + item.price;
        return item;
      }
      return item;
    });

    updateItems({
      ...fakeData,
      grandTotal: items.grandTotal,
      totalItems: items.totalItems,
      data: updatedStateValues,
    });
  }, [items]);

  const removeItem = React.useCallback((id: number) => {
    const updatedStateValues = items.data.map((item: IItems) => {
      if (item.id === id && item.total > 0) {
        item.numberOfOrders--;
        item.total = item.total - item.price;
        items.totalItems--;
        items.grandTotal = items.grandTotal - item.price;
        return item;
      }
      return item;
    });

    updateItems({
      ...fakeData,
      grandTotal: items.grandTotal,
      totalItems: items.totalItems,
      data: updatedStateValues,
    });
  }, [items]);
  
  return {
    addItem,
    removeItem,
    items,
  }
}