import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

export default function useGetInfoUser() {
  const [userInfo, setUserInfo] = useState({
    id: 0,
    name: "",
    rol: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token")
      ? localStorage.getItem("token")
      : "";

    if (token !== "") {
      const decoded = jwt_decode(token);
      setUserInfo(decoded);
    }
  }, []);

  return {
    userInfo,
  };
}
