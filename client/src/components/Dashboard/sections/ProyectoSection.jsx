import TablaBaseLayout from "../tablas_base";

export default function ProyectoSection() {
  return (
    <TablaBaseLayout
      title={"Proyectos"}
      placeholder="Ej: Proyecto"
      api="project"
      tableTitle="Lista de Proyectos"
      errorMessage="el proyecto"
    />
  );
}
