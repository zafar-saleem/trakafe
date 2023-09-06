import * as Styled from "./remove.styled";
import { Props } from "./interfaces";

export const Remove = ({ children, ...rest }: Props) => {
  const {
    removeItem,
    id,
  } = rest;

  return (
    <Styled.Container>
      <Styled.Remove {...rest} onClick={() => removeItem(id)}>{children}</Styled.Remove>
    </Styled.Container>
  )
}