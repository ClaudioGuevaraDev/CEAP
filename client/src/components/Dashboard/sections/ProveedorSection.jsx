import TablaBaseLayout from "../tablas_base";

export default function ProveedorSection() {
  return (
    <TablaBaseLayout
      title={"Proveedores"}
      placeholder="Ej: Proveedor"
      api="provider"
      tableTitle="Lista de Proveedores"
      errorMessage="el proveedor"
    />
  );
}
