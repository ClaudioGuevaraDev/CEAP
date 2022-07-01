import { Button, Stack } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import toast from "react-hot-toast";

export default function useGetEquipments({ handleUpdate }) {
  const [equipments, setEquipments] = useState([]);

  const getEquipments = async () => {
    try {
      const post = {};
      const { data } = await axios.post(
        "http://127.0.0.1:5000/api/lab_equipment/get/",
        post
      );

      const new_data = data.results.map((d) => {
        return {
          ...d,
          options: (
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                color="warning"
                onClick={() => handleUpdate(d)}
              >
                <EditIcon />
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={() => handleDelete(d.id)}
              >
                <DeleteIcon />
              </Button>
            </Stack>
          ),
        };
      });

      setEquipments(new_data);
    } catch (error) {
      setEquipments();
    }
  };

  const handleDelete = async (id) => {
    try {
      const post = {
        id: id,
      };

      await axios.post("http://127.0.0.1:5000/api/lab_equipment/delete/", post);

      getEquipments();
    } catch (error) {
      toast.error("Error al eliminar el equipo.");
    }
  };

  useEffect(() => {
    getEquipments();
  }, []);

  return {
    equipments,
    setEquipments,
    handleDelete,
  };
}
