import { HashRouter, Routes, Route } from "react-router-dom";

// Pages
import Auth from "../pages/Auth";
import Dashboard from "../pages/Dashboard";

export default function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/admin" element={<Dashboard />} />
      </Routes>
    </HashRouter>
  );
}
