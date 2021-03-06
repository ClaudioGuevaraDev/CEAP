// Componente para las tablas que tienen un id y un name
import { Box, Grid } from "@mui/material";
import { useState } from "react";
import useGetDataTableBase from "../../../hooks/tablas_base/useGetDataTableBase";
import ButtonComponent from "../../form/button_component";
import FormContainer from "../../form/form_container";
import TextFieldComponent from "../../form/text_field_component";
import SectionTitle from "../../section_title";
import MUIDataTable from "mui-datatables";
import useHandleFormTablaBase from "../../../hooks/tablas_base/useHandleFormTablaBase";

const columns = [
  {
    name: "name",
    label: "Nombre",
    options: {
      filter: true,
    },
  },
  {
    name: "options",
    label: "Opciones",
  },
];

const options = {
  selectableRowsHideCheckboxes: true,
};

export default function TablaBaseLayout({
  title,
  placeholder,
  tableTitle,
  api,
  errorMessage,
}) {
  const [nameInput, setNameInput] = useState("");
  const [update, setUpdate] = useState(false);
  const [updateId, setUpdateId] = useState(0);

  const handleUpdate = async (d) => {
    setUpdate(true);
    setNameInput(d.name);
    setUpdateId(d.id);
  };

  const { dataTable, setDataTable, handleDelete } = useGetDataTableBase({
    api,
    handleUpdate,
    errorMessage,
  });
  const { handleSubmit } = useHandleFormTablaBase({
    api,
    nameInput,
    setDataTable,
    updateId,
    setNameInput,
    setUpdate,
    setUpdateId,
    update,
    dataTable,
    handleDelete,
    handleUpdate,
    errorMessage,
  });

  return (
    <Grid container spacing={2}>
      <SectionTitle title={title} />
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <TextFieldComponent
            label="Nombre"
            placeholder={placeholder}
            autoFocus={true}
            value={nameInput}
            setValue={setNameInput}
          />
          <ButtonComponent update={update} />
        </form>
      </FormContainer>
      {dataTable.length > 0 && (
        <Grid item xl={5} lg={8} md={10} sm={12} xs={12}>
          <Box sx={{ boxShadow: 7, width: "100%" }}>
            <MUIDataTable
              title={tableTitle}
              data={dataTable}
              columns={columns}
              options={options}
            />
          </Box>
        </Grid>
      )}
    </Grid>
  );
}
