<script>
  import { Link } from "svelte-navigator";
  import { BoxArrowLeft } from "svelte-bootstrap-icons";
</script>

<main>
  <nav class="navbar navbar-expand-lg navbar-light bg-light p-3">
    <div class="container-fluid">
      <h2 class="navbar-brand title-ceap">
        Centro de Estudios en Alimentos Procesados
      </h2>
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
          <Link to="/">
            <button class="btn btn-danger">
              <div class="hstack gap-2">
                <span class="title-logout">Cerrar Sesión</span>
                <i class="d-flex align-items-center"
                  ><BoxArrowLeft width={24} height={24} /></i
                >
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  </nav>
</main>

<style>
  .title-ceap {
    font-size: 1.7rem;
  }

  .title-logout {
    font-size: 1.3rem;
  }
</style>
