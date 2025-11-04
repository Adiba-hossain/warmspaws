import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const WinterServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error("Error loading services:", err));
  }, []);

  return (
    <section className="bg-gradient-to-b from-blue-50 to-blue-100 py-16 relative z-20">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold text-blue-800 mb-3">
          ❄️ Popular Winter Care Services
        </h2>
        <p className="text-gray-600">
          Keep your furry friends cozy and happy this winter with our most-loved
          pet care services.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto items-stretch">
        {services.map((service) => (
          <ServiceCard key={service.serviceId} service={service} />
        ))}
      </div>
    </section>
  );
};

export default WinterServices;
