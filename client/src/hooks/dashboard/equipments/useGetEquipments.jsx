import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function useGetEquipments() {
  const [equipments, setEquipments] = useState([]);

  const getEquipments = async () => {
    try {
      const post = {};
      const { data } = await axios.post(
        "http://127.0.0.1:5000/api/lab_equipment/get/",
        post
      );
        console.log(data.results)
      setEquipments(data.results)
    } catch (error) {
      setEquipments();
    }
  };

  useEffect(() => {
    getEquipments();
  }, []);

  return {
    equipments,
    setEquipments
  };
}
