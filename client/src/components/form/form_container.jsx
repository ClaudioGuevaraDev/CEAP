import { Grid, Paper } from "@mui/material";

export default function FormContainer({ children }) {
  return (
    <Grid item xl={2}>
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
