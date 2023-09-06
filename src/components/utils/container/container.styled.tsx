import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100dvh;
  margin: auto;
  max-width: ${props => props.theme.breakpoints.m};
`;
