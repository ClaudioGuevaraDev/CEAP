import { useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function useGetTableBase({
  api,
  setOptions,
  setValueOption,
  name,
}) {
  const getUnidadesMedida = async () => {
    try {
      const post = {};
      const { data } = await axios.post(
        `http://127.0.0.1:5000/api/${api}/get/`,
        post
      );
      setOptions(data.results);
      setValueOption(data.results[0].id);
    } catch (error) {
      toast.error(`No hay ${name} registrados.`);
      setOptions([]);
      setValueOption("");
    }
  };

  useEffect(() => {
    getUnidadesMedida();
  }, []);

  return {};
}
