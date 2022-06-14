<script>
  import Sidebar from "../components/Sidebar.svelte";
  import Usuarios from "../components/usuarios/Usuarios.svelte";
  import Reactivos from "../components/reactivos/Reactivos.svelte";
  import Equipos from "../components/equipos/Equipos.svelte";

  let section = "usuarios";

  function handleSection(newSection) {
    section = newSection;
  }
</script>

<div class="d-flex">
  <div class="columns col-md-3 overflow-auto">
    <Sidebar {section} {handleSection} />
  </div>
  <div class="columns dashboard col-md-9 overflow-auto p-4">
    {#if section === "usuarios"}
      <Usuarios />
    {/if}
    {#if section === "reactivos"}
      <Reactivos />
    {/if}
    {#if section === "equipos"}
      <Equipos />
    {/if}
  </div>
</div>

<style>
  .columns {
    max-height: 100vh;
  }

  .dashboard {
    margin-top: 1rem;
  }
</style>
