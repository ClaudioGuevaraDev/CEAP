import jwt_decode from "jwt-decode";
import {
  Button,
  Checkbox,
  FormControl,
  Grid,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
} from "@mui/material";
import useGetEquipos from "../../../hooks/request/useGetEquipos";
import useGetProjects from "../../../hooks/request/useGetProjects";
import FormContainer from "../../form/form_container";
import SelectComponent from "../../form/SelectComponent";
import SectionTitle from "../../section_title";
import OutlinedInput from "@mui/material/OutlinedInput";
import useGetReactivos from "../../../hooks/request/useGetReactivos";
import DatePickerComponent from "../../form/DatePickerComponent";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import useGetRequest from "../../../hooks/request/useGetRequest";
import DataTable from "../../DataTable";

const columns = [
  {
    name: "user_full_name",
    label: "Investigador",
  },
  {
    name: "request_date",
    label: "Fecha del pedido",
  },
  {
    name: "use_date",
    label: "Fecha solicitada",
  },
  {
    name: "project_name",
    label: "Proyecto",
  },
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function RequestSection() {
  const { projects, projectValue, setProjectValue } = useGetProjects();
  const { equipos, equipoValue, handleChangeEquipo } = useGetEquipos();
  const { reactivos, reactivoValue, handleChangeReactivo } = useGetReactivos();
  const [useDate, setUseDate] = useState("2014-08-18");
  const { requests, setRequests } = useGetRequest();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    const decoded = jwt_decode(token);
    const { id } = decoded;

    const equipments = equipoValue.map((e) => {
      return {
        id: e,
      };
    });

    const reagents = reactivoValue.map((r) => {
      return {
        id: r,
      };
    });
    
    const post = {
      id_user: id,
      id_project: projectValue,
      use_date: useDate,
      reagents: reagents,
      equipments: equipments,
    };

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/request/create_request/",
        post
      );
      const { results } = data;
      setRequests(requests.concat(results));
    } catch (error) {
      toast.error("Error al hacer la solicitud");
    }
  };

  return (
    <Grid container spacing={2}>
      <SectionTitle title="Solicitudes" />

      <FormContainer>
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel id="equipo-multiple-label">Equipos</InputLabel>
            <Select
              labelId="equipo-multiple-label"
              multiple
              value={equipoValue}
              onChange={handleChangeEquipo}
              input={<OutlinedInput label="Equipo" />}
              renderValue={(selected) => {
                const new_selected = [];
                equipos.map((e) => {
                  if (selected.includes(e.id)) {
                    new_selected.push(e.name);
                  }
                });

                return new_selected.join(", ");
              }}
              MenuProps={MenuProps}
            >
              {equipos.map((e) => (
                <MenuItem key={e.id} value={e.id}>
                  <Checkbox checked={equipoValue.indexOf(e.id) > -1} />
                  <ListItemText primary={e.name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel id="reactivo-multiple-label">Reactivos</InputLabel>
            <Select
              labelId="reactivo-multiple-label"
              multiple
              value={reactivoValue}
              onChange={handleChangeReactivo}
              input={<OutlinedInput label="Reactivo" />}
              renderValue={(selected) => {
                const new_selected = [];
                reactivos.map((e) => {
                  if (selected.includes(e.id)) {
                    new_selected.push(e.name);
                  }
                });

                return new_selected.join(", ");
              }}
              MenuProps={MenuProps}
            >
              {reactivos.map((e) => (
                <MenuItem key={e.id} value={e.id}>
                  <Checkbox checked={equipoValue.indexOf(e.id) > -1} />
                  <ListItemText primary={e.name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <SelectComponent
            options={projects}
            input_label_id="projects"
            input_label_title="Proyecto"
            label="Proyecto"
            setValue={setProjectValue}
            value={projectValue}
          />

          <DatePickerComponent
            label="Fecha de Uso"
            value={useDate}
            setValue={setUseDate}
          />

          <Button
            type="submit"
            color="success"
            variant="contained"
            sx={{ marginTop: 2 }}
            fullWidth
          >
            Solicitar
          </Button>
        </form>
      </FormContainer>

      <Grid item xl={9}>
        <DataTable
          title="Lista de Solicitudes"
          data={requests}
          columns={columns}
        />
      </Grid>
    </Grid>
  );
}
