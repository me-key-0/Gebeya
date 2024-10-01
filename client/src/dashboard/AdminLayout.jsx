// src/components/AdminLayout.jsx

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />
      <div className="flex flex-col flex-1 w-full">
        {/* Navbar */}
        <Navbar />
        {/* Main Content Area */}
        <main className="h-full overflow-y-auto p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
