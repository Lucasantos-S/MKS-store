import * as Dialog from "@radix-ui/react-dialog";
import React from "react";
import "../../App.css";
import { Contend, Title, Close } from "./style";
import { Section, ValueCar, Container } from "./styleProduto";

function Car() {
  const [caunt, setCaunt] = React.useState(0);
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
        
          <Section>
            <img src="/apple-watch.png" alt="" />
            <h3>Apple Watch Series 4 GPS</h3>
            <div>
              <button onClick={() => setCaunt(caunt - 1)}>-</button>
              <span>{caunt}</span>
              <button onClick={() => setCaunt(caunt + 1)}>+</button>
            </div>
            <p>R$399</p>
          </Section>

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

export default Car;
