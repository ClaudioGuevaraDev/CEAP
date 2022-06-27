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
import { Link } from "react-router-dom";

export default function AuthScreen() {
  const { authSection, handleAuthSection } = useAuthSection();

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
          <Box component="form" sx={{ marginTop: 1 }}>
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
              />
            )}
            <TextField
              required
              fullWidth
              label="Correo Electrónico"
              type="email"
              margin="normal"
              focused
              placeholder="example@gmail.com"
              color="success"
            />
            <TextField
              required
              fullWidth
              label="Contraseña"
              type="password"
              margin="normal"
              placeholder="********"
              focused
              color="success"
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

            <Link to="/dashboard">
              <Button
                fullWidth
                variant="contained"
                size="large"
                sx={{ mt: 2 }}
                color="success"
              >
                {authSection === "login" ? "Iniciar Sesión" : "Registrarse"}
              </Button>
            </Link>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}
