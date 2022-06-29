import axios from "axios";
import { Stack, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import toast from "react-hot-toast";

export default function useHandleFormTablaBase({
  setDataTable,
  nameInput,
  updateId,
  api,
  setNameInput,
  update,
  setUpdate,
  setUpdateId,
  dataTable,
  handleDelete,
  handleUpdate,
  errorMessage,
}) {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const post = {
      name: nameInput,
    };

    if (update === true) {
      try {
        const post = {
          query: {
            id: updateId,
          },
          values: {
            name: nameInput,
          },
        };

        const { data } = await axios.post(
          `http://127.0.0.1:5000/api/${api}/update/`,
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
                      onClick={() => handleUpdate(data.results)}
                    >
                      <EditIcon />
                    </Button>
                    <Button
                      color="error"
                      onClick={() => handleDelete(data.results.id)}
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
        setNameInput("");
      } catch (error) {
        toast.error(`Error al actualizar ${errorMessage}.`);
        setUpdate(false);
        setUpdateId(0);
        setNameInput("");
      }
    } else {
      try {
        const { data } = await axios.post(
          `http://127.0.0.1:5000/api/${api}/insert/`,
          post
        );

        setDataTable(
          dataTable.concat({
            id: data.results.id,
            name: data.results.name,
            options: (
              <Stack direction="row" spacing={1}>
                <Button
                  color="warning"
                  onClick={() => handleUpdate(data.results)}
                >
                  <EditIcon />
                </Button>
                <Button
                  color="error"
                  onClick={() => handleDelete(data.results.id)}
                >
                  <DeleteIcon />
                </Button>
              </Stack>
            ),
          })
        );

        setNameInput("");
      } catch (error) {
        toast.error(`Error al crear ${errorMessage}.`);
        setNameInput("");
      }
    }
  };

  return {
    handleSubmit,
  };
}
