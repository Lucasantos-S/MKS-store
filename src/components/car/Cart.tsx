import * as Dialog from "@radix-ui/react-dialog";
import "../../App.css";
import { Contend, Title, Close } from "./style";
import {
  Section,
  RemoveItem,
  ValueCar,
  Container,
  CartItem,
  Finishing,
} from "./styleProduto";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  decreaseCart,
  addToQuantity,
  totalValue,
} from "../../Store/cartSlice";
import { useEffect } from "react";

interface CartItems {
  id: number;
  name: string;
  description: string;
  photo: string;
  price: string;
  cartQuantity: string;
}

function Cart() {
  const cart = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(totalValue());

  }, [cart]);

  const handleRemoveItem = (cartItem: any) => {
    dispatch(removeFromCart(cartItem));
    console.log(cartItem);
  };
  const handleDecreaseItem = (cartItem: any) => {
    dispatch(decreaseCart(cartItem));
    console.log(cartItem);
  };
  const handleQuantityItem = (cartItem: any) => {
    dispatch(addToQuantity(cartItem));
    console.log(cartItem);
  };
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

          <CartItem>
            {cart.cartItems?.map(
              ({ id, name, photo, price, cartQuantity }: CartItems) => {
                return (
                  <Section key={id}>
                    <RemoveItem onClick={() => handleRemoveItem(id)}>
                      x
                    </RemoveItem>
                    <img src={photo} alt="" />
                    <h3>{name}</h3>
                    <div>
                      <button onClick={() => handleDecreaseItem(id)}>-</button>
                      <span>{cartQuantity}</span>
                      <button onClick={() => handleQuantityItem(id)}>+</button>
                    </div>
                    <p>R${Number(price) * Number(cartQuantity)}</p>
                  </Section>
                );
              }
            )}
          </CartItem>

          <ValueCar>
            <p>Total:</p>
            <span>R${cart.cartTotalAmount}</span>
          </ValueCar>
          <Finishing>Finalizar Compra</Finishing>
        </Container>
      </Contend>
    </>
  );
}

export default Cart;
