<script>
  import "bootstrap/dist/css/bootstrap.min.css";
  import "bootstrap/dist/js/bootstrap.bundle";

  import { Router, Route } from "svelte-navigator";

  // Screens
  import Home from "./screens/Home.svelte";
  import Dashboard from "./screens/Dashboard.svelte";

  //Components
  import Navbar from "./components/Navbar.svelte";
</script>

<Router>
  <main class="wrapper border border-primary">
    <Navbar />

    <Route path="/" component={Home} />
    <Route path="/dashboard" component={Dashboard
    } />
  </main>
</Router>

<style>
  .wrapper {
    width: 100%;
    height: 100%;
    min-height: 100vh;
  }
</style>
