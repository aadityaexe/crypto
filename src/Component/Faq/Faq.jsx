import { useState } from "react";

const faqs = [
  {
    question: "Ipsum is simply dummy the printing?",
    answer:
      "It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
  },
  {
    question: "Dummy the printing and type setting?",
    answer:
      "It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
  },
];

const Faq = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className=" text-white">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
        <p className="text-lg mb-12">
          Lorem Ipsum is simply dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries.
        </p>
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-700 rounded-md p-6">
              <button
                className="flex items-center justify-between w-full text-left text-xl font-bold mb-2"
                onClick={() => handleToggle(index)}
              >
                {faq.question}
                <span
                  className={`transition-transform duration-300 ${
                    expandedIndex === index ? "rotate-180" : ""
                  }`}
                >
                  &#9660; {/* Unicode down arrow */}
                </span>
              </button>
              {expandedIndex === index && (
                <p className="text-lg mt-4">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
