import { Props } from "./interfaces";
import * as Styled from "./counter.styled";

export const Counter = ({ children, ...rest }: Props) => {
  const {
    removeItem,
  } = rest;

  return (
    <Styled.Counter onClick={() => removeItem} {...rest}>{children}</Styled.Counter>
  )
}
