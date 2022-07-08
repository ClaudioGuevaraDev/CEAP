import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function useGetReactivos() {
  const [reactivos, setReactivos] = useState([]);
  const [reactivoValue, setReactivoValue] = useState([]);

  const getReactivos = async () => {
    try {
      const post = {};
      const { data } = await axios.post(
        "http://127.0.0.1:5000/api/lab_reagent/get/",
        post
      );
      const { results } = data;
      setReactivos(results);
    } catch (error) {
      toast.error("Error al obtener los reactivos");
    }
  };

  useEffect(() => {
    getReactivos();
  }, []);

  const handleChangeReactivo = (event) => {
    const {
      target: { value },
    } = event;
    setReactivoValue(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return {
    reactivos,
    reactivoValue,
    handleChangeReactivo,
  };
}
