import {useSelector} from "react-redux";
import { Container, Logo , Button} from "./style";
import carImg from "../../assets/car.svg";
import {Trigger } from "@radix-ui/react-dialog";



function Header() {
  const {cartTotalQuality} = useSelector(state => state.cart)
  return (
    <Container>""
      <Logo>
        MKS <span>Sistemas</span>
      </Logo>
      <Trigger >
        <Button>
        <img src={carImg} alt="" />
        <p>{cartTotalQuality}</p>
        </Button>
       
      </Trigger>
    </Container>
  );
}

export default Header;
