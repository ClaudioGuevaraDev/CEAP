<script>
  import Sidebar from "../components/Sidebar.svelte";

  let section = "usuarios";

  function handleSection(newSection) {
    section = newSection;
  }
</script>

<div class="d-flex">
  <div class="columns col-md-3 overflow-auto">
    <Sidebar {section} {handleSection} />
  </div>
  <div class="columns col-md-9 overflow-auto">
  </div>
</div>

<style>
  .columns {
    max-height: 100vh;
  }

</style>
