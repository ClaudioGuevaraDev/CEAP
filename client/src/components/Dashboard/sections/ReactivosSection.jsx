import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import FormContainer from "../../form/form_container";
import TextFieldComponent from "../../form/text_field_component";
import SectionTitle from "../../section_title";
import DatePickerComponent from "../../form/DatePickerComponent";
import { useEffect } from "react";
import axios from "axios";
import SelectComponent from "../../form/SelectComponent";
import useGetTableBase from "../../../hooks/tablas_base/useGetTableBase";

export default function ReactivosSection() {
  const [reactiveName, setReactiveName] = useState("");
  const [cas, setCas] = useState("");
  const [expirationoDate, setExpirationDate] = useState("2014-08-18");
  const [actualAmount, setActualAmount] = useState(0);
  const [unidadesMedida, setUnidadesMedida] = useState([]);
  const [valueUnidadMedida, setValueUnidadMedida] = useState("");
  const [tiposReactivos, setTiposReactivos] = useState([]);
  const [valueTipoReactivo, setValueTipoReactivo] = useState("");
  const [buyAlarm, setBuyAlarm] = useState("50");

  useGetTableBase({
    api: "measurement_unit",
    setOptions: setUnidadesMedida,
    setValueOption: setValueUnidadMedida,
    name: "unidades de medida",
  });

  useGetTableBase({
    api: "reactive_type",
    setOptions: setTiposReactivos,
    setValueOption: setValueTipoReactivo,
    name: "tipos de reactivos",
  });

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
          <Grid container spacing={2}>
            <Grid item xl={6}>
              <TextFieldComponent
                label="Cantidad"
                value={actualAmount}
                setValue={setActualAmount}
              />
            </Grid>
            <Grid item xl={6}>
              <SelectComponent
                input_label_id="unidad-medida"
                input_label_title="Unidad de Medida"
                label="Unidad de Medida"
                options={unidadesMedida}
                value={valueUnidadMedida}
                setValue={setValueUnidadMedida}
              />
            </Grid>
          </Grid>
          <SelectComponent
            input_label_id="tipo-reactivo"
            input_label_title="Tipo de Reactivo"
            label="Tipo de Reactivo"
            options={tiposReactivos}
            value={valueTipoReactivo}
            setValue={setValueTipoReactivo}
          />
          <TextFieldComponent
            autoFocus={false}
            label="Valor Crítico"
            placeholder="Valor crítico"
            setValue={setBuyAlarm}
            value={buyAlarm}
          />
        </form>
      </FormContainer>
    </Grid>
  );
}
