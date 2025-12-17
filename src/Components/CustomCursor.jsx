import { useEffect, useState } from 'react';
import '../styles/cursor.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    // Only enable on devices that support hover (i.e., not touch-only devices)
    const supportsHover = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(hover: hover)').matches;
    setEnabled(!!supportsHover);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updatePosition);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      className="custom-cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div className="cursor-glow" />
      <div className="cursor-outer-ring" />
      <div className="cursor-core" />
    </div>
  );
};

export default CustomCursor;