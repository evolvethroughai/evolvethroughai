import React from 'react';
import { motion } from 'motion/react';

interface ChamferedButtonProps {
  label: string;
  onClick?: () => void;
  variant?: 'cyan' | 'dark' | 'outline';
  icon?: React.ReactNode;
  sublabel?: string;
  className?: string;
  href?: string;
}

export const ChamferedButton: React.FC<ChamferedButtonProps> = ({
  label,
  onClick,
  variant = 'cyan',
  icon,
  sublabel,
  className = '',
  href,
}) => {
  const content = (
    <div
      onClick={onClick}
      className={`relative inline-flex items-center justify-center px-6 py-3 cursor-pointer group select-none ${className}`}
    >
      {/* Background Chamfer SVG with Flood and Brackets */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 220 50"
        preserveAspectRatio="none"
      >
        {/* Base Plate Body */}
        <path
          d="M220 42L212.932 50H0V0H220V42Z"
          fill={variant === 'outline' ? 'rgba(9,10,11,0.6)' : variant === 'dark' ? '#090d1c' : '#04222f'}
        />

        {/* Dynamic Hover Flood Layer */}
        <path
          d="M220 42L212.932 50H0V0H220V42Z"
          className="transition-transform duration-300 ease-out origin-left scale-x-0 group-hover:scale-x-100"
          fill={variant === 'outline' ? '#02d2e3' : '#02d2e3'}
        />

        {/* Outer Ring Accent Stroke */}
        <path
          d="M220 42L212.932 50H0V0H220V42Z"
          fill="none"
          stroke="#02d2e3"
          strokeWidth="1"
          strokeOpacity="0.4"
        />

        {/* Corner Stamped Engineering Brackets */}
        <path
          d="M205 49.5H213L219.5 42V36 M212 0.5H219.5V7 M8 0.5H0.5V7 M7.5 49.5H0.5V42.5"
          fill="none"
          stroke="#02d2e3"
          strokeWidth="1.25"
        />
      </svg>

      {/* Button Content */}
      <div className="relative z-10 flex items-center gap-2.5 font-tech text-xs sm:text-sm uppercase font-bold tracking-wider text-cyan-300 group-hover:text-[#050811] transition-colors duration-250">
        {icon}
        <span className="flex flex-col text-left">
          <span>{label}</span>
          {sublabel && (
            <span className="text-[10px] font-mono font-normal opacity-80 group-hover:text-black/80">
              {sublabel}
            </span>
          )}
        </span>

        {/* Signature Arrow SVG with 0.25rem translateX translation */}
        <svg
          className="w-3.5 h-3.5 stroke-current transition-transform duration-200 group-hover:translate-x-1"
          viewBox="0 0 13.7071 10.7071"
          fill="none"
        >
          <path
            d="M0 5.35355H13M8 10.3536L13 5.35355L8 0.353553"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {content}
      </a>
    );
  }

  return content;
};
