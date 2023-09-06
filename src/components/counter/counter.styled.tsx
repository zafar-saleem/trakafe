import { styled } from "styled-components";
import { Props } from "./interfaces";

export const Counter = styled.div<Props>`
  position: absolute;
  right: ${props => props.right}px;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  bottom: ${props => props.bottom}px;
  border-radius: 10rem;
  padding: 10px 15px;
  color: #ffffff;
  border: 1px solid ${props => props.theme.palette.supporting.color300};
  background-color: ${props => props.theme.palette.supporting.color300};
`;
