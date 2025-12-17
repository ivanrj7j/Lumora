import React from 'react';
import bgImage from '../../assets/bg.jpg';
import titleImage from '../../assets/title.png';
import DevfolioButton from '../../Components/DevfolioButton';

const HeroWithClouds = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Optional: Add a slight overlay if image is too busy */}
      <div className="absolute inset-0 bg-white/10" />
      
      {/* CLOUD LAYERS - Now with blur */}
      <div className="absolute inset-0">
        {/* Cloud 1 - Pale Green */}
        <div 
          className="absolute w-80 h-40 bg-emerald-100/90 rounded-full"
          style={{
            top: '8%',
            left: '5%',
            opacity: 0.82,
            filter: 'blur(22px) saturate(1.4)',
            animation: 'moveRight1 18s ease-in-out infinite'
          }}
        />
        
        {/* Cloud 2 - Blue soft */}
        <div 
          className="absolute w-72 h-36 bg-blue-200/90 rounded-full"
          style={{
            top: '25%',
            right: '5%',
            opacity: 0.7,
            filter: 'blur(20px) saturate(1.4)',
            animation: 'moveLeft1 15s ease-in-out infinite'
          }}
        />
        
        {/* Cloud 3 - Yellow soft */}
        <div 
          className="absolute w-64 h-32 bg-yellow-100/90 rounded-full"
          style={{
            top: '45%',
            left: '10%',
            opacity: 0.65,
            filter: 'blur(18px) saturate(1.4)',
            animation: 'moveRight2 20s ease-in-out infinite'
          }}
        />
        
        {/* Cloud 4 - White soft (Moved to bottom) */}
        <div 
          className="absolute w-76 h-38 bg-white/95 rounded-full"
          style={{
            bottom: '10%',
            left: '5%',
            opacity: 0.85,
            filter: 'blur(22px) saturate(1.1)',
            animation: 'moveLeft2 18s ease-in-out infinite'
          }}
        />
        
        {/* Cloud 5 - Blue soft */}
        <div 
          className="absolute w-68 h-34 bg-blue-200/95 rounded-full"
          style={{
            top: '60%',
            left: '15%',
            opacity: 0.6,
            filter: 'blur(19px) saturate(1.4)',
            animation: 'moveRight3 19s ease-in-out infinite'
          }}
        />
        
        {/* Cloud 6 - Yellow soft */}
        <div 
          className="absolute w-60 h-30 bg-yellow-200/95 rounded-full"
          style={{
            top: '38%',
            right: '12%',
            opacity: 0.65,
            filter: 'blur(21px) saturate(1.4)',
            animation: 'moveLeft3 17s ease-in-out infinite'
          }}
        />
      </div>
      
      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        {/* Title Image */}
        <img 
          src={titleImage} 
          alt="Lumora" 
          className="w-full max-w-3xl mb-6"
        />
        
        {/* Caption */}
        <div className="text-4xl font-bold tracking-wider mb-8">
          <span className="text-green-600">DESIGN</span>
          <span className="text-gray-800"> . </span>
          <span className="text-orange-500">INNOVATE</span>
          <span className="text-gray-800"> . </span>
          <span className="text-red-600">ILLUMINATE</span>
        </div>
        <button className="px-10 py-4 bg-blue-500 text-white text-lg rounded-full hover:bg-blue-600 transition-all shadow-lg">
          Get Started
        </button>
        {/* <DevfolioButton /> */}
      </div>
      
      {/* Cloud Animations */}
      <style>{`
        @keyframes moveRight1 {
          0% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(80vw) translateY(-15px); }
          100% { transform: translateX(0) translateY(0); }
        }
        
        @keyframes moveRight2 {
          0% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(75vw) translateY(20px); }
          100% { transform: translateX(0) translateY(0); }
        }
        
        @keyframes moveRight3 {
          0% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(70vw) translateY(-10px); }
          100% { transform: translateX(0) translateY(0); }
        }
        
        @keyframes moveLeft1 {
          0% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(-80vw) translateY(18px); }
          100% { transform: translateX(0) translateY(0); }
        }
        
        @keyframes moveLeft2 {
          0% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(-75vw) translateY(-12px); }
          100% { transform: translateX(0) translateY(0); }
        }
        
        @keyframes moveLeft3 {
          0% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(-70vw) translateY(22px); }
          100% { transform: translateX(0) translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default HeroWithClouds;