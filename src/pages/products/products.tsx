import { Bill, Container, Counter, Item, Remove } from "src/components";
import { Grid } from "src/components";
import { useTrakafe } from "./hooks";
import { Props } from "./interfaces";

export const Products = () => {
  const {
    addItem,
    removeItem,
    items,
  } = useTrakafe();

  return (
    <Container>
      <Grid>
        <div>
          {
            // @ts-ignore
            items.data.map((item: Props) => (
              <Item key={item.name} data={item} currency={item.currency} addItem={addItem}>
                <Remove top={-105} left={-20} id={item.id} removeItem={removeItem}>-</Remove>
                <Counter top={-20} right={-20}>{item.numberOfOrders}</Counter>
              </Item>
            ))
          }
        </div>
        <>
          <Bill {...items} />
        </>
      </Grid>
    </Container>
  )
}
