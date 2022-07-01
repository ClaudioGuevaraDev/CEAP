import { Grid, Paper } from "@mui/material";

export default function FormContainer({ children }) {
  return (
    <Grid item xl={2} lg={4} md={6} sm={12} xs={12}>
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          boxShadow: 5,
        }}
      >
        {children}
      </Paper>
    </Grid>
  );
}
