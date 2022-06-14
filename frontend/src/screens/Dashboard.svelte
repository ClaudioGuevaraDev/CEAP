<script>
  import Sidebar from "../components/Sidebar.svelte";

  let section = "usuarios";

  function handleSection(newSection) {
    section = newSection;
  }
</script>

<div class="d-flex">
  <div class="columns col-md-2 overflow-auto">
    <Sidebar {section} {handleSection} />
  </div>
  <div class="columns col-md-10 overflow-auto">
    <h1>{section}</h1>
    <p>asdkalsñd</p>
    <p>asdkalsñd</p>
    <p>asdkalsñd</p>
    <p>asdkalsñd</p>
    <p>asdkalsñd</p>
    <p>asdkalsñd</p>
    <p>asdkalsñd</p>

    <p>asdkalsñd</p>
    <p>asdkalsñd</p>
    <p>asdkalsñd</p>
    <p>asdkalsñd</p>
    <p>asdkalsñd</p>

    <p>asdkalsñd</p>
    <p>asdkalsñd</p>
    <p>asdkalsñd</p>
    <p>asdkalsñd</p>

    <p>asdkalsñd</p>
    <p>asdkalsñd</p>
    <p>asdkalsñd</p>
    <p>asdkalsñd</p>
    <p>asdkalsñd</p>
    <p>asdkalsñd</p>

    <p>asdkalsñd</p>

    <p>asdkalsñd</p>
    <p>asdkalsñd</p>
    <p>asdkalsñd</p>
    <p>asdkalsñd</p>
    <p>asdkalsñd</p>
    <p>asdkalsñd</p>
    <p>asdkalsñd</p>

    <p>asdkalsñd</p>
    <p>asdkalsñd</p>
    <p>asdkalsñd</p>
    <p>asdkalsñd</p>
    <p>asdkalsñd</p>
    <p>asdkalsñd</p>

    <p>asdkalsñd</p>
    <p>asdkalsñd</p>
    <p>asdkalsñd</p>
    <p>asdkalsñd</p>
    <p>asdkalsñd</p>
    <p>asdkalsñd</p>
    <p>asdkalsñd</p>
    <p>asdkalsñd</p>
    <p>asdkalsñd</p>
    <p>asdkalsñd</p>
    <p>asdkalsñd</p>
    <p>asdkalsñd</p>
    <p>asdkalsñd</p>
    <p>asdkalsñd</p>
    <p>asdkalsñd</p>
    <p>asdkalsñd</p>
    <p>asdkalsñd</p>
    <p>asdkalsñd</p>
    <p>asdkalsñd</p>
    <p>asdkalsñd</p>
    <p>asdkalsñd</p>
  </div>
</div>

<style>
  .columns {
    max-height: 100vh;
  }
</style>
