import React from "react";

const StatCard = ({ title, subtitle, children }) => (
  <div className="flex flex-col items-center text-center bg-white/60 backdrop-blur-md p-4 rounded-xl shadow-md w-40">
    <div className="mb-2">{children}</div>
    <div className="text-sm font-semibold">{title}</div>
    <div className="text-xs text-gray-600">{subtitle}</div>
  </div>
);

const About = () => {
  return (
    <>
      <h2 className="text-3xl font-extrabold mb-10 text-center">ABOUT</h2>

      {/* Combined About Section */}
      <section className="mb-10">
        <p className="mt-4 text-sm text-gray-700">
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
        <h4 className="font-bold mb-6 text-center">
          PARTICIPATION DETAILS
        </h4>
        <div className="flex justify-center gap-6 flex-wrap">
          <StatCard title="Team Size" subtitle="1–3 members">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a4 4 0 00-4-4h-1M9 20H4v-2a4 4 0 014-4h1m6-5a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </StatCard>

          <StatCard title="Registration Fee" subtitle="Free of cost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2M12 2v2m0 16v2"
              />
            </svg>
          </StatCard>

          <StatCard title="Eligibility" subtitle="Open to all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m4-4h.01M12 6v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </StatCard>
        </div>
      </section>
    </>
  );
};

export default About;
