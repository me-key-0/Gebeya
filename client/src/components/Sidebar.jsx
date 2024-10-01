// src/components/Sidebar.jsx

import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white flex flex-col">
      <div className="p-4 text-lg font-bold">
        Admin Dashboard
      </div>
      <nav className="flex flex-col space-y-2 p-4">
        <Link to="/dashboard" className="hover:bg-gray-700 p-2 rounded">
          Dashboard
        </Link>
        <Link to="/users" className="hover:bg-gray-700 p-2 rounded">
          Users
        </Link>
        <Link to="/settings" className="hover:bg-gray-700 p-2 rounded">
          Settings
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
