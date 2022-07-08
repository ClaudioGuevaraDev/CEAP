import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function useGetProjects() {
  const [projects, setProjects] = useState([]);
  const [projectValue, setProjectValue] = useState("");

  const getProjects = async () => {
    try {
      const post = {};
      const { data } = await axios.post(
        "http://127.0.0.1:5000/api/project/get/",
        post
      );
      const { results } = data;

      setProjects(results);
      setProjectValue(results[0].id);
    } catch (error) {
      toast.error("Error al obtener los proyectos");
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return {
    projects,
    projectValue,
    setProjectValue,
  };
}
