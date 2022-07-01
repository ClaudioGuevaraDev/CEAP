import { Grid } from "@mui/material";
import React from "react";
import { useState } from "react";
import useGetTableBase from "../../../hooks/tablas_base/useGetTableBase";
import DatePickerComponent from "../../form/DatePickerComponent";
import FormContainer from "../../form/form_container";
import SelectComponent from "../../form/SelectComponent";
import TextFieldComponent from "../../form/text_field_component";
import SectionTitle from "../../section_title";

export default function EquiposSection() {
  const [equipmentName, setEquipmentName] = useState("");
  const [serial, setSerial] = useState("");
  const [marcas, setMarcas] = useState([]);
  const [valueMarca, setValueMarca] = useState("");
  const [proveedores, setProveedores] = useState([]);
  const [valueProveedor, setValueProveedor] = useState("");
  const [nextMaintanance, setNextMaintanance] = useState("2014-08-18");
  const [status, setStatus] = useState([]);
  const [valueStatus, setValueStatus] = useState("");

  useGetTableBase({
    api: "brand",
    name: "marcas",
    setOptions: setMarcas,
    setValueOption: setValueMarca,
  });

  useGetTableBase({
    api: "provider",
    name: "proveedores",
    setOptions: setProveedores,
    setValueOption: setValueProveedor,
  });

  useGetTableBase({
    api: "status",
    name: "estados",
    setOptions: setStatus,
    setValueOption: setValueStatus,
  });

  return (
    <Grid container spacing={2}>
      <SectionTitle title="Equipos de Laboratorio" />

      <FormContainer>
        <form>
          <TextFieldComponent
            autoFocus={true}
            label="Nombre"
            placeholder="Nombre"
            value={equipmentName}
            setValue={setEquipmentName}
          />
          <TextFieldComponent
            autoFocus={false}
            label="Serial"
            placeholder="Serial"
            value={serial}
            setValue={setSerial}
          />
          <SelectComponent
            input_label_id="marca"
            input_label_title="Marca"
            label="Marca"
            options={marcas}
            setValue={setValueMarca}
            value={valueMarca}
          />
          <SelectComponent
            input_label_id="proveedor"
            input_label_title="Proveedor"
            label="Proveedor"
            options={proveedores}
            setValue={setValueProveedor}
            value={valueProveedor}
          />
          <DatePickerComponent
            label="Siguiente Mantención"
            setValue={setNextMaintanance}
            value={nextMaintanance}
          />
          <SelectComponent
            input_label_id="status"
            input_label_title="Estado"
            label="Estado"
            options={status}
            setValue={setValueStatus}
            value={valueStatus}
          />
        </form>
      </FormContainer>
    </Grid>
  );
}
