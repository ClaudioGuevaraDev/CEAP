import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function useGetEquipos() {
  const [equipos, setEquipos] = useState([]);
  const [equipoValue, setEquipoValue] = useState([]);

  const getEquipos = async () => {
    try {
      const post = {};
      const { data } = await axios.post(
        "http://127.0.0.1:5000/api/lab_equipment/get/",
        post
      );

      const { results } = data;
      setEquipos(results);
    } catch (error) {
      toast.error("Error al mostrar los equipos");
    }
  };

  const handleChangeEquipo = (event) => {
    const {
      target: { value },
    } = event;
    setEquipoValue(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  useEffect(() => {
    getEquipos();
  }, []);

  return {
    equipos,
    equipoValue,
    handleChangeEquipo,
  };
}
