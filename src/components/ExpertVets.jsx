import doc1 from "../assets/doc1.jpg";
import doc2 from "../assets/doc2.jpg";
import doc3 from "../assets/doc3.jpg";
import doc4 from "../assets/doc4.jpg";
const ExpertVets = () => {
  const vets = [
    {
      id: 1,
      name: "Dr. Mia Thompson",
      specialty: "Pet Nutrition Specialist",
      image: doc1,
    },
    {
      id: 2,
      name: "Dr. Ethan Lee",
      specialty: "Veterinary Surgeon",
      image: doc2,
    },
    {
      id: 3,
      name: "Dr. Olivia Garcia",
      specialty: "Animal Behavior Expert",
      image: doc3,
    },
    {
      id: 4,
      name: "Dr. Noah Carter",
      specialty: "Emergency Care Specialist",
      image: doc4,
    },
  ];

  return (
    <section className="bg-gradient-to-r from-blue-50 via-white to-blue-100 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-blue-800 mb-10">
          🩺 Meet Our Expert Vets
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {vets.map((vet) => (
            <div
              key={vet.id}
              className="bg-white rounded-2xl shadow-lg p-5 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <img
                src={vet.image}
                alt={vet.name}
                className="w-44 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-blue-200"
              />
              <h3 className="text-lg font-semibold text-blue-700">
                {vet.name}
              </h3>
              <p className="text-gray-600 text-sm mt-1">{vet.specialty}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertVets;
