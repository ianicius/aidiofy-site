import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10 md:h-12 md:w-12',
    lg: 'h-14 w-14 md:h-16 md:w-16'
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${sizeClasses[size]} ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      aria-label="AIdiofy Logo"
    >
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ff6b35">
            <animate attributeName="stop-color" values="#ff6b35;#ffb347;#ff6b35" dur="3s" repeatCount="indefinite" />
          </stop>
          <stop offset="0.5" stopColor="#ffb347">
            <animate attributeName="stop-color" values="#ffb347;#ff6b35;#ffb347" dur="3s" repeatCount="indefinite" />
          </stop>
          <stop offset="1" stopColor="#f5f5f7">
            <animate attributeName="stop-color" values="#f5f5f7;#ffb347;#f5f5f7" dur="3s" repeatCount="indefinite" />
          </stop>
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      {/* Neural network paths */}
      <path
        stroke="url(#logo-grad)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.75 3C7.5 3 6.3 4.2 5.5 5.5C4.5 7.2 2 8 2 11C2 13.5 3.5 15.5 5.5 16.5M14.25 3C16.5 3 17.7 4.2 18.5 5.5C19.5 7.2 22 8 22 11C22 13.5 20.5 15.5 18.5 16.5"
        className="opacity-70"
      >
        <animate attributeName="stroke-opacity" values="0.7;0.9;0.7" dur="2s" repeatCount="indefinite" />
      </path>
      <path
        stroke="url(#logo-grad)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21V11"
        filter="url(#glow)"
      />
      {/* Central pulsing circle */}
      <circle
        cx="12"
        cy="11"
        r="3"
        stroke="url(#logo-grad)"
        strokeWidth="1.5"
        className="animate-pulse"
      >
        <animate attributeName="r" values="3;3.5;3" dur="2s" repeatCount="indefinite" />
      </circle>
      {/* Core dot */}
      <circle
        cx="12"
        cy="11"
        r="1.5"
        fill="#ffb347"
        filter="url(#glow)"
      >
        <animate attributeName="r" values="1.5;2;1.5" dur="1.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="1;0.8;1" dur="1.5s" repeatCount="indefinite" />
      </circle>
      {/* Connection paths */}
      <path
        stroke="url(#logo-grad)"
        strokeWidth="1.5"
        strokeLinecap="round"
        d="M8 13L6 16"
        className="opacity-50"
      >
        <animate attributeName="opacity" values="0.5;0.8;0.5" dur="2.5s" repeatCount="indefinite" />
      </path>
      <path
        stroke="url(#logo-grad)"
        strokeWidth="1.5"
        strokeLinecap="round"
        d="M16 13L18 16"
        className="opacity-50"
      >
        <animate attributeName="opacity" values="0.5;0.8;0.5" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
      </path>
      {/* Bottom accent dots */}
      <circle
        cx="6"
        cy="16"
        r="1"
        fill="#f5f5f7"
        filter="url(#glow)"
      >
        <animate attributeName="r" values="1;1.3;1" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle
        cx="18"
        cy="16"
        r="1"
        fill="#ff6b35"
        filter="url(#glow)"
      >
        <animate attributeName="r" values="1;1.3;1" dur="2s" repeatCount="indefinite" begin="1s" />
      </circle>
    </svg>
  );
};

export default Logo;
