import { useEffect, useState } from 'react';
import Navbar from './Pages/Navbar/Navbar.jsx';
import HeroWithClouds from './Pages/Hero/Hero';
import About from './Pages/About/About';
import Timeline from './Pages/Timeline/Timeline.jsx';
import FAQ from './Pages/FAQ/faq.jsx';
import Footer from './Pages/Footer/Footer.jsx';
import CustomCursor from './Components/CustomCursor';
import fullBg from "./assets/full.jpg";

function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme') || 'system';
    } catch (e) {
      console.log('Error',e);
    }
  });

  // Determine whether dark should be active (effective theme)
  const prefersDark = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const effectiveIsDark = theme === 'dark' || (theme === 'system' && prefersDark);

  useEffect(() => {
    const root = document.documentElement;
    if (effectiveIsDark) root.classList.add('dark');
    else root.classList.remove('dark');
  }, [effectiveIsDark]);

  const setThemePreference = (newPref) => {
    setTheme(newPref);
    try {
      localStorage.setItem('theme', newPref);
    } catch (e) {
      console.log('Error',e);
    }
  };

  const backgroundStyle = effectiveIsDark
    ? { background: 'linear-gradient(135deg, #071022 0%, #071a2b 30%, #0b1020 65%, #071022 100%)' }
    : { background: 'linear-gradient(135deg, #bfffe0 0%, #dcfff4 30%, #e6ebff 65%, #dff3ff 100%)' };

  return (
    <div
      className="min-h-screen relative overflow-x-hidden cursor-none"
      style={backgroundStyle}
    >
      <CustomCursor />
      <Navbar theme={theme} onSetTheme={setThemePreference} />
      <section id="home" className="relative z-10">
        <HeroWithClouds />
      </section>

      {/* Spacer between Hero and About */}
      <div className="relative z-10" style={{ height: '1px', marginTop: '-1px' }}></div>

      <div className="relative">

        <div className="relative z-10">
          <section id="about" className="relative pt-12" style={{ minHeight: '85vh' }}>
            <div
              className="absolute inset-0 -z-10"
              style={{
                backgroundImage: `url(${fullBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                filter: 'brightness(0.9)'
              }}
            />
            <div className="container mx-auto px-6 h-full flex items-start justify-center pt-12">
              <div className="max-w-4xl w-full bg-white/30 dark:bg-neutral-900/40 backdrop-blur-md rounded-xl p-8 shadow-lg">
                <About />
              </div>
            </div>
          </section>
          
          <section id="timeline" className="relative pt-12" style={{ minHeight: '85vh' }}>
            <div
              className="absolute inset-0 -z-10"
              style={{
                backgroundImage: `url(${fullBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                filter: 'brightness(0.9)'
              }}
            />
            <div className="container mx-auto px-6 h-full flex items-start justify-center pt-12">
              <div className="max-w-4xl w-full bg-white/30 dark:bg-neutral-900/40 backdrop-blur-md rounded-xl p-8 shadow-lg">
                <Timeline />
              </div>
            </div>
          </section>
          
          <section id="faq" className="relative pt-8" style={{ minHeight: '65vh' }}>
            <div
              className="absolute inset-0 -z-10"
              style={{
                backgroundImage: `url(${fullBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                filter: 'brightness(0.9)'
              }}
            />
            <div className="container mx-auto px-6 h-full flex items-start justify-center pt-8">
              <div className="max-w-4xl w-full bg-white/30 dark:bg-neutral-900/40 backdrop-blur-md rounded-xl p-8 shadow-lg">
                <FAQ />
              </div>
            </div>
          </section>

          {/* small gap so we can see background image below FAQ before footer */}
          <section className="relative h-36">
            <div
              className="absolute inset-0 -z-10"
              style={{
                backgroundImage: `url(${fullBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                filter: 'brightness(0.9)'
              }}
            />
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default App;
