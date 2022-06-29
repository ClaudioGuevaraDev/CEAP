import { useEffect, useState } from "react";
import axios from "axios";
import { Stack, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import toast from "react-hot-toast";

export default function useGetDataTableBase({
  api,
  handleUpdate,
  errorMessage,
}) {
  const [dataTable, setDataTable] = useState([]);

  const getData = async () => {
    try {
      const post = {};
      const { data } = await axios.post(
        `http://127.0.0.1:5000/api/${api}/get/`,
        post
      );

      const new_data = [];
      data.results.map((d) => {
        new_data.push({
          id: d.id,
          name: d.name,
          options: (
            <Stack direction="row" spacing={1}>
              <Button color="warning" onClick={() => handleUpdate(d)}>
                <EditIcon />
              </Button>
              <Button color="error" onClick={() => handleDelete(d.id)}>
                <DeleteIcon />
              </Button>
            </Stack>
          ),
        });
      });
      setDataTable(new_data);
    } catch (error) {
      setDataTable([]);
    }
  };

  const handleDelete = async (id) => {
    try {
      const post = {
        id: id,
      };

      await axios.post(`http://127.0.0.1:5000/api/${api}/delete/`, post);

      getData();
    } catch (error) {
      toast.error(`Error al eliminar ${errorMessage}.`);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    dataTable,
    setDataTable,
    handleDelete,
  };
}
