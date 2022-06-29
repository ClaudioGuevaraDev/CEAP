import TablaBaseLayout from "../tablas_base";

export default function MarcaSection() {
  return (
    <TablaBaseLayout
      title={"Tipo de Marca"}
      placeholder="Ej: Marca"
      api="brand"
      tableTitle="Lista de Marcas"
    />
  );
}
