import { Button, Grid, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import FormContainer from "../../form/form_container";
import TextFieldComponent from "../../form/text_field_component";
import SectionTitle from "../../section_title";
import DatePickerComponent from "../../form/DatePickerComponent";
import axios from "axios";
import SelectComponent from "../../form/SelectComponent";
import useGetTableBase from "../../../hooks/tablas_base/useGetTableBase";
import useGetData from "../../../hooks/dashboard/useGetData";
import DataTable from "../../DataTable";
import toast from "react-hot-toast";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import jwt_decode from "jwt-decode";
import useGetInfoUser from "../../../hooks/auth/useGetInfoUser";

const columns = [
  {
    name: "name",
    label: "Nombre",
  },
  {
    name: "cas",
    label: "CAS",
  },
  {
    name: "actual_amount",
    label: "Cantidad Actual",
  },
  {
    name: "measurement_unit_name",
    label: "Unidad de Medida",
  },
  {
    name: "reactive_type_name",
    label: "Tipo de Reactivo",
  },
  {
    name: "expiration_date",
    label: "Fecha de Expiración",
  },
  {
    name: "buy_alarm",
    label: "Cantidad Mínima",
  },
  {
    name: "options",
    label: "Opciones",
  },
];

export default function ReactivosSection() {
  const [reactiveName, setReactiveName] = useState("");
  const [cas, setCas] = useState("");
  const [expirationoDate, setExpirationDate] = useState("2014-08-18");
  const [actualAmount, setActualAmount] = useState("0");
  const [unidadesMedida, setUnidadesMedida] = useState([]);
  const [valueUnidadMedida, setValueUnidadMedida] = useState("");
  const [tiposReactivos, setTiposReactivos] = useState([]);
  const [valueTipoReactivo, setValueTipoReactivo] = useState("");
  const [buyAlarm, setBuyAlarm] = useState("50");
  const [update, setUpdate] = useState(false);
  const [updatedID, setUpdatedID] = useState(0);
  const [columns, setColumns] = useState([]);
  const [loading, setLoading] = useState(true);
  const { userInfo } = useGetInfoUser();

  useEffect(() => {
    setLoading(false);
    const token = localStorage.getItem("token");
    const decoded = jwt_decode(token);
    const { rol } = decoded;

    if (rol === "administrador") {
      setColumns([
        {
          name: "name",
          label: "Nombre",
        },
        {
          name: "cas",
          label: "CAS",
        },
        {
          name: "actual_amount",
          label: "Cantidad Actual",
        },
        {
          name: "measurement_unit_name",
          label: "Unidad de Medida",
        },
        {
          name: "reactive_type_name",
          label: "Tipo de Reactivo",
        },
        {
          name: "expiration_date",
          label: "Fecha de Expiración",
        },
        {
          name: "buy_alarm",
          label: "Cantidad Mínima",
        },
        {
          name: "options",
          label: "Opciones",
        },
      ]);
    } else {
      setColumns([
        {
          name: "name",
          label: "Nombre",
        },
        {
          name: "cas",
          label: "CAS",
        },
        {
          name: "actual_amount",
          label: "Cantidad Actual",
        },
        {
          name: "measurement_unit_name",
          label: "Unidad de Medida",
        },
        {
          name: "reactive_type_name",
          label: "Tipo de Reactivo",
        },
        {
          name: "expiration_date",
          label: "Fecha de Expiración",
        },
        {
          name: "buy_alarm",
          label: "Cantidad Mínima",
        },
      ]);
    }
    setLoading(false);
  }, []);

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

  const handleUpdate = (data) => {
    setUpdate(true);
    setUpdatedID(data.id);
    setReactiveName(data.name);
    setCas(data.cas);
    setActualAmount(data.actual_amount);
    setExpirationDate(data.expiration_date);
    setValueUnidadMedida(data.measurement_unit_id);
    setValueTipoReactivo(data.reactive_type_id);
    setBuyAlarm(data.buy_alarm);
  };

  const { values, setValues, handleDelete } = useGetData({
    api: "lab_reagent",
    errorMessage: "reactivo",
    handleUpdate,
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
            name: reactiveName,
            cas: cas,
            actual_amount: parseInt(actualAmount),
            id_measurement_unit: valueUnidadMedida,
            expiration_date: expirationoDate,
            id_type: valueTipoReactivo,
            buy_alarm: parseInt(buyAlarm),
          },
        };

        const { data } = await axios.post(
          "http://127.0.0.1:5000/api/lab_reagent/update/",
          post
        );

        setValues(
          values.map((v) => {
            if (v.id === data.results.id) {
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
              return v;
            }
          })
        );

        setUpdate(false);
        setUpdatedID(0);
        setReactiveName("");
        setCas("");
        setActualAmount("0");
        setValueUnidadMedida(unidadesMedida[0].id);
        setValueTipoReactivo(tiposReactivos[0].id);
        setExpirationDate("2014-08-18");
        setBuyAlarm("50");
      } catch (error) {
        toast.error("Error al actualizar el reactivo.");
        setUpdate(false);
        setUpdatedID(0);
        setReactiveName("");
        setCas("");
        setActualAmount("0");
        setValueUnidadMedida(unidadesMedida[0].id);
        setValueTipoReactivo(tiposReactivos[0].id);
        setExpirationDate("2014-08-18");
        setBuyAlarm("50");
      }
    } else {
      try {
        const post = {
          name: reactiveName,
          cas: cas,
          actual_amount: parseInt(actualAmount),
          id_measurement_unit: valueUnidadMedida,
          expiration_date: expirationoDate,
          id_type: valueTipoReactivo,
          buy_alarm: parseInt(buyAlarm),
        };

        const { data } = await axios.post(
          "http://127.0.0.1:5000/api/lab_reagent/insert/",
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

        setReactiveName("");
        setCas("");
        setActualAmount("0");
        setValueUnidadMedida(unidadesMedida[0].id);
        setValueTipoReactivo(tiposReactivos[0].id);
        setExpirationDate("2014-08-18");
        setBuyAlarm("50");
      } catch (error) {
        toast.error("Error al crear el reactivo.");
        setReactiveName("");
        setCas("");
        setActualAmount("0");
        setValueUnidadMedida(unidadesMedida[0].id);
        setValueTipoReactivo(tiposReactivos[0].id);
        setExpirationDate("2014-08-18");
        setBuyAlarm("50");
      }
    }
  };

  return (
    <>
      {loading === false && (
        <Grid container spacing={2}>
          <SectionTitle title="Reactivos" />

          {userInfo.rol === "administrador" && (
            <FormContainer>
              <form onSubmit={handleSubmit}>
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
                      value={valueUnidadMedida}
                      options={unidadesMedida}
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
                <Button
                  variant="contained"
                  color="success"
                  fullWidth
                  type="submit"
                >
                  {update ? "Editar" : "Crear"}
                </Button>
              </form>
            </FormContainer>
          )}

          <Grid item xl={8}>
            <DataTable
              title="Lista de Reactivos"
              columns={columns}
              data={values}
            />
          </Grid>
        </Grid>
      )}
    </>
  );
}
