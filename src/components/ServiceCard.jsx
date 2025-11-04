import { Star, Info } from "lucide-react";
import { Link } from "react-router";

const ServiceCard = ({ service }) => {
  const { image, serviceName, rating, description, price, serviceId } = service;
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl relative group flex flex-col h-full">
      {/* Frosty Glow Border */}
      <div className="absolute inset-0 border-2 border-transparent rounded-2xl group-hover:border-blue-200 group-hover:shadow-[0_0_25px_5px_rgba(173,216,230,0.6)] transition-all duration-500 pointer-events-none"></div>

      <img
        src={image}
        alt={serviceName}
        className="h-52 w-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="p-5 flex flex-col justify-between h-[230px] relative z-10 h-full">
        <div>
          <h3 className="text-xl font-semibold text-blue-800 mb-1">
            {serviceName}
          </h3>
          <div className="flex items-center text-yellow-500 mb-2">
            <Star className="w-5 h-5 fill-yellow-400" />
            <span className="ml-1 text-gray-700">{rating}</span>
          </div>
          <p className="text-gray-600 text-sm line-clamp-2 mb-2">
            {description}
          </p>
          <p className="text-blue-700 font-semibold">${price}</p>
        </div>

        <Link
          to={`/service/${serviceId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-pink-500 text-white py-2 rounded-lg   hover:from-blue-700 hover:to-pink-700 transition-all shadow-md"
        >
          <Info className="w-4 h-4 mr-2" />
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
