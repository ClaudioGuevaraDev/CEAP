<script>
    import { Link } from "svelte-navigator"
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light p-2">
  <div class="container-fluid">
    <span class="h2">Centro de Estudios en Alimentos Procesados</span>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav ms-auto">
        <Link to="/" class="nav-link">
            <button class="btn btn-danger btn-lg">Cerrar Sesión</button>
        </Link>
      </div>
    </div>
  </div>
</nav>

