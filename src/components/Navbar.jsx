import { Link, NavLink } from "react-router";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  // Dummy user for design/demo
  const user = {
    displayName: "Adiba Hossain",
    email: "adiba@example.com",
    photoURL: "https://i.pravatar.cc/100?img=5", // placeholder avatar image
  };

  // Dummy logout handler
  const handleLogout = () => {
    console.log("User logged out");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
      {/* Logo */}

      <Link to="/" className="flex items-center gap-2">
        <img
          src="/logo.jpg"
          alt="WarmPaws"
          className="w-15 h-15 rounded-full"
        />
        <span className="font-bold text-xl text-blue-700">WarmPaws</span>
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-4">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "font-semibold text-blue-700" : "hover:text-blue-600"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive ? "font-semibold text-blue-700" : "hover:text-blue-600"
          }
        >
          Services
        </NavLink>

        <NavLink
          to="/my-profile"
          className={({ isActive }) =>
            isActive ? "font-semibold text-blue-700" : "hover:text-blue-600"
          }
        >
          My Profile
        </NavLink>

        {/* Logged-in View */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-lg transition font-medium"
          >
            Logout
          </button>

          <div className="relative group">
            {user.photoURL ? (
              <img
                className="w-10 h-10 rounded-full border-2 border-blue-400 cursor-pointer"
                src={user.photoURL}
                alt="avatar"
              />
            ) : (
              <FaUserCircle className="text-3xl text-gray-600 cursor-pointer" />
            )}

            {/* Hover Name */}
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-white shadow-md border rounded-md px-3 py-1 text-sm text-gray-700 opacity-0 group-hover:opacity-100 transition">
              {user.displayName || user.email}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
