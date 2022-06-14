<script>
  import { useNavigate } from "svelte-navigator";

  export let section, handleSection;

  const navigate = useNavigate();

  const logout = () => {
    navigate("/");
  };
</script>

<ul class="d-flex flex-column justify-content-center align-items-center mt-4">
  <li
    class={section === "usuarios" ? "selected-item" : "item"}
    on:click={() => handleSection("usuarios")}
  >
    Usuarios
  </li>
  <li
    class={section === "equipos" ? "selected-item mt-2" : "item mt-2"}
    on:click={() => handleSection("equipos")}
  >
    Equipos
  </li>
  <li
    class={section === "reactivos" ? "selected-item mt-2" : "item mt-2"}
    on:click={() => handleSection("reactivos")}
  >
    Reactivos
  </li>
  <hr class="solid" />
  <li class="logout-item text-danger mt-4" on:click={logout}>Cerrar Sesión</li>
</ul>

<style>
  .item {
    list-style: none;
    font-size: 1.5rem;
    cursor: pointer;
  }

  .selected-item {
    list-style: none;
    font-size: 1.5rem;
    cursor: pointer;
    font-weight: bold;
    color: #28a745;
  }

  .logout-item {
    list-style: none;
    font-size: 1.5rem;
    cursor: pointer;
    font-weight: 500;
  }

  .logout-item:hover {
    font-weight: bold;
  }

  .item:hover {
    font-weight: bold;
    color: #28a745;
  }
</style>
