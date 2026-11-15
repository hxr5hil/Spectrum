import React from "react";

interface SpectrumLogoProps {
  className?: string;
  size?: number;
}

export default function SpectrumLogo({ className = "w-7 h-7", size = 28 }: SpectrumLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Sleek Spectrum Harmonic Prism Bars */}
      <rect x="4" y="11" width="3.5" height="10" rx="1.75" fill="#000000" />
      <rect x="10" y="6" width="3.5" height="20" rx="1.75" fill="#000000" />
      <rect x="16" y="3" width="3.5" height="26" rx="1.75" fill="#000000" />
      <rect x="22" y="8" width="3.5" height="16" rx="1.75" fill="#000000" opacity="0.75" />
      <rect x="28" y="13" width="3.5" height="6" rx="1.75" fill="#000000" opacity="0.45" />
    </svg>
  );
}
