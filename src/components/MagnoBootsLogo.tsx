import React from 'react';
import magnoLogoImg from '../assets/images/magno_boots_logo.png';

interface MagnoBootsLogoProps {
  variant?: 'full' | 'compact' | 'icon' | 'badge';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  lightMode?: boolean;
  className?: string;
}

export const MagnoBootsLogo: React.FC<MagnoBootsLogoProps> = ({
  variant = 'full',
  size = 'md',
  lightMode = false,
  className = '',
}) => {
  // Dimensions scaling based on size (adjusted for horizontal logo)
  const imageSizes = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-16',
    xl: 'h-24',
  };

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={magnoLogoImg}
        alt="Magno Boots Logo"
        className={`${imageSizes[size]} w-auto object-contain drop-shadow-md`}
      />
    </div>
  );
};
