import { useState } from "react";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";

import Usuarios from "../components/Dashboard/Usuarios";
import Equipos from "../components/Dashboard/Equipos";
import Reactivos from "../components/Dashboard/Reactivos";

export default function Dashboard() {
  const [section, setSection] = useState("usuarios");

  return (
    <Layout>
      <Box style={{ height: "94vh", maxHeight: "94vh" }}>
        <Grid
          h="100%"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(12, 1fr)"
          gap={4}
        >
          <GridItem rowSpan={2} colSpan={2}>
            <Sidebar section={section} setSection={setSection} />
          </GridItem>
          <GridItem rowSpan={2} colSpan={10} overflowY="auto">
            {section === "usuarios" && <Usuarios />}
            {section === "equipos" && <Equipos />}
            {section === "reactivos" && <Reactivos />}
          </GridItem>
        </Grid>
      </Box>
    </Layout>
  );
}
