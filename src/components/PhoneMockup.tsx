import type { FC } from "react";
import type { Screenshot } from "../i18n/types";

interface PhoneMockupProps {
  screenshot: Screenshot;
  className?: string;
  ariaLabel?: string;
}

export const PhoneMockup: FC<PhoneMockupProps> = ({ 
  screenshot, 
  className = "",
  ariaLabel 
}) => {
  return (
    <div 
      className={`phone-mockup ${className}`}
      role="img"
      aria-label={ariaLabel || screenshot.alt}
      style={{
        width: '280px',
        height: '560px',
        position: 'relative',
        margin: '0 auto'
      }}
    >
      <svg
        viewBox="0 0 280 560"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: '100%',
          height: '100%',
          filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.25))'
        }}
      >
        {/* Phone Body */}
        <rect
          x="0"
          y="0"
          width="280"
          height="560"
          rx="40"
          fill="#1a1a1a"
        />
        
        {/* Inner Screen Area */}
        <rect
          x="8"
          y="8"
          width="264"
          height="544"
          rx="32"
          fill="#000000"
        />
        
        {/* Screen Content Area */}
        <foreignObject
          x="12"
          y="12"
          width="256"
          height="536"
          style={{
            clipPath: 'inset(0 0 0 0 round 28px)'
          }}
        >
          <img
            src={screenshot.src}
            alt={screenshot.alt}
            loading="lazy"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              display: 'block'
            }}
          />
        </foreignObject>
        
        {/* Notch/Camera Cutout */}
        <rect
          x="100"
          y="12"
          width="80"
          height="28"
          rx="14"
          fill="#000000"
        />
        
        {/* Camera Lens */}
        <circle
          cx="140"
          cy="26"
          r="6"
          fill="#1a1a1a"
        />
        <circle
          cx="140"
          cy="26"
          r="4"
          fill="#2a2a2a"
        />
        
        {/* Side Buttons - Volume */}
        <rect
          x="-3"
          y="120"
          width="3"
          height="60"
          rx="1.5"
          fill="#2a2a2a"
        />
        <rect
          x="-3"
          y="190"
          width="3"
          height="60"
          rx="1.5"
          fill="#2a2a2a"
        />
        
        {/* Side Button - Power */}
        <rect
          x="280"
          y="150"
          width="3"
          height="90"
          rx="1.5"
          fill="#2a2a2a"
        />
        
        {/* Speaker Grille */}
        <g fill="#1a1a1a">
          <rect x="120" y="542" width="40" height="4" rx="2" />
          <rect x="120" y="549" width="40" height="4" rx="2" />
        </g>
        
        {/* Home Indicator */}
        <rect
          x="100"
          y="548"
          width="80"
          height="5"
          rx="2.5"
          fill="#ffffff"
          opacity="0.3"
        />
      </svg>
    </div>
  );
};

export default PhoneMockup;
