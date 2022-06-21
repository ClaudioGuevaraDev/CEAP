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
import { useState } from "react";

export default function SidebarComponent({ handleSection }) {
  const [openConfiguration, setOpenConfiguration] = useState(false);

  return (
    <List>
      <ListItemButton onClick={() => setOpenConfiguration(!openConfiguration)}>
        <ListItemIcon>
          <BuildIcon />
        </ListItemIcon>
        <ListItemText primary="Configuraciones" />
        {openConfiguration ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openConfiguration} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} onClick={() => handleSection("tipo_usuario")}>
            <ListItemIcon>
              <LabelImportantIcon />
            </ListItemIcon>
            <ListItemText primary="Tipo de Usuario" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
