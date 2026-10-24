import React from 'react';

interface CornerBracketsProps {
  strokeColor?: string;
  size?: number;
  strokeWidth?: number;
}

export const CornerBrackets: React.FC<CornerBracketsProps> = ({
  strokeColor = 'currentColor',
  size = 10,
  strokeWidth = 1.25,
}) => {
  return (
    <>
      {/* Top-Right Bracket */}
      <svg
        className="absolute top-0 right-0 pointer-events-none"
        width={size}
        height={size}
        viewBox="0 0 10.5 10.5"
        fill="none"
      >
        <path d="M0 0.5H10V10.5" stroke={strokeColor} strokeWidth={strokeWidth} />
      </svg>

      {/* Top-Left Bracket */}
      <svg
        className="absolute top-0 left-0 pointer-events-none"
        width={size}
        height={size}
        viewBox="0 0 10.5 10.5"
        fill="none"
        style={{ transform: 'scaleX(-1)' }}
      >
        <path d="M0 0.5H10V10.5" stroke={strokeColor} strokeWidth={strokeWidth} />
      </svg>

      {/* Bottom-Left Bracket */}
      <svg
        className="absolute bottom-0 left-0 pointer-events-none"
        width={size}
        height={size}
        viewBox="0 0 10.5 10.5"
        fill="none"
        style={{ transform: 'scale(-1)' }}
      >
        <path d="M0 0.5H10V10.5" stroke={strokeColor} strokeWidth={strokeWidth} />
      </svg>

      {/* Bottom-Right Bracket */}
      <svg
        className="absolute bottom-0 right-0 pointer-events-none"
        width={size}
        height={size}
        viewBox="0 0 10.5 10.5"
        fill="none"
        style={{ transform: 'scaleY(-1)' }}
      >
        <path d="M0 0.5H10V10.5" stroke={strokeColor} strokeWidth={strokeWidth} />
      </svg>
    </>
  );
};
