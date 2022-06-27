import { useState } from "react";

export default function useHandleDrawer() {
  const [openDrawer, setOpenDrawer] = useState(true);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return {
    openDrawer,
    handleDrawerClose,
    handleDrawerOpen,
  };
}
