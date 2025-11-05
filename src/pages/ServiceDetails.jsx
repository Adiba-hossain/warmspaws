// ServiceDetails.jsx
import React, { useState, useContext, useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "../components/Loading";
import toast, { Toaster } from "react-hot-toast";

const ServiceDetails = () => {
  const data = useLoaderData(); // from services.json
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

    // Just show success toast, no backend
    setTimeout(() => {
      toast.success(`Service booked successfully for ${formData.name}!`);
      setFormLoading(false);
      setFormData({ name: user.displayName || "", email: user.email || "" });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-50 py-10 px-4">
      <Toaster position="top-center" />
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8 space-y-6">
        <h2 className="text-3xl font-bold text-blue-800">
          {service.serviceName}
        </h2>
        <img
          src={service.image}
          alt={service.serviceName}
          className="w-full h-64 object-cover rounded-lg"
        />

        <div className="space-y-2">
          <p>
            <strong>Provider:</strong> {service.providerName}
          </p>
          <p>
            <strong>Email:</strong> {service.providerEmail}
          </p>
          <p>
            <strong>Category:</strong> {service.category}
          </p>
          <p>
            <strong>Price:</strong> ${service.price}
          </p>
          <p>
            <strong>Rating:</strong> {service.rating}
          </p>
          <p>
            <strong>Available Slots:</strong> {service.slotsAvailable}
          </p>
          <p>
            <strong>Description:</strong> {service.description}
          </p>
        </div>

        <hr className="my-4" />

        <h3 className="text-xl font-semibold text-blue-700">
          Book This Service
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
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
            className="w-full bg-gradient-to-r from-blue-500 to-pink-500 text-white py-2 rounded-lg hover:scale-105 transition transform"
          >
            {formLoading ? "Booking..." : "Book Now"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ServiceDetails;
