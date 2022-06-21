import Box from "@mui/material/Box";
import DrawerComponent from "../components/Dashboard/Drawer";
import NavbarComponent from "../components/Dashboard/Navbar";
import MainComponent from "../components/Dashboard/MainComponent";
import useHandleDrawer from "../hooks/dashboard/useHandleDrawer";

export default function DashboardScreen() {
  const { openDrawer, handleDrawerClose, handleDrawerOpen } = useHandleDrawer();

  return (
    <Box sx={{ display: "flex" }}>
      <NavbarComponent open={openDrawer} handleDrawerOpen={handleDrawerOpen} />
      <DrawerComponent
        open={openDrawer}
        handleDrawerClose={handleDrawerClose}
      />
      <MainComponent open={openDrawer} />
    </Box>
  );
}
