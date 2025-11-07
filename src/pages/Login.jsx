import React, { useState, useContext } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { signIn, googleSignIn, setUser } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const getRedirectPath = () => {
    const stateFrom = location.state?.from?.pathname
      ? location.state.from.pathname + (location.state.from.search || "")
      : null;

    if (stateFrom) return stateFrom;

    const stored = localStorage.getItem("redirectAfterLogin");
    if (stored) return stored;

    return "/";
  };

  // Handle email-password login
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await signIn(email, password);
      const loggedInUser = result.user;
      setUser(loggedInUser);
      toast.success("Login successful!");

      const redirectPath = getRedirectPath();

      localStorage.removeItem("redirectAfterLogin");

      navigate(redirectPath, { replace: true });
    } catch (err) {
      const errorMsg =
        err.code === "auth/invalid-credential" ||
        err.code === "auth/user-not-found" ||
        err.code === "auth/wrong-password"
          ? "Invalid email or password!"
          : err.message;
      toast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  // Handle Google Sign-In
  const handleGoogle = async () => {
    setLoading(true);
    try {
      const result = await googleSignIn();
      const loggedInUser = result.user;

      setUser(loggedInUser);

      toast.success("Logged in with Google!");

      const redirectPath = getRedirectPath();
      localStorage.removeItem("redirectAfterLogin");

      navigate(redirectPath, { replace: true });
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-200 to-blue-100 p-4 animate__animated animate__fadeInDown">
      <Toaster position="top-center" />
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-blue-800 mb-6">
          Login to WarmPaws 🐾
        </h2>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                required
              />
              <span
                className="absolute right-2 top-4 cursor-pointer text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <Link
              to={`/forgot-password?email=${email}`}
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-lg text-white transition transform ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-blue-500 to-pink-500 hover:scale-105"
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Google Login Button */}
        <button
          onClick={handleGoogle}
          disabled={loading}
          className="w-full border border-gray-300 py-2 rounded-lg flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 transition disabled:opacity-70 mt-4"
        >
          {loading ? (
            "Please wait..."
          ) : (
            <>
              <FcGoogle size={24} /> Login with Google
            </>
          )}
        </button>

        {/* Register Link */}
        <p className="mt-4 text-center text-gray-600 text-sm">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
