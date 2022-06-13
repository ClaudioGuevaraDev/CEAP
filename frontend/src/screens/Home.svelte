<script>
  import { useNavigate } from "svelte-navigator";

  const navigate = useNavigate();

  let authSection = true; // true = login false = register

  function handleSection() {
    authSection = !authSection;
  }
</script>

<div
  class="container p-4 d-flex justify-content-center align-items-center flex-column"
>
  <span class="h2 text-center text-success"
    >Bievenido al sistema de adminsitración del CEAP
  </span>
  <p class="mb-4 fs-4">
    <em
      >Ingresa tus credenciales para {authSection
        ? "iniciar sesión"
        : "registrarte"}</em
    >
  </p>
  <div class="card form-container">
    <div class="card-body">
      {#if authSection === false}
        <div class="mb-3">
          <label for="fullname-input">Nombre y Apellido</label>
          <input
            type="text"
            id="fullname-input"
            class="form-control"
            placeholder="Bárbara Arévalo"
          />
        </div>
      {/if}
      <div class="mb-3">
        <label for="email-input">Correo Electrónico</label>
        <input
          type="email"
          id="email-input"
          class="form-control"
          placeholder="example@gmail.com"
        />
      </div>
      <div class="mb-3">
        <label for="password-input">Contraseña</label>
        <input
          type="password"
          id="password-input"
          class="form-control"
          placeholder="********"
        />
      </div>
      {#if authSection === false}
        <div class="mb-3">
          <label for="confirm-password-input">Confimar Contraseña</label>
          <input
            type="password"
            id="confirm-password-input"
            placeholder="********"
            class="form-control"
          />
        </div>
      {/if}
      <div class="mb-3">
        <p class="consult text-center" on:click={handleSection}>
          {#if authSection}
            ¿No tienes una cuenta creada?
          {:else}
            ¿Ya tienes una cuenta registrada?
          {/if}
        </p>
      </div>
      <div class="mb-3">
        <button
          class="btn btn-success w-100"
          on:click={() => navigate("/dashboard")}
        >
          {#if authSection}
            Iniciar Sesión
          {:else}
            Registrarte
          {/if}
        </button>
      </div>
    </div>
  </div>
</div>

<style>
  .form-container {
    width: 30rem;
  }

  .consult:hover {
    cursor: pointer;
    text-decoration: underline;
  }
</style>
