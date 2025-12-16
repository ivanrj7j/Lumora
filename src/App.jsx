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


      <div className="relative">

        <div className="relative z-10">
          <section id="about" className="relative" style={{ minHeight: '100vh' }}>
            <div
              className="absolute inset-0 -z-10"
              style={{
                backgroundImage: 'url(/src/assets/full.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                filter: 'brightness(0.9)'
              }}
            />
            <div className="container mx-auto px-6 h-full flex items-center justify-center">
              <div className="max-w-4xl w-full bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg">
                <About />
              </div>
            </div>
          </section>
          
          <section id="timeline" className="relative" style={{ minHeight: '100vh' }}>
            <div
              className="absolute inset-0 -z-10"
              style={{
                backgroundImage: 'url(/src/assets/full.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                filter: 'brightness(0.9)'
              }}
            />
            <div className="container mx-auto px-6 h-full flex items-center justify-center">
              <div className="max-w-4xl w-full bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg">
                <Timeline />
              </div>
            </div>
          </section>
          
          <section id="faq" className="relative" style={{ minHeight: '100vh' }}>
            <div
              className="absolute inset-0 -z-10"
              style={{
                backgroundImage: 'url(/src/assets/full.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                filter: 'brightness(0.9)'
              }}
            />
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg">
                <FAQ />
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default App;
