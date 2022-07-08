import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Toaster } from "react-hot-toast";

import Background from "./assets/fondo.jpg";

// Screens
import AuthScreen from "./screens/auth";
import DashboardScreen from "./screens/dashboard";
import { Box, CssBaseline } from "@mui/material";
import { useEffect } from "react";

export default function App() {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <>
        <CssBaseline />
        <Box
          width="100%"
          height="100%"
          minHeight="100vh"
          sx={{
            backgroundImage: `url(${Background})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<AuthScreen />} />
              <Route path="/dashboard" element={<DashboardScreen />} />
            </Routes>
          </BrowserRouter>
        </Box>
        <Toaster />
      </>
    </ThemeProvider>
  );
}
