import TablaBaseLayout from "../tablas_base";

export default function EstadoSection() {
  return (
    <TablaBaseLayout
      title={"Estados"}
      placeholder="Ej: Estado"
      api="status"
      tableTitle="Lista de Estados"
    />
  );
}
