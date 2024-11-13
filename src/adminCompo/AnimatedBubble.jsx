import React from 'react';

export const AnimatedBubble = ({ color, size, duration, delay }) => (
  <div
    className="absolute rounded-full opacity-30 blur-xl"
    style={{
      backgroundColor: color,
      width: size,
      height: size,
      animation: `float ${duration}s infinite ease-in-out ${delay}s`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }}
  />
);