<script>
  import "bootstrap/dist/css/bootstrap.min.css";
  import "bootstrap/dist/js/bootstrap.bundle";
  import "svelte-material-ui/bare.css"
  import "./index.css"

  import { Router, Route } from "svelte-navigator";

  // Screens
  import Home from "./screens/Home.svelte";
  import Dashboard from "./screens/Dashboard.svelte";
</script>

<Router>
  <main class="wrapper">
    <Route path="/" component={Home} />
  <Route path="/dashboard" component={Dashboard} />
  </main>
</Router>

<style>
  .wrapper {
    height: 100%;
    min-height: 100vh;
    background-image: url("/src/assets/fondo.jpg");
    background-position: center;
    background-size: cover;
  }
</style>
