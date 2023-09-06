import * as Styled from "./grid.styled";
import { Props } from "./interfaces";

export const Grid = ({ children }: Props) => {
  return (
    <Styled.Grid>{children}</Styled.Grid>
  )
}
