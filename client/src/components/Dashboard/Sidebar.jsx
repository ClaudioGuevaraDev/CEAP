import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import BuildIcon from "@mui/icons-material/Build";
import ScienceIcon from "@mui/icons-material/Science";
import BiotechIcon from "@mui/icons-material/Biotech";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useState } from "react";
import useGetInfoUser from "../../hooks/auth/useGetInfoUser";

export default function SidebarComponent({ handleSection }) {
  const [openConfiguration, setOpenConfiguration] = useState(false);
  const { userInfo } = useGetInfoUser();

  return (
    <List>
      <ListItemButton onClick={() => handleSection("equipos")}>
        <ListItemIcon>
          <BiotechIcon />
        </ListItemIcon>
        <ListItemText primary="Equipos" />
      </ListItemButton>
      <ListItemButton onClick={() => handleSection("reactivos")}>
        <ListItemIcon>
          <ScienceIcon />
        </ListItemIcon>
        <ListItemText primary="Reactivos" />
      </ListItemButton>
      <ListItemButton onClick={() => handleSection("solicitud")}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Solicitud" />
      </ListItemButton>
      {userInfo.rol === "administrador" && (
        <>
          <ListItemButton
            onClick={() => setOpenConfiguration(!openConfiguration)}
          >
            <ListItemIcon>
              <BuildIcon />
            </ListItemIcon>
            <ListItemText primary="Configuraciones" />
            {openConfiguration ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openConfiguration} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => handleSection("tipo_usuario")}
              >
                <ListItemIcon>
                  <LabelImportantIcon />
                </ListItemIcon>
                <ListItemText primary="Tipos de Usuario" />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => handleSection("marca")}
              >
                <ListItemIcon>
                  <LabelImportantIcon />
                </ListItemIcon>
                <ListItemText primary="Marcas" />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => handleSection("proyecto")}
              >
                <ListItemIcon>
                  <LabelImportantIcon />
                </ListItemIcon>
                <ListItemText primary="Proyectos" />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => handleSection("proveedor")}
              >
                <ListItemIcon>
                  <LabelImportantIcon />
                </ListItemIcon>
                <ListItemText primary="Proveedores" />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => handleSection("estado")}
              >
                <ListItemIcon>
                  <LabelImportantIcon />
                </ListItemIcon>
                <ListItemText primary="Estados" />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => handleSection("tipo_reactivo")}
              >
                <ListItemIcon>
                  <LabelImportantIcon />
                </ListItemIcon>
                <ListItemText primary="Tipo de Reactivos" />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => handleSection("unidad_medida")}
              >
                <ListItemIcon>
                  <LabelImportantIcon />
                </ListItemIcon>
                <ListItemText primary="Unidades de Medida" />
              </ListItemButton>
            </List>
          </Collapse>
        </>
      )}
    </List>
  );
}
