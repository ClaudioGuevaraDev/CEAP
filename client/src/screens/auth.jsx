import {
  Avatar,
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import useAuthSection from "../hooks/auth/useAuthSection";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

export default function AuthScreen() {
  const { authSection, handleAuthSection } = useAuthSection();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const post = {
        email: user.email,
        password: user.password,
      };
      const { data } = await axios.post(
        "http://127.0.0.1:5000/api/login/",
        post
      );

      const { description, token } = data;

      if (description === "Login success") {
        localStorage.setItem("token", token);
        navigate("/dashboard");
      } else {
        toast.error(description);
      }
    } catch (error) {
      toast.error("Error al iniciar sesión.");
    }
  };

  return (
    <Grid
      container
      width="100%"
      height="100%"
      minHeight="100vh"
      maxHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xl={2} textAlign="center" boxShadow={15}>
        <Paper
          sx={{
            p: 3,
            borderRadius: 1,
          }}
        >
          <Avatar sx={{ marginX: "auto", bgcolor: "secondary.main" }}>
            {authSection === "login" ? (
              <LockOutlinedIcon />
            ) : (
              <PersonAddAltIcon />
            )}
          </Avatar>
          <Typography component="h1" variant="h5" marginTop={2}>
            {authSection === "login" ? "Iniciar Sesión" : "Registrarse"}
          </Typography>
          <form onSubmit={handleSubmit}>
            {authSection === "register" && (
              <TextField
                required
                margin="normal"
                fullWidth
                label="Nombre Completo"
                focused
                autoFocus
                placeholder="Bárbara Arévalo"
                color="success"
                type="button"
              />
            )}
            <TextField
              fullWidth
              label="Correo Electrónico"
              focused
              margin="normal"
              placeholder="example@gmail.com"
              color="success"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <TextField
              fullWidth
              label="Contraseña"
              type="password"
              margin="normal"
              placeholder="********"
              focused
              color="success"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            {authSection === "register" && (
              <TextField
                required
                fullWidth
                label="Confirmar Contraseña"
                type="password"
                margin="normal"
                placeholder="********"
                focused
                color="success"
              />
            )}
            <Typography
              textAlign="center"
              margin="normal"
              variant="subtitle1"
              fontSize={18}
              sx={{
                ":hover": {
                  cursor: "pointer",
                  textDecorationLine: "underline",
                },
              }}
              onClick={handleAuthSection}
            >
              {authSection === "login" && (
                <span>¿No tienes una cuenta registrada?</span>
              )}
              {authSection === "register" && (
                <span>¿Ya tienes una cuenta registrada?</span>
              )}
            </Typography>

            <Button
              fullWidth
              variant="contained"
              size="large"
              sx={{ mt: 2 }}
              color="success"
              type="submit"
            >
              {authSection === "login" ? "Iniciar Sesión" : "Registrarse"}
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
}
