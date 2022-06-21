import { Main } from "./Main";
import { DrawerHeader } from "./DrawerHeader";
import { Typography } from "@mui/material";

export default function MainComponent({ open, section }) {
  return (
    <Main open={open}>
      <DrawerHeader />
      {section === "tipo_usuario" && <Typography>Hello World</Typography>}
    </Main>
  );
}
