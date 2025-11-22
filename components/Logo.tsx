import React from "react";

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "w-10 h-10" }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="AIdiofy Logo"
    >
      <defs>
        <linearGradient id="logo_gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#A855F7" /> {/* Purple */}
          <stop offset="50%" stopColor="#06B6D4" /> {/* Cyan */}
          <stop offset="100%" stopColor="#34D399" /> {/* Green */}
        </linearGradient>
        <filter id="glow-filter" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g filter="url(#glow-filter)">
        {/* Network Connections (The 'A' Frame) */}
        <g stroke="url(#logo_gradient)" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.6">
          {/* Main Triangle Outline */}
          <line x1="50" y1="15" x2="20" y2="85" />
          <line x1="50" y1="15" x2="80" y2="85" />
          
          {/* Internal Mesh Structure */}
          <line x1="50" y1="15" x2="50" y2="45" /> {/* Top vertical */}
          <line x1="35" y1="50" x2="65" y2="50" /> {/* Crossbar Top */}
          <line x1="28" y1="65" x2="72" y2="65" /> {/* Crossbar Bottom */}
          
          {/* Diagonal Cross Bracing */}
          <line x1="35" y1="50" x2="50" y2="15" />
          <line x1="65" y1="50" x2="50" y2="15" />
          <line x1="35" y1="50" x2="50" y2="85" />
          <line x1="65" y1="50" x2="50" y2="85" />
          
          <line x1="20" y1="85" x2="35" y2="50" />
          <line x1="80" y1="85" x2="65" y2="50" />
        </g>

        {/* The Audio Waveform */}
        <path
          d="M10 50 
             C 15 50, 20 40, 25 50 
             S 30 65, 35 50 
             S 40 25, 45 50 
             S 50 75, 55 50 
             S 60 30, 65 50 
             S 70 60, 75 50 
             S 85 50, 90 50"
          stroke="url(#logo_gradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Nodes (Dots) */}
        <g fill="url(#logo_gradient)">
          {/* Apex */}
          <circle cx="50" cy="15" r="3" />
          
          {/* Mid Connectors */}
          <circle cx="35" cy="50" r="2.5" />
          <circle cx="65" cy="50" r="2.5" />
          <circle cx="50" cy="45" r="2" />
          
          {/* Lower Connectors */}
          <circle cx="28" cy="65" r="2" />
          <circle cx="72" cy="65" r="2" />
          
          {/* Base */}
          <circle cx="20" cy="85" r="3" />
          <circle cx="80" cy="85" r="3" />
          
          {/* Waveform Intersections (Visual flair) */}
          <circle cx="45" cy="50" r="2" fill="#fff" />
          <circle cx="55" cy="50" r="2" fill="#fff" />
        </g>
      </g>
    </svg>
  );
};