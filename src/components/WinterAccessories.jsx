import sweater from "../assets/sweater.jpg";
import wool from "../assets/wool.jpg";
import boot from "../assets/boot.jpg";
import bed from "../assets/bed.jpg";

const WinterAccessories = () => {
  const accessories = [
    {
      id: 1,
      img: sweater,
      name: "Dog Winter Coat",
      description: "Keep your dog warm and stylish during chilly walks.",
      price: "$25",
    },
    {
      id: 2,
      img: wool,
      name: "Cat Wool Sweater",
      description: "Soft and cozy sweater for indoor and outdoor warmth.",
      price: "$20",
    },
    {
      id: 3,
      img: boot,
      name: "Pet Booties",
      description: "Protect your pet's paws from ice, snow, and salt.",
      price: "$15",
    },
    {
      id: 4,
      img: bed,
      name: "Cozy Pet Bed",
      description: "Soft bed for pets to snuggle in during cold nights.",
      price: "$45",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-blue-50 to-blue-100 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-blue-800 mb-10">
          🧣 Cozy Winter Accessories for Pets
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {accessories.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-2xl p-4 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                {item.name}
              </h3>
              <p className="text-gray-600 text-sm mb-2">{item.description}</p>
              <p className="font-semibold text-blue-700 mb-4">{item.price}</p>
              <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-full hover:scale-105 transition transform">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WinterAccessories;
