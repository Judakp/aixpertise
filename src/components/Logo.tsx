import React from 'react';
import { useTheme } from '../context/ThemeContext';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'auto';
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'auto',
  size = 'md',
}) => {
  let isDarkMode = true;
  try {
    const { theme } = useTheme();
    isDarkMode = variant === 'auto' ? theme === 'dark' : variant === 'dark';
  } catch {
    isDarkMode = variant === 'dark' || variant === 'auto';
  }

  const iconSizes = {
    sm: 'w-8 h-8 sm:w-9 sm:h-9',
    md: 'w-10 h-10 sm:w-12 sm:h-12',
    lg: 'w-14 h-14 sm:w-16 sm:h-16',
  };

  const textSizes = {
    sm: 'text-base sm:text-lg',
    md: 'text-xl sm:text-2xl',
    lg: 'text-2xl sm:text-3xl',
  };

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3.5 select-none ${className}`}>
      {/* High-visibility Vector Emblem based on the uploaded logo */}
      <div className={`relative shrink-0 ${iconSizes[size]} drop-shadow-md`}>
        <svg
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            {/* Deep Navy to Cyan Gradient for A */}
            <linearGradient id="aGrad" x1="15" y1="20" x2="65" y2="85" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0B1E3F" />
              <stop offset="65%" stopColor="#123B70" />
              <stop offset="100%" stopColor="#0D9488" />
            </linearGradient>

            {/* Bright Teal to Emerald for I */}
            <linearGradient id="iGrad" x1="68" y1="36" x2="81" y2="92" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0284C7" />
              <stop offset="50%" stopColor="#0D9488" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>

            {/* Swoosh gradient */}
            <linearGradient id="swooshGrad" x1="22" y1="84" x2="72" y2="60" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0B1E3F" />
              <stop offset="45%" stopColor="#0284C7" />
              <stop offset="100%" stopColor="#14B8A6" />
            </linearGradient>

            {/* Neural glow */}
            <filter id="neuralGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#06B6D4" floodOpacity={isDarkMode ? 0.6 : 0.3} />
            </filter>
          </defs>

          {/* Left leg of letter 'A' */}
          <path
            d="M 52 20 L 63 44 L 46 76 L 33 58 Z"
            fill="url(#aGrad)"
          />
          <path
            d="M 52 20 L 19 86 L 36 86 L 53 48 Z"
            fill="url(#aGrad)"
          />

          {/* Swoosh joining crossbar */}
          <path
            d="M 27 77 Q 48 69 72 59 Q 56 68 37 72 Z"
            fill="url(#swooshGrad)"
          />

          {/* Vertical stem of letter 'I' */}
          <rect
            x="68"
            y="36"
            width="13.5"
            height="50"
            rx="3"
            fill="url(#iGrad)"
          />

          {/* Neural Network Nodes & Connecting Mesh */}
          <g filter="url(#neuralGlow)">
            {/* Lines with high contrast */}
            <path
              d="M 75 36 L 85 24 M 85 24 L 98 28 M 85 24 L 88 15 M 88 15 L 100 17 M 98 28 L 105 38 M 100 17 L 110 27 M 110 27 L 105 38 M 105 38 L 108 52 M 108 52 L 100 60 M 100 60 L 90 68 M 80 50 L 95 44 M 95 44 L 105 38 M 95 44 L 100 60"
              stroke={isDarkMode ? "#2DD4BF" : "#0D9488"}
              strokeWidth="1.6"
              strokeOpacity="0.95"
            />

            {/* Nodes */}
            <circle cx="85" cy="24" r="3.4" fill="#0B1E3F" stroke="#14B8A6" strokeWidth="1.6" />
            <circle cx="88" cy="15" r="3" fill="#0284C7" stroke="#38BDF8" strokeWidth="0.8" />
            <circle cx="100" cy="17" r="3.4" fill="#0D9488" stroke="#5EEAD4" strokeWidth="0.8" />
            <circle cx="98" cy="28" r="2.8" fill="#14B8A6" />
            <circle cx="110" cy="27" r="3.8" fill="#06B6D4" stroke="#67E8F9" strokeWidth="1" />
            <circle cx="105" cy="38" r="4" fill="#0D9488" stroke="#2DD4BF" strokeWidth="1" />
            <circle cx="95" cy="44" r="2.8" fill="#0284C7" />
            <circle cx="108" cy="52" r="3.4" fill="#10B981" stroke="#34D399" strokeWidth="0.8" />
            <circle cx="100" cy="60" r="3.8" fill="#0D9488" stroke="#5EEAD4" strokeWidth="0.8" />
            <circle cx="90" cy="68" r="3" fill="#0B1E3F" stroke="#14B8A6" strokeWidth="1.2" />
          </g>
        </svg>
      </div>

      {/* Brand Typography (Clean, prominent AI-XPERTIS≡ without the tagline) */}
      <div className="flex items-center">
        <div className={`font-display font-extrabold tracking-wider leading-none flex items-center gap-0.5 ${textSizes[size]}`}>
          <span className={isDarkMode ? 'text-cyan-400 font-black' : 'text-cyan-600 font-black'}>
            AI
          </span>
          <span className={`font-light px-0.5 ${isDarkMode ? 'text-slate-400' : 'text-slate-400'}`}>
            -
          </span>
          <span className={isDarkMode ? 'text-white' : 'text-[#0B1E3F]'}>
            XPERTIS
          </span>
          
          {/* Stylized Triple-bar E (≡) */}
          <span className="inline-flex flex-col justify-center gap-[2.5px] h-3.5 sm:h-4 w-2.5 sm:w-3 ml-0.5 shrink-0">
            <span className={`h-[2px] sm:h-[2.5px] w-full rounded-full ${isDarkMode ? 'bg-cyan-400' : 'bg-cyan-600'}`}></span>
            <span className={`h-[2px] sm:h-[2.5px] w-4/5 rounded-full ${isDarkMode ? 'bg-teal-400' : 'bg-teal-600'}`}></span>
            <span className={`h-[2px] sm:h-[2.5px] w-full rounded-full ${isDarkMode ? 'bg-emerald-400' : 'bg-emerald-600'}`}></span>
          </span>
        </div>
      </div>
    </div>
  );
};
