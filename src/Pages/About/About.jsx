import React from "react";
import { HugeiconsIcon } from '@hugeicons/react';
import { UserGroupIcon } from '@hugeicons/core-free-icons';
import { CheckmarkBadge03Icon } from '@hugeicons/core-free-icons';
import { MoneySecurityIcon } from '@hugeicons/core-free-icons';

const statColors = [
  {
    bg: 'hover:border-[#f50e40]/15 hover:bg-[#f50e40]/5',
    text: 'group-hover:text-[#f50e40]',
  },
  {
    bg: 'hover:border-[#420ef5]/15 hover:bg-[#420ef5]/5',
    text: 'group-hover:text-[#420ef5]',
  },
  {
    bg: 'hover:border-[#21b924]/15 hover:bg-[#21b924]/5',
    text: 'group-hover:text-[#21b924]',
  },
];


const StatCard = ({ title, subtitle, children, index }) => {
  const color = statColors[index % statColors.length];

  return (
    <div
      className={`
        group
        flex flex-col items-center text-center
        bg-[#98c2c9]/40 dark:bg-[#1f2937]/70
        backdrop-blur-md
        p-4 rounded-xl w-40
        border border-white/20 dark:border-white/10
        shadow-sm hover:shadow-lg
        transition-all duration-300
        ${color.bg}
      `}
    >
      <div
        className={`mb-2 transition-colors duration-300 ${color.text}`}
      >
        {children}
      </div>

      <div
        className={`text-sm font-semibold text-gray-900 dark:text-white
                    transition-colors duration-300 ${color.text}`}
      >
        {title}
      </div>

      <div className="text-xs text-gray-800 dark:text-white/70">
        {subtitle}
      </div>
    </div>
  );
};

const About = () => {
  return (
    <>
      <h2 className="text-3xl font-extrabold mb-10 text-center text-gray-900 dark:text-gray-100">ABOUT</h2>

      {/* Combined About Section */}
      <section className="mb-10">
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-100">
          GDG On Campus – Mar Athanasius College of Engineering is a vibrant
          community of innovators, designers, and developers driven by
          curiosity and collaboration. The chapter emphasizes learning by
          doing through hands-on workshops, speaker sessions, hackathons, and
          design challenges.LUMORA is an 18-hour design-focused hackathon organized by GDG MACE,
          created to foster creativity, innovation, and user-centered
          problem-solving. Participants engage with real-world design
          challenges and build interactive prototypes that seamlessly combine
          aesthetics with functionality, making LUMORA a platform for both
          learning and impactful creation.
        </p>
      </section>

      {/* Participation Details */}
      <section className="mb-10">
        <h4 className="font-bold mb-6 text-center text-gray-900 dark:text-gray-100">
          PARTICIPATION DETAILS
        </h4>
        <div className="flex justify-center gap-6 flex-wrap">
          <StatCard index={0} title="Team Size" subtitle="1–3 members">
            <HugeiconsIcon icon={UserGroupIcon} />
          </StatCard>

          <StatCard index={1} title="Registration Fee" subtitle="Free of cost">
            <HugeiconsIcon icon={MoneySecurityIcon} />
          </StatCard>

          <StatCard index={2} title="Eligibility" subtitle="Open to all">
            <HugeiconsIcon icon={CheckmarkBadge03Icon} />
          </StatCard>
        </div>
      </section>
    </>
  );
};

export default About;
