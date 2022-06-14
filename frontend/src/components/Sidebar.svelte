<script>
  import { useNavigate } from "svelte-navigator";

  export let section, handleSection;

  const navigate = useNavigate();

  const logout = () => {
    navigate("/");
  };
</script>

<ul class="d-flex flex-column justify-content-center align-items-center mt-4">
  <li class="item-title d-flex align-items-center justify-content-center">
    <img src="/src/assets/zoro.jpg" class="user-image img-fluid" alt="Claudio Guevara" />
    <span class="fs-4 fw-bold">Claudio Guevara</span>
  </li>
  <li
    class={section === "usuarios" ? "selected-item mt-4" : "item mt-4"}
    on:click={() => handleSection("usuarios")}
  >
    Usuarios
  </li>
  <li
    class={section === "equipos" ? "selected-item" : "item"}
    on:click={() => handleSection("equipos")}
  >
    Equipos
  </li>
  <li
    class={section === "reactivos" ? "selected-item" : "item"}
    on:click={() => handleSection("reactivos")}
  >
    Reactivos
  </li>
  <li class="logout-item text-danger mt-4" on:click={logout}>Cerrar Sesión</li>
</ul>

<style>
  .item {
    list-style: none;
    font-size: 1.5rem;
    cursor: pointer;
    margin-top: 1.2rem;
  }

  .selected-item {
    list-style: none;
    font-size: 1.5rem;
    cursor: pointer;
    font-weight: bold;
    color: #28a745;
    margin-top: 1.2rem;
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

  .item-title {
    list-style: none;
  }

  .user-image {
    border-radius: 50%;
    width: 4rem;
    height: 4rem;
    margin-right: 1rem;
  }
</style>
