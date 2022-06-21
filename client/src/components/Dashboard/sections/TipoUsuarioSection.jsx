import { Box, Grid } from "@mui/material";
import ButtonComponent from "../../form/button_component";
import FormContainer from "../../form/form_container";
import TextFieldComponent from "../../form/text_field_component";
import SectionTitle from "../../section_title";
import MUIDataTable from "mui-datatables";
import { useState } from "react";

const columns = [
  {
    name: "name",
    label: "Name",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "company",
    label: "Company",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "city",
    label: "City",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "state",
    label: "State",
    options: {
      filter: true,
      sort: false,
    },
  },
];

const data = [
  { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
  { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
  { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
  { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
];

const options = {
  filterType: "checkbox",
};

export default function TipoUsuarioSection() {
  const [roleName, setRoleName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(roleName);
  };

  return (
    <Grid container spacing={2}>
      <SectionTitle title="Tipo de Usuario" />
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <TextFieldComponent
            label="Nombre"
            placeholder="Ej: Administrador"
            autoFocus={true}
            value={roleName}
            setValue={setRoleName}
          />
          <ButtonComponent />
        </form>
      </FormContainer>
      <Grid item xl={12}>
        <Box sx={{ boxShadow: 7, width: "100%" }}>
          <MUIDataTable
            title={"Employee List"}
            data={data}
            columns={columns}
            options={options}
          />
        </Box>
      </Grid>
    </Grid>
  );
}
