import React from "react";
import { Link } from "react-router-dom";
import {
  PawPrint,
  Scissors,
  Bath,
  Stethoscope,
  GraduationCap,
  HeartPulse,
  Home,
  Sparkles,
} from "lucide-react";

const services = [
  {
    id: 1,
    icon: <PawPrint size={40} className="text-blue-600" />,
    title: "Pet Adoption Support",
    description:
      "Find your perfect furry friend this winter with our adoption guidance and trusted partner shelters.",
  },
  {
    id: 2,
    icon: <Scissors size={40} className="text-pink-500" />,
    title: "Grooming & Care",
    description:
      "Professional grooming to keep your pets clean, healthy, and cozy during the cold season.",
  },
  {
    id: 3,
    icon: <Bath size={40} className="text-purple-600" />,
    title: "Winter Essentials",
    description:
      "Buy comfy jackets, warm beds, and winter gear designed for your pet’s comfort.",
  },
  {
    id: 4,
    icon: <Stethoscope size={40} className="text-green-600" />,
    title: "Vet Consultation",
    description:
      "Consult experienced veterinarians online or in-person for health advice and checkups.",
  },
  {
    id: 5,
    icon: <GraduationCap size={40} className="text-orange-500" />,
    title: "Pet Training Programs",
    description:
      "Enroll your pet in fun, skill-building sessions with certified trainers for better behavior.",
  },
  {
    id: 6,
    icon: <HeartPulse size={40} className="text-red-500" />,
    title: "Emergency Health Support",
    description:
      "Access 24/7 emergency assistance for your pet’s urgent medical needs with trusted vets.",
  },
  {
    id: 7,
    icon: <Home size={40} className="text-yellow-500" />,
    title: "Pet Boarding & Daycare",
    description:
      "Leave your pets in safe hands while you’re away — we ensure warmth, fun, and care.",
  },
  {
    id: 8,
    icon: <Sparkles size={40} className="text-teal-500" />,
    title: "Pet Spa & Massage",
    description:
      "Treat your pets to a relaxing spa and massage experience — because they deserve it!",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-pink-50 to-purple-50 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">
          Our Winter Care Services
        </h1>
        <p className="text-gray-700 mb-10">
          Explore a variety of services designed to make your pets feel loved,
          safe, and warm this season.
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white shadow-lg rounded-2xl p-6 flex flex-col justify-between items-center hover:shadow-2xl transition transform hover:scale-105"
            >
              <div className="flex flex-col items-center">
                {service.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm text-center">
                  {service.description}
                </p>
              </div>

              {/* "Learn More" stays pinned to bottom */}
              <Link
                to="#"
                className="mt-6 text-blue-600 font-medium hover:underline"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
