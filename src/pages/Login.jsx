import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { signIn, setUser, setLoading, googleSignIn } = useContext(AuthContext);

  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((res) => {
        setUser(res.user);
        toast.success("Welcome back! ❄️");
        navigate(from, { replace: true });
      })
      .catch(() => {
        setError("Invalid email or password");
        toast.error("Login failed!");
      })
      .finally(() => setLoading(false));
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((res) => {
        setUser(res.user);
        toast.success("Logged in with Google! 🐾");
        navigate(from, { replace: true });
      })
      .catch(() => toast.error("Google Sign-in failed"));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-blue-50 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-blue-800 mb-6">
          Login to WarmPaws 🐾
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
            <Link
              to="/reset-password"
              className="text-sm text-blue-600 hover:underline block mt-1"
            >
              Forgot Password?
            </Link>
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600 text-sm">
            New to WarmPaws?{" "}
            <Link to="/register" className="text-blue-600 hover:underline">
              Sign Up
            </Link>
          </p>

          <div className="mt-4">
            <button
              onClick={handleGoogleLogin}
              className="w-full border border-gray-300 py-2 rounded-lg flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 transition"
            >
              <div>
                <FcGoogle size={24} />
              </div>
              <span>Continue with Google</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
