import { Button } from "@mui/material";

export default function ButtonComponent({ update }) {
  return (
    <Button type="submit" color="success" variant="contained" fullWidth>
      {update ? "EDITAR" : "CREAR"}
    </Button>
  );
}
