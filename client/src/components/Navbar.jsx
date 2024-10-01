
const Navbar = () => {
  return (
    <header className="bg-white shadow-md p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-bold">Admin Panel</h1>
        <div className="flex items-center space-x-4">
          <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
