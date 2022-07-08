import { useEffect, useState } from "react";
import axios from "axios";

export default function useGetRequest() {
  const [requests, setRequests] = useState([]);

  const getRequest = async () => {
    try {
      const post = {};
      const { data } = await axios.post(
        "http://localhost:5000/api/request/get/",
        post
      );

      const { results } = data;
      setRequests(results);
    } catch (error) {}
  };

  useEffect(() => {
    getRequest();
  }, []);

  return {
    requests,
    setRequests,
  };
}
