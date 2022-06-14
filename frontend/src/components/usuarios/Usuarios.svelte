<script>
  import DataTable from "../DataTable.svelte";

  import SectionTitle from "../SectionTitle.svelte";
</script>

<SectionTitle title="Usuarios" />

<div class="card form-container bg-body mt-3">
  <div class="card-body">
    <div class="mb-3">
      <label class="form-label" for="name-input">Nombre</label>
      <input type="text" id="name-input" class="form-control" />
    </div>
    <button class="btn btn-success w-100">CREAR</button>
  </div>
</div>

<DataTable/>