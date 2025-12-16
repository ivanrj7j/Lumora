import React from "react";

const StatCard = ({ title, subtitle, children }) => (
  <div className="flex flex-col items-center text-center bg-white/60 backdrop-blur-md p-4 rounded-xl shadow-md w-40">
    <div className="mb-2">{children}</div>
    <div className="text-sm font-semibold">{title}</div>
    <div className="text-xs text-gray-600">{subtitle}</div>
  </div>
);

const About = () => {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert("Message sent (demo)");
  // };
  return (
    <>
      <h2 className="text-3xl font-extrabold mb-10 text-center">ABOUT</h2>

      <section className="mb-10">
        <h3 className="text-lg font-bold text-center">
          GDG ON CAMPUS – MACE
        </h3>
        <p className="mt-2 text-sm text-gray-700">
          GDG On Campus – Mar Athanasius College of Engineering is a thriving
          community of innovators, designers, and developers united by
          curiosity and collaboration. Our chapter focuses on learning by
          doing — from hands-on workshops and speaker sessions to full-fledged
          hackathons and design challenges.
        </p>
      </section>

      <section className="mb-10">
        <h3 className="text-lg font-bold text-center">LUMORA</h3>
        <p className="mt-2 text-sm text-gray-700">
          LUMORA is an 18-hour design-focused hackathon organized by GDG
          MACE, aimed at nurturing creativity, innovation, and problem-solving
          through user-centered design. Participants will explore modern
          design challenges and craft interactive prototypes that blend
          creativity with functionality.
        </p>
      </section>

      <section className="mb-10">
        <h4 className="font-bold mb-6 text-center">
          PARTICIPATION DETAILS
        </h4>
        <div className="flex justify-center gap-6">
          <StatCard title="Team Size" subtitle="1–3 members">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-4-4h-1M9 20H4v-2a4 4 0 014-4h1m6-5a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </StatCard>

          <StatCard title="Registration Fee" subtitle="Free of cost">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2M12 2v2m0 16v2" />
            </svg>
          </StatCard>

          <StatCard title="Eligibility" subtitle="Open to all">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m4-4h.01M12 6v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </StatCard>
        </div>
      </section>

      <section className="mb-10">
        <h4 className="font-bold mb-2 text-center">
          SHORTLISTING PROCESS
        </h4>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
          <li>Registered participants will undergo a preliminary shortlisting round.</li>
          <li>Participants will be given a design challenge or task to complete.</li>
          <li>Submissions will be evaluated based on creativity, usability, and coherence.</li>
          <li>Top teams will be shortlisted and invited to the offline hackathon.</li>
        </ul>
      </section>

      
        {/* <section className="mb-8">
          <h4 className="font-bold mb-2">HACKATHON FORMAT</h4>
          <p className="text-sm text-gray-700">
            The offline hackathon will be an 18-hour continuous design sprint where
            teams ideate, design, and present UI/UX solutions for real-world
            problems. Participants will receive mentorship and feedback from
            industry experts.
          </p>
        </section> */}

        {/* <section>
          <h4 className="text-2xl font-bold mb-4">CONTACT US</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white/70 rounded-xl border border-gray-200">
              <h5 className="font-semibold mb-2">Contact Information</h5>
              <p className="text-sm text-gray-700">Email: gdgoncampus@example.com</p>
              <p className="text-sm text-gray-700">Phone: +91 98765 43210</p>
              <p className="text-sm text-gray-700 mt-2">Mar Athanasius College of Engineering</p>
              <div className="flex gap-3 mt-4">
                <span className="h-8 w-8 rounded-full bg-gray-800 text-white flex items-center justify-center text-sm">f</span>
                <span className="h-8 w-8 rounded-full bg-gray-800 text-white flex items-center justify-center text-sm">t</span>
                <span className="h-8 w-8 rounded-full bg-gray-800 text-white flex items-center justify-center text-sm">i</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 bg-white/70 rounded-xl border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input required placeholder="First name" className="p-2 rounded-md border" />
                <input required placeholder="Last name" className="p-2 rounded-md border" />
              </div>
              <div className="mt-3">
                <input required type="email" placeholder="Email" className="w-full p-2 rounded-md border" />
              </div>
              <div className="mt-3">
                <textarea required placeholder="Message" rows={4} className="w-full p-2 rounded-md border" />
              </div>
              <div className="mt-4 text-right">
                <button type="submit" className="px-4 py-2 bg-black text-white rounded-full">Send Message</button>
              </div>
            </form>
          </div>
        </section> */}
    </>
  );
};

export default About;
