import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import AdminLayout from "./dashboard/AdminLayout"; // Layout for the dashboard
import Dashboard from "./dashboard/pages/Dashboard"; // Dashboard main page
import Users from "./dashboard/pages/Users"; // Dashboard users page
import Settings from "./dashboard/pages/Settings"; // Dashboard settings page

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* The Header can remain here if it's part of the main layout */}
        <Header />
        
        <Routes>
          {/* Main app routes */}
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Dashboard routes with a separate layout */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
