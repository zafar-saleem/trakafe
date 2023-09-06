import * as Styled from "./container.styled";
import { Props } from "./interfaces";

export const Container = ({ children }: Props) => {
  return (
    <Styled.Container>{children}</Styled.Container>
  )
}
