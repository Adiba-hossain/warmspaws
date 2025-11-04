import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";

import { toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  const { setUser, setLoading, createUser, googleSignIn } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasMinLength = password.length >= 6;
    if (!hasUpperCase) return "Password must have at least 1 uppercase letter";
    if (!hasLowerCase) return "Password must have at least 1 lowercase letter";
    if (!hasMinLength) return "Password must be at least 6 characters long";
    return "";
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photo.value;
    const password = form.password.value;

    const passwordError = validatePassword(password);
    if (passwordError) {
      setError(passwordError);
      return;
    }

    setLoading(true);
    createUser(email, password)
      .then((res) => {
        updateProfile(res.user, { displayName: name, photoURL })
          .then(() => {
            setUser({ ...res.user });
            toast.success("Signup successful! 🐾");
            navigate("/");
          })
          .catch((err) => {
            console.error(err);
            toast.error("Profile update failed!");
          });
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        toast.error("Signup failed!");
      })
      .finally(() => setLoading(false));
  };

  const handleGoogleSignup = () => {
    googleSignIn()
      .then((res) => {
        setUser(res.user);
        toast.success("Logged in with Google! 🐾");
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Google Sign-in failed!");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-blue-50 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-blue-800 mb-6">
          Signup for WarmPaws 🐾
        </h2>

        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

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
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-400 focus:outline-none"
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
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition"
          >
            Register
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>

          <div className="mt-4">
            <button
              onClick={handleGoogleSignup}
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

export default Signup;
