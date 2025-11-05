import React, { useState, useContext, useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "../components/Loading";
import toast, { Toaster } from "react-hot-toast";
import {
  FaEnvelope,
  FaTag,
  FaStar,
  FaUser,
  FaDollarSign,
  FaBoxOpen,
} from "react-icons/fa";

const ServiceDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const { loading: authLoading, user } = useContext(AuthContext);

  const [service, setService] = useState(null);
  const [formData, setFormData] = useState({
    name: user?.displayName || "",
    email: user?.email || "",
  });
  const [formLoading, setFormLoading] = useState(false);

  useEffect(() => {
    const foundService = data.find((s) => s.serviceId === parseInt(id));
    setService(foundService);
  }, [data, id]);

  if (authLoading || !service) return <Loading />;

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormLoading(true);

    setTimeout(() => {
      toast.success(`Service booked successfully for ${formData.name}!`);
      setFormLoading(false);
      setFormData({ name: "", email: "" });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-50 py-10 px-4">
      <Toaster position="top-center" />
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8 space-y-8 border border-blue-100">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-2">
            {service.serviceName}
          </h2>
          <p className="text-gray-600 italic">
            Warm care and comfort, tailored for your furry friend ❄️
          </p>
        </div>

        {/* Image */}
        <div className="overflow-hidden rounded-xl shadow-md">
          <img
            src={service.image}
            alt={service.serviceName}
            className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Service Info */}
        <div className="grid sm:grid-cols-2 gap-4 text-gray-700">
          <div className="flex items-center gap-2 bg-blue-50 p-3 rounded-lg shadow-sm">
            <FaUser className="text-blue-500" />
            <span>
              <strong>Provider:</strong> {service.providerName}
            </span>
          </div>

          <div className="flex items-center gap-2 bg-blue-50 p-3 rounded-lg shadow-sm">
            <FaEnvelope className="text-blue-500" />
            <span>
              <strong>Email:</strong> {service.providerEmail}
            </span>
          </div>

          <div className="flex items-center gap-2 bg-blue-50 p-3 rounded-lg shadow-sm">
            <FaBoxOpen className="text-blue-500" />
            <span>
              <strong>Available Slots:</strong> {service.slotsAvailable}
            </span>
          </div>

          <div className="flex items-center gap-2 bg-blue-50 p-3 rounded-lg shadow-sm">
            <FaDollarSign className="text-blue-500" />
            <span>
              <strong>Price:</strong> ${service.price}
            </span>
          </div>

          <div className="flex items-center gap-2 bg-blue-50 p-3 rounded-lg shadow-sm">
            <FaStar className="text-yellow-500" />
            <span>
              <strong>Rating:</strong> {service.rating}
            </span>
          </div>

          <div className="flex items-center gap-2 bg-blue-50 p-3 rounded-lg shadow-sm">
            <FaTag className="text-blue-500" />
            <span>
              <strong>Category:</strong> {service.category}
            </span>
          </div>
        </div>

        {/* Description Section */}
        <div className="relative mt-6 bg-gradient-to-r from-blue-50 via-pink-50 to-blue-100 border border-blue-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
          <div className="absolute -top-4 left-6 bg-gradient-to-r from-blue-500 to-pink-500 text-white text-sm px-3 py-1 rounded-full shadow">
            Description
          </div>
          <p className="text-gray-700 leading-relaxed mt-2 text-justify">
            {service.description}
          </p>
        </div>

        {/* Booking Form */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4 text-center">
            Book This Service 🐾
          </h3>
          <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-gradient-to-br from-blue-50 to-pink-50 p-6 rounded-xl border border-blue-100 shadow-md"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={formLoading}
              className="w-full bg-gradient-to-r from-blue-500 to-pink-500 text-white py-2 rounded-lg font-medium hover:scale-105 transition-transform duration-300 shadow-md"
            >
              {formLoading ? "Booking..." : "Book Now"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
