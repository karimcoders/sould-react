import React from 'react';

interface SoulDLogoProps {
  className?: string;
  size?: number;
  variant?: 'full' | 'icon';
  textColor?: string;
  subtextColor?: string;
}

export default function SoulDLogo({
  className = '',
  size = 40,
  variant = 'full',
  textColor = 'text-white',
  subtextColor,
}: SoulDLogoProps) {
  const icon = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
    >
      {/* Royal Blue Container with Smooth Rounded Corners */}
      <rect width="100" height="100" rx="22" fill="#135BF2" />

      {/* Stylized White 'S' & 'D' Flowing Ribbon Path */}
      <path
        d="M 45 26 H 34 C 24 26 22 36 24 45 C 26 52 32 53 45 53 H 66 C 78 53 82 63 80 72 C 78 80 70 80 58 80 H 26 V 62"
        stroke="white"
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Signature Dot (Top Right) representing Soul-D. */}
      <circle cx="60" cy="26" r="5.5" fill="white" />
    </svg>
  );

  if (variant === 'icon') {
    return <div className={`inline-flex flex-shrink-0 ${className}`}>{icon}</div>;
  }

  const subColor = subtextColor || textColor;

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {icon}
      <div className="flex flex-col leading-none">
        <span className={`text-2xl sm:text-3xl font-black tracking-tight ${textColor} font-['Plus_Jakarta_Sans']`}>
          Soul-D.
        </span>
        <span className={`text-[9px] sm:text-[10.5px] font-bold tracking-[0.22em] uppercase ${subColor} opacity-90 mt-1`}>
          DIGITALLY SOULFUL
        </span>
      </div>
    </div>
  );
}

