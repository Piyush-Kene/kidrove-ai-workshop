const details = [
  {
    title: "Age Group",
    value: "8-14 Years",
  },
  {
    title: "Duration",
    value: "4 Weeks",
  },
  {
    title: "Mode",
    value: "Online",
  },
  {
    title: "Fee",
    value: "₹2,999",
  },
  {
    title: "Start Date",
    value: "15 July 2026",
  },
];

const WorkshopDetails = () => {
    return (
        <section className="py-24 bg-slate-100">
            <div className="max-w-6xl mx-auto px-6">

                <h2 className="text-4xl font-bold mb-14 text-center">
                    Workshop Details
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">

                    {details.map((item) => (
                        <div
                            key={item.title}
                            className="shadow-lg rounded-xl p-6 text-center"
                        >
                            <h3 className="text-slate-500 text-sm uppercase tracking-wide">
                                {item.title}
                            </h3>

                            <p className="text-xl font-semibold mt-2">{item.value}</p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default WorkshopDetails;