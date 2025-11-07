//

import React, { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { getAuth } from "firebase/auth";

const ForgotPassword = () => {
  const { forgetPassword, loading: authLoading } = useContext(AuthContext);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const emailFromLogin = params.get("email") || "";

  const [email, setEmail] = useState(emailFromLogin);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (emailFromLogin) setEmail(emailFromLogin);
  }, [emailFromLogin]);

  const handleReset = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await forgetPassword(email);
      toast.success("Password reset email sent! Opening Gmail...");

      window.open("https://mail.google.com/", "_blank");

      const auth = getAuth();
      await auth.signOut();

      setLoading(false);
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-200 to-blue-100 p-4">
      <Toaster position="top-center" />
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-blue-800 mb-6">
          Reset Password
        </h2>

        <form onSubmit={handleReset} className="space-y-4">
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

          <button
            type="submit"
            disabled={loading || authLoading}
            className={`w-full py-2 rounded-lg text-white transition transform
              ${
                loading || authLoading
                  ? "bg-gradient-to-r from-blue-300 to-pink-300 cursor-not-allowed opacity-70"
                  : "bg-gradient-to-r from-blue-500 to-pink-500 hover:scale-105"
              }`}
          >
            {loading ? "Sending..." : "Reset Password"}
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600 text-sm">
          A password reset email has been sent. Gmail will open in a new tab —
          once you reset it, you can return here and log in again.
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
