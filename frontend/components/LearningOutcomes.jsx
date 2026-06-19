const outcomes = [
  {
    icon: "🤖",
    title: "Understand AI Fundamentals",
    description:
      "Learn how Artificial Intelligence works and where it is used in real-world applications.",
  },
  {
    icon: "🛠️",
    title: "Build Robotics Projects",
    description:
      "Create hands-on robotics projects using sensors, motors, and controllers.",
  },
  {
    icon: "💻",
    title: "Learn Programming Logic",
    description:
      "Develop problem-solving skills and coding fundamentals through practical exercises.",
  },
  {
    icon: "📡",
    title: "Work With Sensors",
    description:
      "Explore different sensors and understand how robots interact with their environment.",
  },
  {
    icon: "🚀",
    title: "Create AI Applications",
    description:
      "Build beginner-friendly AI projects and understand machine learning concepts.",
  },
];

const LearningOutcomes = () => {
  return (
    <section className="bg-slate-100 py-20">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Learning Outcomes
          </h2>

          <p className="text-slate-600 mt-3">
            Students will gain practical skills in AI, Robotics,
            Programming, and Project Building.
          </p>
        </div>

        <div className="space-y-5">

          {outcomes.map((item, index) => (
            <div
              key={item.title}
              className=" group  bg-gradient-to-r  from-white  to-slate-50 rounded-2xl p-6 border  border-slate-200  shadow-md hover:shadow-2xl  hover:border-blue-400 hover:-translate-y-1 transition-all not-last:duration-300"
            >
              <div className="flex items-start gap-5">

                <div
                  className="  w-14 h-14 flex items-center justify-center rounded-xl  bg-blue-100 text-3xl shrink-0 group-hover:scale-110 transition-transfor duration-300"
                >
                  {item.icon}
                </div>

                <div className="flex-1">

                  <div className="flex items-center gap-3 mb-2">

                    <h3 className="text-xl font-semibold text-slate-900">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default LearningOutcomes;