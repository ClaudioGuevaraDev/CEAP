import { Main } from "./Main";
import { DrawerHeader } from "./DrawerHeader";

// Sections
import TipoUsuarioSection from "./sections/TipoUsuarioSection";
import MarcaSection from "./sections/MarcaSection";
import ProyectoSection from "./sections/ProyectoSection";
import ProveedorSection from "./sections/ProveedorSection";
import EstadoSection from "./sections/EstadoSection";
import TipoReactivoSection from "./sections/TipoReactivoSection";
import ReactivosSection from "./sections/ReactivosSection";
import UnidadMedidaSection from "./sections/UnidadMedidaSection";
import EquiposSection from "./sections/EquiposSection";
import RequestSection from "./sections/RequestSection";

export default function MainComponent({ open, section }) {
  return (
    <Main open={open}>
      <DrawerHeader />
      {section === "solicitud" && <RequestSection/>}
      {section === "tipo_usuario" && <TipoUsuarioSection />}
      {section === "marca" && <MarcaSection/>}
      {section === "proyecto" && <ProyectoSection/>}
      {section === "proveedor" && <ProveedorSection/>}
      {section === "estado" && <EstadoSection/>}
      {section === "tipo_reactivo" && <TipoReactivoSection/>}
      {section === "unidad_medida" && <UnidadMedidaSection/>}
      {section === "reactivos" && <ReactivosSection/>}
      {section === "equipos" && <EquiposSection/>}
    </Main>
  );
}
