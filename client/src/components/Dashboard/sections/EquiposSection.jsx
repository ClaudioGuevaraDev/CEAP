import { Button, Grid, Stack } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import useGetTableBase from "../../../hooks/tablas_base/useGetTableBase";
import DatePickerComponent from "../../form/DatePickerComponent";
import FormContainer from "../../form/form_container";
import SelectComponent from "../../form/SelectComponent";
import TextFieldComponent from "../../form/text_field_component";
import SectionTitle from "../../section_title";
import DataTable from "../../DataTable";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import useGetData from "../../../hooks/dashboard/useGetData";

const columns = [
  {
    name: "name",
    label: "Nombre",
  },
  {
    name: "serial",
    label: "Serial",
  },
  {
    name: "brand_name",
    label: "Marca",
  },
  {
    name: "provider_name",
    label: "Proveedor",
  },
  {
    name: "next_maintanance",
    label: "Fecha de Mantención",
  },
  {
    name: "status_name",
    label: "Estado",
  },
  {
    name: "options",
    label: "Opciones",
  },
];

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
  const [update, setUpdate] = useState(false);
  const [updatedID, setUpdatedID] = useState("");

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

  const handleUpdate = (data) => {
    setUpdate(true);
    setUpdatedID(data.id);
    setEquipmentName(data.name);
    setSerial(data.serial);
    setNextMaintanance(data.next_maintanance);
    setValueMarca(data.brand_id);
    setValueProveedor(data.provider_id);
    setValueStatus(data.status_id);
  };

  const { values, setValues, handleDelete } = useGetData({
    api: "lab_equipment",
    errorMessage: "equipo",
    handleUpdate
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (update === true) {
      try {
        const post = {
          query: {
            id: updatedID,
          },
          values: {
            name: equipmentName,
            serial: serial,
            id_brand: valueMarca,
            id_provider: valueProveedor,
            next_maintanance: nextMaintanance,
            id_status: valueStatus,
          },
        };

        const { data } = await axios.post(
          "http://127.0.0.1:5000/api/lab_equipment/update/",
          post
        );

        setValues(
          values.map((e) => {
            if (e.id === data.results.id) {
              return {
                ...data.results,
                options: (
                  <Stack direction="row" spacing={2}>
                    <Button
                      variant="contained"
                      color="warning"
                      onClick={() => handleUpdate(data.results)}
                    >
                      <EditIcon />
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => handleDelete(data.results.id)}
                    >
                      <DeleteIcon />
                    </Button>
                  </Stack>
                ),
              };
            } else {
              return e;
            }
          })
        );

        setUpdate(false);
        setUpdatedID(0);
        setEquipmentName("");
        setSerial("");
        setValueMarca(marcas[0].id);
        setValueProveedor(proveedores[0].id);
        setValueStatus(status[0].id);
      } catch (error) {
        toast.error("Error al actualizar el equipo");
        setUpdate(false);
        setUpdatedID(0);
        setEquipmentName("");
        setSerial("");
        setValueMarca(marcas[0].id);
        setValueProveedor(proveedores[0].id);
        setValueStatus(status[0].id);
      }
    } else {
      try {
        const post = {
          name: equipmentName,
          serial: serial,
          id_brand: valueMarca,
          id_provider: valueProveedor,
          next_maintanance: nextMaintanance,
          id_status: valueStatus,
        };

        const { data } = await axios.post(
          "http://127.0.0.1:5000/api/lab_equipment/insert/",
          post
        );

        setValues(
          values.concat({
            ...data.results,
            options: (
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  color="warning"
                  onClick={() => handleUpdate(data.results)}
                >
                  <EditIcon />
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => handleDelete(data.results.id)}
                >
                  <DeleteIcon />
                </Button>
              </Stack>
            ),
          })
        );

        setEquipmentName("");
        setSerial("");
        setValueMarca(marcas[0].id);
        setValueProveedor(proveedores[0].id);
        setValueStatus(status[0].id);
      } catch (error) {
        console.log(error);
        toast.error("Error al crear el equipo.");
        setEquipmentName("");
        setSerial("");
        setValueMarca(marcas[0].id);
        setValueProveedor(proveedores[0].id);
        setValueStatus(status[0].id);
      }
    }
  };

  return (
    <Grid container spacing={2}>
      <SectionTitle title="Equipos de Laboratorio" />

      <FormContainer>
        <form onSubmit={handleSubmit}>
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
          <Button
            type="submit"
            variant="contained"
            color="success"
            fullWidth
            sx={{ marginTop: 2 }}
          >
            {update ? "Editar" : "Crear"}
          </Button>
        </form>
      </FormContainer>

      <Grid item xl={9}>
        <DataTable
          title="Lista de Equipos"
          columns={columns}
          data={values}
        />
      </Grid>
    </Grid>
  );
}
