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

  // Array of different color classes for each FAQ item with specified colors (more translucent)
  const colorVariants = [
    // Red: #f50e40
    'hover:border-[#f50e40]/10 hover:bg-[#f50e40]/5 group-hover:border-[#f50e40]/15',
    // Blue: #420ef5
    'hover:border-[#420ef5]/10 hover:bg-[#420ef5]/5 group-hover:border-[#420ef5]/15',
    // Yellow: #f5da0e
    'hover:border-[#f5da0e]/15 hover:bg-[#f5da0e]/5 group-hover:border-[#f5da0e]/20',
    // Green: #21b924
    'hover:border-[#21b924]/10 hover:bg-[#21b924]/5 group-hover:border-[#21b924]/15',
    // Grey: #808080
    'hover:border-[#808080]/10 hover:bg-[#808080]/5 group-hover:border-[#808080]/15',
  ];

  // Text colors for each item
  const textColors = [
    'group-hover:text-[#f50e40]',     // Red
    'group-hover:text-[#420ef5]',     // Blue
    'group-hover:text-[#f5da0e]',     // Yellow
    'group-hover:text-[#21b924]',     // Green
    'group-hover:text-[#808080]',     // Grey
  ];

  // Function to get color class based on index
  const getColorClass = (index) => {
    const colorIndex = index % colorVariants.length;
    return {
      bgClass: colorVariants[colorIndex],
      textClass: textColors[colorIndex]
    };
  };

  return (
    <div id="faq" className="pb-8 md:pb-12">
      <h2 className="text-3xl font-bold text-center mb-8 md:mb-10 text-gray-900 dark:text-gray-100">FAQ</h2>

      <div className="space-y-3 max-w-3xl mx-auto px-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`bg-[#98c2c9]/40 dark:bg-[#1f2937]/70 backdrop-blur-md rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 border border-white/20 dark:border-white/10 overflow-hidden group ${getColorClass(index).bgClass}`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-4 py-3 sm:px-5 sm:py-4 text-left flex items-center justify-between
             transition-all duration-300 group-hover:bg-white/10
             cursor-none"
            >
              <span
                className={`font-semibold text-gray-800 dark:text-gray-100 pr-4 transition-colors duration-300 ${getColorClass(index).textClass}`}
              >
                {faq.question}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 text-gray-600 dark:text-gray-300 flex-shrink-0 transition-all duration-300 ${openIndex === index ? "transform rotate-180" : ""
                  } ${getColorClass(index).textClass}`}
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
              className={`overflow-hidden transition-all duration-200 ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
              <div className="px-4 py-3 sm:px-5 sm:py-4 text-xs sm:text-sm text-gray-800 dark:text-gray-300 border-t border-white/10 dark:border-white/10 group-hover:border-white/20 transition-colors duration-300">
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
