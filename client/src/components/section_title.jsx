import { Grid, Typography } from "@mui/material";

export default function SectionTitle({ title }) {
  return (
    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
      <Typography variant="h4" fontWeight="bold">
        {title}
      </Typography>
    </Grid>
  );
}
