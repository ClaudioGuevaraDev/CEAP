import TablaBaseLayout from "../tablas_base";

export default function UnidadMedidaSection() {
  return (
    <TablaBaseLayout
      api="measurement_unit"
      errorMessage="la unidad de medida"
      placeholder="Unidad de Medida"
      tableTitle="Unidades de Medida"
      title="Unidades de Medida"
    />
  );
}
