import * as Dialog from "@radix-ui/react-dialog";
import "../../App.css";
import { Contend, Title, Close } from "./style";
import { Section, ValueCar, Container } from "./styleProduto";

import { useSelector } from "react-redux";

interface CartItems {
  id: number;
  name: string;
  description: string;
  photo: string;
  price: string;
}

function Cart() {
  const cart = useSelector((state: any) => state.cart);
  console.log(cart);
  
  return (
    <>
      <Dialog.Portal />
      <Dialog.Overlay />
      <Contend>
        <Container>
          <div>
            <Title>Carrinho de compras</Title>
            <Close>X</Close>
          </div>

          {cart.cartItems?.map(({ id, name, photo,price }:CartItems ) => {
            return (
              <Section key={id}>
                <img src={photo} alt="" />
                <h3>{name}</h3>
                <div>
                  <button>-</button>
                  <span></span>
                  <button>+</button>
                </div>
                <p>R${Number(price)}</p>
              </Section>
            );
          })}

          <ValueCar>
            <p>Total:</p>
            <p>R$798</p>
          </ValueCar>
          <button>Finalizar Compra</button>
        </Container>
      </Contend>
    </>
  );
}

export default Cart;
