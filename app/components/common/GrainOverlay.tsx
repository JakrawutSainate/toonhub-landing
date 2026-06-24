import React from 'react';

export const GrainOverlay: React.FC = () => {
  const svgNoise = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='noise'%3E%3CfeFractalNoise type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E`;

  return (
    <div
      id="grain-overlay"
      className="absolute inset-0 pointer-events-none z-50 opacity-40"
      style={{
        backgroundImage: `url("${svgNoise}")`,
        backgroundSize: '200px 200px',
        backgroundRepeat: 'repeat',
      }}
    />
  );
};
