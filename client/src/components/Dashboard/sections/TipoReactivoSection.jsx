import TablaBaseLayout from "../tablas_base";

export default function TipoReactivoSection() {
  return (
    <TablaBaseLayout
      title={"Tipos de Reactivo"}
      placeholder="Ej: Tipo de Reactivo"
      api="reactive_type"
      tableTitle="Lista de Tipos de Reactivos"
      errorMessage="el tipo de reactivo"
    />
  );
}
