<script>
  import "bootstrap/dist/css/bootstrap.min.css";
  import "bootstrap/dist/js/bootstrap.bundle";

  import { Router, Route } from "svelte-navigator";

  // Screens
  import Home from "./screens/Home.svelte";
  import Dashboard from "./screens/Dashboard.svelte";
</script>

<Router>
  <Route path="/" component={Home} />
  <Route path="/dashboard" component={Dashboard} />
</Router>
