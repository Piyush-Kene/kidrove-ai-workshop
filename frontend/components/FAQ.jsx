import { useState } from "react";

const faqs = [
  {
    question: "Who can join this workshop?",
    answer:
      "Children aged 8–14 years can participate in the workshop.",
  },
  {
    question: "Do students need prior coding experience?",
    answer:
      "No. The workshop is beginner-friendly and starts from the fundamentals.",
  },
  {
    question: "Will students receive a certificate?",
    answer:
      "Yes. Every participant will receive a certificate after successfully completing the workshop.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <button onClick={() => toggleFAQ(index)}
                className=" w-full text-left px-6 py-5 flex justify-between items-center font-semibold cursor-pointer "
              >
                {faq.question}

                <span className="text-2xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              {activeIndex === index && (
                <div className="px-6 pb-5 text-slate-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default FAQ;