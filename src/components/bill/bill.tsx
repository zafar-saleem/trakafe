import { IData } from "src/interfaces/interfaces";
import * as Styled from "./bill.styled";

export const Bill = ({ ...rest }: IData) => {
  const {
    totalItems,
    grandTotal,
    currency,
  } = rest;

  return (
    <Styled.Bill>
      <h1>Your bill</h1>
      <div>
        <p>
          <span>Items Ordered : </span> <span>{totalItems}</span>
        </p>
        <p>
          <span>Total Price : </span> <span>{grandTotal} {currency}</span>
        </p>
      </div>
    </Styled.Bill>
  )
}
