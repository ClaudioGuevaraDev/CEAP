import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItem,
  ListItemIcon,
  Divider,
  ListItemText,
} from "@mui/material";
import { DrawerHeader } from "./DrawerHeader";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { drawerWidth } from "./utils";
import { useTheme } from "@mui/material/styles";
import SidebarComponent from "./Sidebar";

export default function DrawerComponent({
  open,
  handleDrawerClose,
  handleSection,
}) {
  const theme = useTheme();

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <SidebarComponent handleSection={handleSection} />
    </Drawer>
  );
}
