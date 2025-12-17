import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import gdg from "../../assets/gdg2.png";

const Navbar = ({ theme = 'system', onSetTheme = () => {} }) => {
  const [isOpen, setIsOpen] = useState(false);

  const prefersDark = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const effectiveIsDark = theme === 'dark' || (theme === 'system' && prefersDark);

  const handleToggleTheme = () => {
    onSetTheme(effectiveIsDark ? 'light' : 'dark');
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const navItems = [
    { label: "HOME", id: "home", color: "#21b924" },
    { label: "ABOUT", id: "about", color: "#f50e40" },
    { label: "TIMELINE", id: "timeline", color: "#420ef5" },
    { label: "FAQ", id: "faq", color: "#f5da0e" }
  ];

  return (
    <>
      {/* GDG Logo - Top Left */}
      <div className="absolute top-6 left-6 md:left-10 z-30">
        <div className="flex flex-col items-center px-5 py-1 rounded-full bg-white/45 dark:bg-white/10 backdrop-blur-md border border-white/30 dark:border-white/10 shadow-lg">
          <img
            src={gdg}
            alt="Google Developer Groups Logo"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </div>
      </div>

      {/* Desktop Navigation - Top Right (only ABOUT and CONTACT) */}
      <div className="hidden md:flex items-center fixed top-6 right-10 z-30 px-3 py-2 rounded-full bg-[#98c2c9] dark:bg-[#1f2937] border border-white/30 dark:border-white/10 shadow-lg">
        {navItems.map((item) => (
          <div key={item.id} className={`group relative group-${item.id}`}>
            <button
              onClick={() => handleScroll(item.id)}
              className={`text-black/90 dark:text-white text-sm px-4 font-medium py-2 rounded-md transition-colors duration-200 border border-transparent hover:opacity-100`}
            >
              <span className={`transition-colors duration-200`}>
                {item.label}
              </span>
            </button>
            {/* only change text color on hover; remove background/border */}
            <style>{`
              .group-${item.id}:hover button span {
                color: ${item.color};
              }
            `}</style>
          </div>
        ))}
        <button onClick={handleToggleTheme} className="ml-2 p-2 rounded-full bg-white/30 dark:bg-white/10 border border-white/20 dark:border-white/10 text-black dark:text-white">
          {effectiveIsDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>

      {/* Mobile Hamburger Button */}
      <button
        className="md:hidden fixed top-7 right-6 z-30 text-black dark:text-white bg-white/45 dark:bg-white/10 backdrop-blur-md border border-white/30 dark:border-white/10 rounded-full p-2 shadow-lg"
        onClick={() => setIsOpen(true)}
      >
        <Menu size={25} />
      </button>

      {/* Mobile Blur Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white/45 dark:bg-neutral-900/70 backdrop-blur-md border-l border-white/30 dark:border-white/10 z-50 transform transition-transform duration-300 md:hidden
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          className="absolute top-5 right-5 text-black dark:text-white"
          onClick={() => setIsOpen(false)}
        >
          <X size={28} />
        </button>

        <div className="mt-24 flex flex-col gap-6 px-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className={`text-black/90 dark:text-white text-lg text-left font-medium px-4 py-2 rounded-lg transition-colors duration-150 hover:backdrop-blur-sm border border-transparent`}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = item.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '';
                }}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4">
            <button onClick={handleToggleTheme} className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/30 dark:bg-white/10 border border-white/20 dark:border-white/10 text-black dark:text-white">
              {effectiveIsDark ? <Sun size={16} /> : <Moon size={16} />}
              <span className="font-medium text-sm">Toggle Theme</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;