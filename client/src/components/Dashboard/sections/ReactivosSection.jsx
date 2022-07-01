import { Grid } from "@mui/material";
import { useState } from "react";
import FormContainer from "../../form/form_container";
import TextFieldComponent from "../../form/text_field_component";
import SectionTitle from "../../section_title";
import DatePickerComponent from "../../form/DatePickerComponent";

export default function ReactivosSection() {
  const [reactiveName, setReactiveName] = useState("");
  const [cas, setCas] = useState("");
  const [expirationoDate, setExpirationDate] = useState("2014-08-18");

  return (
    <Grid container spacing={2}>
      <SectionTitle title="Reactivos" />

      <FormContainer>
        <form>
          <TextFieldComponent
            label="Nombre"
            autoFocus={true}
            placeholder="Nombre del Reactivo"
            value={reactiveName}
            setValue={setReactiveName}
          />
          <TextFieldComponent
            label="CAS"
            autoFocus={false}
            placeholder="CAS"
            value={cas}
            setValue={setCas}
          />
          <DatePickerComponent
            label="Fecha de Expiración"
            value={expirationoDate}
            setValue={setExpirationDate}
          />
        </form>
      </FormContainer>
    </Grid>
  );
}
