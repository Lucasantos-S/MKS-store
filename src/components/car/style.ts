// import styled from 'styled-components';
import { styled } from "@stitches/react";
import * as Dialog from "@radix-ui/react-dialog";


export const Contend = styled(Dialog.Content, {
  position: "fixed",
  width: "500px",
  height: "100%",
  zIndex: "100",
  right: "0",
  top: "0",
  boxShadow: "-5px 0px 6px rgba(0, 0, 0, 0.13)",
  background: "#0F52BA",
  "& div": {
    position: "relative",
  },
  
});
export const Title = styled(Dialog.Title, {
  width: "180px",
  margin: "36px 0px 0px 47px",
  fontWeight: "700",
  fontSize: "27px",
  lineHeight: "33px",
  color: "#fff",
});
export const Close = styled(Dialog.Close, {
  width: "30px",
  height: "30px",
  position: "absolute",
  right: "0",
  top: "20px",
  borderRadius: "50%",
  background: "#000",
  color: "#fff",
  cursor: "pointer",
  marginRight:'22px'
});

  