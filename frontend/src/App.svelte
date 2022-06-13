<script>
  import "bootstrap/dist/css/bootstrap.min.css";
  import "bootstrap/dist/js/bootstrap.bundle";

  import { Router, Route } from "svelte-navigator";

  // Screens
  import Home from "./screens/Home.svelte";

  //Components
  import Navbar from "./components/Navbar.svelte";
</script>

<Router>
  <Navbar/>

  <Route path="/" component={Home} />
</Router>
