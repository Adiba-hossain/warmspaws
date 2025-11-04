import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-200 to-blue-100">
      {/* Animated Snowflake Loader */}
      <div className="relative flex justify-center items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
        <span className="absolute text-4xl animate-pulse">❄️</span>
      </div>

      {/* Text below loader */}
      <p className="mt-6 text-blue-800 font-semibold text-lg animate-pulse">
        Warming up your experience...
      </p>
    </div>
  );
};

export default Loading;
