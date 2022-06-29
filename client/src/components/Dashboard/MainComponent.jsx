import { Main } from "./Main";
import { DrawerHeader } from "./DrawerHeader";

// Sections
import TipoUsuarioSection from "./sections/TipoUsuarioSection";
import MarcaSection from "./sections/MarcaSection";
import ProyectoSection from "./sections/ProyectoSection";
import ProveedorSection from "./sections/ProveedorSection";
import EstadoSection from "./sections/EstadoSection";
import TipoReactivoSection from "./sections/TipoReactivoSection";

export default function MainComponent({ open, section }) {
  return (
    <Main open={open}>
      <DrawerHeader />
      {section === "tipo_usuario" && <TipoUsuarioSection />}
      {section === "marca" && <MarcaSection/>}
      {section === "proyecto" && <ProyectoSection/>}
      {section === "proveedor" && <ProveedorSection/>}
      {section === "estado" && <EstadoSection/>}
      {section === "tipo_reactivo" && <TipoReactivoSection/>}
    </Main>
  );
}
