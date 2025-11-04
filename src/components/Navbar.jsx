// import { Link, NavLink } from "react-router";
// import { FaUserCircle } from "react-icons/fa";

// const Navbar = () => {
//   // Dummy user for design/demo
//   const user = {
//     displayName: "Adiba Hossain",
//     email: "adiba@example.com",
//     photoURL: "https://i.pravatar.cc/100?img=5", // placeholder avatar image
//   };

//   // Dummy logout handler
//   const handleLogout = () => {
//     console.log("User logged out");
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
//       {/* Logo */}

//       <Link to="/" className="flex items-center gap-2">
//         <img
//           src="/logo.jpg"
//           alt="WarmPaws"
//           className="w-15 h-15 rounded-full"
//         />
//         <span className="font-bold text-xl text-blue-700">WarmPaws</span>
//       </Link>

//       {/* Navigation Links */}
//       <div className="flex items-center gap-4">
//         <NavLink
//           to="/"
//           end
//           className={({ isActive }) =>
//             isActive ? "font-semibold text-blue-700" : "hover:text-blue-600"
//           }
//         >
//           Home
//         </NavLink>

//         <NavLink
//           to="/services"
//           className={({ isActive }) =>
//             isActive ? "font-semibold text-blue-700" : "hover:text-blue-600"
//           }
//         >
//           Services
//         </NavLink>

//         <NavLink
//           to="/my-profile"
//           className={({ isActive }) =>
//             isActive ? "font-semibold text-blue-700" : "hover:text-blue-600"
//           }
//         >
//           My Profile
//         </NavLink>

//         {/* Logged-in View */}
//         <div className="flex items-center gap-3">
//           <button
//             onClick={handleLogout}
//             className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-lg transition font-medium"
//           >
//             Logout
//           </button>

//           <div className="relative group">
//             {user.photoURL ? (
//               <img
//                 className="w-10 h-10 rounded-full border-2 border-blue-400 cursor-pointer"
//                 src={user.photoURL}
//                 alt="avatar"
//               />
//             ) : (
//               <FaUserCircle className="text-3xl text-gray-600 cursor-pointer" />
//             )}

//             {/* Hover Name */}
//             <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-white shadow-md border rounded-md px-3 py-1 text-sm text-gray-700 opacity-0 group-hover:opacity-100 transition">
//               {user.displayName || user.email}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { getAuth, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import { toast } from "react-hot-toast";
import { Menu, X } from "lucide-react";

const auth = getAuth(app);

const Navbar = () => {
  const { user, setUser } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        toast.success("Logged out successfully!");
        navigate("/");
      })
      .catch(() => toast.error("Logout failed"));
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          onClick={() => setIsMenuOpen(false)}
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "text-gray-700 hover:text-blue-600"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          onClick={() => setIsMenuOpen(false)}
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "text-gray-700 hover:text-blue-600"
          }
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/profile"
          onClick={() => setIsMenuOpen(false)}
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "text-gray-700 hover:text-blue-600"
          }
        >
          My Profile
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="bg-gradient-to-r from-blue-100 to-pink-100 shadow-md sticky top-0 z-50">
      <div className="w-11/12 mx-auto flex justify-between items-center py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1 justify-center">
          <img src="/logo.png" alt="WarmPaws Logo" className="w-15 h-15" />
          <span className="text-xl font-bold text-blue-800">WarmPaws</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">{links}</ul>

        {/* Right Side Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <>
              {/* Avatar with hover name */}
              <div className="relative group">
                <img
                  src={
                    user.photoURL ||
                    "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  }
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full border-2 border-blue-500 cursor-pointer"
                />
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 bg-white shadow-md text-sm text-gray-700 rounded-md py-1 px-2 opacity-0 group-hover:opacity-100 transition">
                  {user.displayName || "User"}
                </div>
              </div>

              <button
                onClick={handleLogout}
                className="bg-gradient-to-r from-blue-500 to-pink-500 text-white px-4 py-1 rounded-lg hover:opacity-90 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-blue-600 font-medium hover:underline"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-gradient-to-r from-blue-500 to-pink-500 text-white px-4 py-1 rounded-lg hover:opacity-90 transition"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center text-blue-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-200">
          <ul className="flex flex-col items-center gap-4 py-4">{links}</ul>

          <div className="flex flex-col items-center gap-3 pb-4">
            {user ? (
              <>
                <div className="flex items-center gap-2">
                  <img
                    src={
                      user.photoURL ||
                      "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    }
                    alt="User Avatar"
                    className="w-8 h-8 rounded-full border border-blue-500"
                  />
                  <span className="font-medium text-gray-700">
                    {user.displayName || "User"}
                  </span>
                </div>
                <button
                  onClick={handleLogout}
                  className="bg-gradient-to-r from-blue-500 to-pink-500 text-white px-4 py-1 rounded-lg hover:opacity-90 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-blue-600 font-medium hover:underline"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-gradient-to-r from-blue-500 to-pink-500 text-white px-4 py-1 rounded-lg hover:opacity-90 transition"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
