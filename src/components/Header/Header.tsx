import { useSelector } from "react-redux";
import { Container, Logo, Button } from "./style";
import carImg from "../../assets/car.svg";
import * as Dialog from "@radix-ui/react-dialog";
import { Trigger} from "./button";

function Header() {
  const totalQuality: any = useSelector<unknown | any>(
    (item) => item.cart.cartTotalQuality
  );
  return (
    <Container>
      <Logo>
        MKS <span>Sistemas</span>
      </Logo>
      <Trigger>
        <Button>
          <img src={carImg} alt="" />
          <p>{totalQuality}</p>
        </Button>
      </Trigger>
    </Container>
  );
}

export default Header;
