<div
  class="container p-4 d-flex justify-content-center align-items-center flex-column"
>
  <span class="h2 text-center text-success"
    >Bievenido al sistema de adminsitración del CEAP
  </span>
  <p class="mb-4 fs-4"><em>Ingresa tus credenciales para iniciar sesión</em></p>
  <div class="card form-container">
    <div class="card-body">
      <div class="mb-3">
        <label for="fullname-input">Nombre y Apellido</label>
        <input
          type="text"
          id="fullname-input"
          class="form-control"
          placeholder="Bárbara Arévalo"
          autofocus
        />
      </div>
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
      <div class="mb-3">
          <label for="confirm-password-input">Confimar Contraseña</label>
          <input type="password" id="confirm-password-input" placeholder="********" class="form-control">
      </div>
      <div class="mb-3">
          <p class="consult text-center">¿Ya tienes una cuenta registrada?</p>
      </div>
      <div class="mb-3">
        <button class="btn btn-success w-100">Iniciar Sesión</button>
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
