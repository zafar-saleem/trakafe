import * as Styled from "./item.styled";
import { Props } from "./interfaces";

export const Item = ({ children, ...rest }: Props) => {

  const {
    addItem,
  } = rest;

  return (
    <Styled.Container>
      <Styled.Item key={rest.key} onClick={() => addItem(rest.data.id)}>
        <span className="item-name">{rest.data.name}</span>
        <span>{rest.data.price} {rest.currency}</span>
      </Styled.Item>
      {children}
    </Styled.Container>
  )
}
