<script>
	import 'bootstrap/dist/css/bootstrap.min.css';
	import "bootstrap/dist/js/bootstrap.bundle"

	import { Router, Route } from "svelte-navigator";

	// Components
	import Navbar from "./components/Navbar.svelte";
</script>

<Router>
	<main>
		<Navbar/>

		<Route path="/">
			
		</Route>
	</main>
</Router>