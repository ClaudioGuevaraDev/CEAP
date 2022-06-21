import { useState } from "react";

export default function useHandleSection() {
  const [section, setSection] = useState("");

  const handleSection = (section) => {
    setSection(section);
  };

  return {
    section,
    handleSection,
  };
}
