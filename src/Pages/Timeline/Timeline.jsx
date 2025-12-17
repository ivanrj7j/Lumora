import React from "react";

const colorVariants = [
  'hover:border-[#f50e40]/10 hover:bg-[#f50e40]/5 group-hover:border-[#f50e40]/15',
  'hover:border-[#420ef5]/10 hover:bg-[#420ef5]/5 group-hover:border-[#420ef5]/15',
  'hover:border-[#f5da0e]/15 hover:bg-[#f5da0e]/5 group-hover:border-[#f5da0e]/20',
  'hover:border-[#21b924]/10 hover:bg-[#21b924]/5 group-hover:border-[#21b924]/15',
  'hover:border-[#808080]/10 hover:bg-[#808080]/5 group-hover:border-[#808080]/15',
];

const textColors = [
  'group-hover:text-[#f50e40]',
  'group-hover:text-[#420ef5]',
  'group-hover:text-[#f5da0e]',
  'group-hover:text-[#21b924]',
  'group-hover:text-[#808080]',
];

const accents = ['#f50e40', '#420ef5', '#f5da0e', '#21b924', '#808080'];

const getColorClass = (index) => {
  const i = index % colorVariants.length;
  return {
    bgClass: colorVariants[i],
    textClass: textColors[i],
    accent: accents[i],
  };
};


const Timeline = () => {
  const events = [
    { id: 1, date: "20 Dec 2025", title: "Registration Live", description: "Registration opens for all participants." },
    { id: 2, date: "22 Dec 2025", title: "Prize Pool Reveal", description: "Exciting prizes will be announced." },
    { id: 3, date: "30 Dec 2025", title: "Sponsors Announcement", description: "Meet our amazing sponsors." },
    { id: 4, date: "20 Jan 2026", title: "Registration Close", description: "Last day to register for the event." },
    { id: 5, date: "31 Jan 2026", title: "Event Live", description: "The hackathon officially begins!" },
  ];

  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
          TIMELINE
        </h2>

        <div className="relative">
          {/* Center Line (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-900 -translate-x-1/2" />

          {/* Single vertical line for mobile to avoid repeating per-item lines */}
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-900" />

          <div className="space-y-12">
            {events.map((event, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div key={event.id} className="relative group">
                  {/* Desktop Layout */}
                  <div className="hidden md:grid md:grid-cols-2 items-center">
                    {isLeft ? (
                      <>
                        <div className="pr-8 text-right">
                          <TimelineCard event={event} index={index} />
                        </div>
                        <div className="relative h-full">
                          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-2 border-white shadow-md z-10" />
                          <div className="absolute left-8 top-1/2 -translate-y-1/2 text-sm font-semibold text-blue-600 dark:text-blue-300 whitespace-nowrap">
                            {event.date}
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="relative h-full">
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-2 border-white shadow-md z-10" />
                          <div className="absolute right-8 top-1/2 -translate-y-1/2 text-sm font-semibold text-blue-600 dark:text-blue-300 whitespace-nowrap">
                            {event.date}
                          </div>
                        </div>
                        <div className="pl-8">
                          <TimelineCard event={event} index={index} />
                        </div>
                      </>
                    )}
                  </div>

                  {/* Mobile Layout */}
                  <div className="md:hidden relative pl-12">
                    <div className="absolute left-6 top-5 w-3 h-3 rounded-full bg-blue-500 border-2 border-white -translate-x-1/2" />
                    <div className="pl-4">
                      <span className="block text-sm font-semibold text-blue-600 dark:text-blue-300 mb-2">
                        {event.date}
                      </span>
                      <TimelineCard event={event} index={index} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineCard = ({ event, index }) => {
  const { bgClass, textClass } = getColorClass(index);

  return (
    <div
      className={`
        bg-[#98c2c9]/40 dark:bg-[#1f2937]/70
        backdrop-blur-md
        p-5 rounded-xl
        shadow-sm hover:shadow-lg
        transition-all duration-300
        border border-white/20 dark:border-white/10
        inline-block text-left
        relative z-20
        ${bgClass}
      `}
    >
      <h3
        className={`text-base font-semibold mb-1
                    text-gray-900 dark:text-gray-100
                    transition-colors duration-300
                    ${textClass}`}
      >
        {event.title}
      </h3>
      <p className="text-sm text-gray-800 dark:text-gray-300">
        {event.description}
      </p>
    </div>
  );
};


export default Timeline;
