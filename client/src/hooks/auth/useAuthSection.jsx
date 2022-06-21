import { useState } from "react";

export default function useAuthSection() {
  const [authSection, setAuthSection] = useState("login");

  const handleAuthSection = () => {
    setAuthSection(authSection === "login" ? "register" : "login");
  };

  return {
    authSection,
    handleAuthSection,
  };
}
