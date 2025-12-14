import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is LUMORA?",
      answer: "LUMORA is a design-focused hackathon by GDG On Campus – MACE, all about UI/UX, creativity, and solving real design problems in a fun, high-energy environment.",
    },
    {
      question: "Who can join?",
      answer: "Anyone who's into design or UI/UX can join. You can participate solo or in a team of up to 3, and yes — it's completely free.",
    },
    {
      question: "How does the selection work?",
      answer: "First, you'll complete an online design challenge. The top 40 teams get shortlisted and invited to the 18-hour offline hackathon.",
    },
    {
      question: "What happens during the hackathon?",
      answer: "You'll design, brainstorm, and build UI/UX solutions in a fast-paced sprint, with mentors guiding you, and end by presenting your work to judges.",
    },
    {
      question: "Why should I participate?",
      answer: "You'll gain hands-on design experience, build your portfolio, get mentored by experts, meet like-minded designers, and win certificates and prizes.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="pb-8 md:pb-12">
      <h2 className="text-3xl font-bold text-center mb-8 md:mb-10">FAQ</h2>
      
      <div className="space-y-3 max-w-3xl mx-auto px-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white/80 backdrop-blur-sm rounded-lg shadow-sm hover:shadow transition-all duration-200 border border-gray-100 overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-4 py-3 sm:px-5 sm:py-4 text-left flex items-center justify-between hover:bg-white/60 transition-colors duration-200"
            >
              <span className="font-semibold text-gray-800 pr-4">
                {faq.question}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 text-gray-600 flex-shrink-0 transition-transform duration-300 ${
                  openIndex === index ? "transform rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-200 ${
                openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-4 py-3 sm:px-5 sm:py-4 text-xs sm:text-sm text-gray-600 border-t border-gray-100">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
