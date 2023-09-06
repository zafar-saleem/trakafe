import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  flex: 1 1 auto;
`;

export const Item = styled.button`
  ${props => ({...props.theme.typography.button})};
  display: flex;
  width: 100%;
  padding: ${props => props.theme.tokens.gutter.gutter100};
  margin: ${props => props.theme.tokens.gutter.gutter200} 0;
  background-color: ${props => props.theme.palette.branding.color100};
  border: 1px solid ${props => props.theme.palette.branding.color100};
  color: #ffffff;

  .item-name {
    flex: 2 1 auto;
    text-align: left;
  }
`;
