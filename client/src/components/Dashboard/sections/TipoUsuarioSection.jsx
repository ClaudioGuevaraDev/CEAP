import { Box, Grid, Stack, Button } from "@mui/material";
import ButtonComponent from "../../form/button_component";
import FormContainer from "../../form/form_container";
import TextFieldComponent from "../../form/text_field_component";
import SectionTitle from "../../section_title";
import MUIDataTable from "mui-datatables";
import { useEffect, useState } from "react";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import TablaBaseLayout from "../tablas_base";

const columns = [
  {
    name: "id",
    label: "ID",
    options: {
      sort: true,
    },
  },
  {
    name: "name",
    label: "Name",
    options: {
      filter: true,
    },
  },
  {
    name: "options",
    label: "Options",
  },
];

const options = {
  selectableRowsHideCheckboxes: true,
};

export default function TipoUsuarioSection() {
  const [dataTable, setDataTable] = useState([]);
  const [roleName, setRoleName] = useState("");
  const [update, setUpdate] = useState(false);
  const [updateId, setUpdateId] = useState(0);

  const getData = async () => {
    const post = {};
    const { data } = await axios.post(
      "http://127.0.0.1:5000/api/rol/get/",
      post
    );

    const new_data = [];
    data.results.map((d) => {
      new_data.push({
        id: d.id,
        name: d.name,
        options: (
          <Stack direction="row" spacing={1}>
            <Button color="warning" onClick={() => updateRol(d)}>
              <EditIcon />
            </Button>
            <Button color="error" onClick={() => deleteRol(d.id)}>
              <DeleteIcon />
            </Button>
          </Stack>
        ),
      });
    });
    setDataTable(new_data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const post = {
      name: roleName,
    };

    if (update === true) {
      const post = {
        query: {
          id: updateId,
        },
        values: {
          name: roleName,
        },
      };

      const { data } = await axios.post(
        "http://127.0.0.1:5000/api/rol/update/",
        post
      );
      setDataTable(
        dataTable.map((d) => {
          if (d.id === data.results.id) {
            return {
              id: data.results.id,
              name: data.results.name,
              options: (
                <Stack direction="row" spacing={1}>
                  <Button
                    color="warning"
                    onClick={() => updateRol(data.results)}
                  >
                    <EditIcon />
                  </Button>
                  <Button
                    color="error"
                    onClick={() => deleteRol(data.results.id)}
                  >
                    <DeleteIcon />
                  </Button>
                </Stack>
              ),
            };
          } else {
            return d;
          }
        })
      );
      setUpdate(false);
      setUpdateId(0);
    } else {
      const { data } = await axios.post(
        "http://127.0.0.1:5000/api/rol/insert/",
        post
      );

      setDataTable(
        dataTable.concat({
          id: data.results.id,
          name: data.results.name,
          options: (
            <Stack direction="row" spacing={1}>
              <Button color="warning" onClick={() => updateRol(data.results)}>
                <EditIcon />
              </Button>
              <Button color="error" onClick={() => deleteRol(data.results.id)}>
                <DeleteIcon />
              </Button>
            </Stack>
          ),
        })
      );
    }

    setRoleName("");
  };

  const deleteRol = async (id) => {
    console.log(id);
    const post = {
      id: id,
    };

    await axios.post("http://127.0.0.1:5000/api/rol/delete/", post);

    getData();
  };

  const updateRol = async (d) => {
    setUpdate(true);
    setRoleName(d.name);
    setUpdateId(d.id);
  };

  return (
    <TablaBaseLayout title={"Tipo de Usuario"} placeholder="Ej: Administrador" api="rol" tableTitle="Tipo de Usuario"/>
    // <Grid container spacing={2}>
    //   <SectionTitle title="Tipo de Usuario" />
    //   <FormContainer>
    //     <form onSubmit={handleSubmit}>
    //       <TextFieldComponent
    //         label="Nombre"
    //         placeholder="Ej: Administrador"
    //         autoFocus={true}
    //         value={roleName}
    //         setValue={setRoleName}
    //       />
    //       <ButtonComponent update={update} />
    //     </form>
    //   </FormContainer>
    //   <Grid item xl={3}>
    //     <Box sx={{ boxShadow: 7, width: "100%" }}>
    //       <MUIDataTable
    //         title={"Tipos de Usuario"}
    //         data={dataTable}
    //         columns={columns}
    //         options={options}
    //       />
    //     </Box>
    //   </Grid>
    // </Grid>
  );
}
