const outcomes = [
  "Understand AI Fundamentals",
  "Build Robotics Projects",
  "Learn Programming Logic",
  "Work With Sensors",
  "Create AI Applications"
];

const LearningOutcomes = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-10 text-center">
          Learning Outcomes
        </h2>

        <ul className="space-y-4">

          {outcomes.map((item) => (
            <li
              key={item}
              className="bg-white p-4 rounded-lg shadow"
            >
              ✓ {item}
            </li>
          ))}

        </ul>

      </div>
    </section>
  );
};

export default LearningOutcomes;