import { Main } from "./Main";
import { DrawerHeader } from "./DrawerHeader";

// Sections
import TipoUsuarioSection from "./sections/TipoUsuarioSection";

export default function MainComponent({ open, section }) {
  return (
    <Main open={open}>
      <DrawerHeader />
      {section === "tipo_usuario" && <TipoUsuarioSection />}
    </Main>
  );
}
