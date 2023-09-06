import { styled } from "styled-components";
import { Props } from "./interfaces";

export const Container = styled.div`
  position: relative;
`;

export const Remove = styled.button<Props>`
  position: absolute;
  top: ${props => props.top}px;
  right: ${props => props.right}px;
  bottom: ${props => props.bottom}px;
  left: ${props => props.left}px;
  border-radius: 100px;
  padding: 10px 15px;
  border: 3px solid ${props => props.theme.palette.supporting.color600};
  background-color: ${props => props.theme.palette.supporting.color600};
  z-index: 1;
  color: #ffffff;
`;
