import { AppBar } from "./AppBar";
import {
  Toolbar,
  IconButton,
  Typography,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  ListItemIcon,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DefaultProfile from '../../assets/default-profile.png'
import { useState } from "react";
import Logout from "@mui/icons-material/Logout";
import { useNavigate } from 'react-router-dom'
import useGetInfoUser from "../../hooks/auth/useGetInfoUser";

export default function NavbarComponent({ open, handleDrawerOpen }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate()
  const { userInfo } = useGetInfoUser()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    localStorage.removeItem("token")
    navigate("/")
  }

  return (
    <>
      <AppBar
        position="fixed"
        open={open}
        sx={{ backgroundColor: "success.main" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Centro de Estudios de en Alimentos Procesados
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton onClick={handleClick} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src={DefaultProfile} />
            </IconButton>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem>
                <Typography>{userInfo.name}</Typography>
              </MenuItem>
              <Divider />
              <MenuItem onClick={logout}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Cerrar Sesi??n
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
