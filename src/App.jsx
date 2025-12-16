import Navbar from './Pages/Navbar/Navbar.jsx';
import HeroWithClouds from './Pages/Hero/Hero';
import About from './Pages/About/About';
import Timeline from './Pages/Timeline/Timeline.jsx';
import FAQ from './Pages/FAQ/faq.jsx';
import Footer from './Pages/Footer/Footer.jsx';

function App() {
  return (
    <div
      className="min-h-screen relative overflow-x-hidden"
      style={{
        background: 'linear-gradient(135deg, #bfffe0 0%, #dcfff4 30%, #e6ebff 65%, #dff3ff 100%)'
      }}
    >
      <Navbar />
      <section id="home" className="relative z-10">
        <HeroWithClouds />
      </section>

      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none -z-0">
        {/* Large Blue Circle - Top Left */}
        <div
          className="absolute rounded-full opacity-10"
          style={{
            top: "15%",
            left: "5%",
            width: "300px",
            height: "300px",
            background: "#4285f4",
            filter: "blur(50px)",
          }}
        />

        <div
          className="absolute rounded-full opacity-15"
          style={{
            top: "10%",
            left: "-120px",
            width: "320px",
            height: "320px",
            background: "#4285f4",
            filter: "blur(70px)",
          }}
        />

        {/* Purple Blob - Lower Left */}
        <div
          className="absolute rounded-[35%] opacity-15"
          style={{
            bottom: "15%",
            left: "-140px",
            width: "300px",
            height: "300px",
            background: "#8b5cf6",
            filter: "blur(80px)",
            transform: "rotate(-20deg)",
          }}
        />

        {/* Teal Accent - Mid Left */}
        <div
          className="absolute rounded-full opacity-10"
          style={{
            top: "55%",
            left: "-100px",
            width: "220px",
            height: "220px",
            background: "#14b8a6",
            filter: "blur(60px)",
          }}
        />

        {/* RIGHT SIDE DECORATIONS */}

        {/* Yellow Glow - Upper Right */}
        <div
          className="absolute rounded-full opacity-15"
          style={{
            top: "12%",
            right: "-110px",
            width: "260px",
            height: "260px",
            background: "#f59e0b",
            filter: "blur(60px)",
          }}
        />

        {/* Pink Blob - Center Right */}
        <div
          className="absolute rounded-[40%] opacity-15"
          style={{
            top: "45%",
            right: "-150px",
            width: "340px",
            height: "340px",
            background: "#ec4899",
            filter: "blur(90px)",
            transform: "rotate(35deg)",
          }}
        />

        {/* Teal Glow - Bottom Right */}
        <div
          className="absolute rounded-full opacity-10"
          style={{
            bottom: "10%",
            right: "-120px",
            width: "280px",
            height: "280px",
            background: "#14b8a6",
            filter: "blur(70px)",
          }}
        />
      </div>

      {/* Soft Green Glow - Left Center */}
      <div
        className="absolute rounded-full opacity-12"
        style={{
          top: "35%",
          left: "-160px",
          width: "260px",
          height: "260px",
          background: "#7ade9fff", // green-500
          filter: "blur(80px)",
        }}
      />


      {/* Soft Red Glow - Right Lower */}
      <div
        className="absolute rounded-full opacity-10"
        style={{
          bottom: "30%",
          right: "-160px",
          width: "260px",
          height: "260px",
          background: "#b20f0fff", // red-500
          filter: "blur(85px)",
        }}
      />


      {/* Combined About, Timeline, and FAQ in a single box */}
      <section id="about" className="py-4 md:py-6 relative z-10">
        <div className="max-w-6xl mx-4 md:mx-auto px-4 md:px-6 lg:px-8 my-0 md:my-4 bg-white/70 backdrop-blur-md rounded-3xl border border-white/30 shadow-xl p-8 md:p-12 relative z-20">
          <About />
          <div id="timeline">
            <Timeline />
          </div>
          <div id="faq">
            <FAQ />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
export default App;
