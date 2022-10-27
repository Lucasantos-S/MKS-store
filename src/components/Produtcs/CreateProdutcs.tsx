import { useDispatch } from "react-redux";
import { addToCart } from "../../Store/cartSlice";
import { Container, Image, Title, Description } from "./styles";


interface Product {
  id: number;
  name: string;
  description: string;
  photo: string;
  price: string;
}

function CreateProdutcs(props: Product) {
  const dispatch = useDispatch();
  function handleAddToCart(product: any) {
    dispatch(addToCart(product));
  }

  return (
    <Container key={props.id}>
      <Image src={props.photo} alt="" />
      <Title>
        <h2>{props.name}</h2>
        <p>{`R$${Number(props.price)}`}</p>
      </Title>
      <Description>{props.description}</Description>
      <button onClick={() => handleAddToCart(props)} id={`${props.id}`}>
        <img src="/shopping-bag.png" alt="" />
        COMPRAR
      </button>
    </Container>
  );
}

export default CreateProdutcs;
