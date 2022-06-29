import TablaBaseLayout from "../tablas_base";

export default function TipoUsuarioSection() {
  return (
    <TablaBaseLayout
      title={"Tipo de Usuario"}
      placeholder="Ej: Administrador"
      api="rol"
      tableTitle="Lista de Tipos de Usuarios"
      errorMessage="el tipo de usuario"
    />
  );
}
