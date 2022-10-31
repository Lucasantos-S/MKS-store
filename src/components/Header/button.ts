import * as Dialog from "@radix-ui/react-dialog";
import { styled } from "@stitches/react";
export const Trigger = styled(Dialog.Trigger, {
  width: "90px",
  height: "45px",
  borderRadius: "8px",
  border: "none",
  display: " flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  background: "#fff"
});
