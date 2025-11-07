import React from "react";
import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-100 via-blue-100 to-purple-100 text-center px-6">
      <AlertTriangle size={80} color="red" className=" mb-6" />
      <h1 className="text-5xl font-bold text-gray-800 mb-3">404</h1>
      <h2 className="text-2xl font-semibold text-blue-700 mb-2">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-600 mb-8 max-w-md">
        The page you’re looking for doesn’t exist or has been moved. Don’t worry
        — let’s get you back home!
      </p>
      <Link
        to="/"
        className="bg-gradient-to-r from-blue-500 to-pink-500 text-white px-6 py-2 rounded-lg hover:opacity-90 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
