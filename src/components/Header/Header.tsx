import React from "react";
import { Container, Logo , Button} from "./style";
import carImg from "../../assets/car.svg";
import {Trigger } from "@radix-ui/react-dialog";

function Header() {
  return (
    <Container>
      <Logo>
        MKS <span>Sistemas</span>
      </Logo>
      <Trigger >
        <Button>
        <img src={carImg} alt="" />
        <p>0</p>
        </Button>
       
      </Trigger>
    </Container>
  );
}

export default Header;
