import React from 'react';

interface BrandMarkProps {
  className: string;
}

export const BrandMark: React.FC<BrandMarkProps> = ({ className }) => (
  <img
    src="/buildmate-logo.jpg"
    alt=""
    aria-hidden="true"
    className={`shrink-0 rounded-md object-cover ${className}`}
  />
);
