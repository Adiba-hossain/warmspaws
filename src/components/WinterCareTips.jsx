const WinterCareTips = () => {
  const tips = [
    {
      id: 1,
      title: "Keep Your Pets Warm Indoors",
      description:
        "Limit outdoor walks and provide a cozy bed away from drafts or cold floors.",
      icon: "🐕",
    },
    {
      id: 2,
      title: "Protect Their Paws",
      description:
        "Use pet-safe balms or booties to prevent ice, salt, or snow from irritating their paws.",
      icon: "🧤",
    },
    {
      id: 3,
      title: "Feed for Warmth",
      description:
        "Slightly increase food portions to help maintain body heat during the cold months.",
      icon: "🍲",
    },
    {
      id: 4,
      title: "Stay Hydrated",
      description:
        "Make sure water doesn’t freeze — pets need hydration just as much in winter.",
      icon: "💧",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-blue-100 to-blue-50 py-16 relative z-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-blue-800 mb-10">
          🥼 Winter Care Tips for Pets
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {tips.map((tip) => (
            <div
              key={tip.id}
              className="bg-white shadow-lg rounded-2xl p-6 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-5xl mb-4">{tip.icon}</div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                {tip.title}
              </h3>
              <p className="text-gray-600 text-sm">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WinterCareTips;
