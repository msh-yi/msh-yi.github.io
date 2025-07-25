// src/components/BenzeneBackground.tsx
"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback, useRef } from 'react';

interface HexCell {
  id: string;
  x: number;
  y: number;
  isActive: boolean;
  isStatic: boolean; // New: for completed hexagons
  activationTime: number;
}

function generateHexGrid(width: number, height: number): HexCell[] {
  const hexRadius = 30;
  const hexHeight = hexRadius * Math.sqrt(3);
  const hexWidth = hexRadius * 2;
  
  const horizontalSpacing = hexWidth * 0.75;
  const verticalSpacing = hexHeight;

  const cells: HexCell[] = [];
  let id = 0;

  for (let row = 0; row < Math.ceil(height / verticalSpacing) + 2; row++) {
    for (let col = 0; col < Math.ceil(width / horizontalSpacing) + 2; col++) {
      const x = col * horizontalSpacing;
      const y = row * verticalSpacing + (col % 2 === 1 ? verticalSpacing / 2 : 0);

      if (x >= -hexRadius && x <= width + hexRadius && y >= -hexRadius && y <= height + hexRadius) {
        cells.push({
          id: `hex-${id++}`,
          x,
          y,
          isActive: false,
          isStatic: false,
          activationTime: 0
        });
      }
    }
  }

  return cells;
}

// Static hexagon component (no animation, just SVG)
function StaticHexCell({ cell }: { cell: HexCell }) {
  return (
    <g>
      {Array.from({ length: 6 }, (_, i) => {
        const angle1 = (i * Math.PI) / 3;
        const angle2 = ((i + 1) * Math.PI) / 3;
        const x1 = cell.x + 30 * Math.cos(angle1);
        const y1 = cell.y + 30 * Math.sin(angle1);
        const x2 = cell.x + 30 * Math.cos(angle2);
        const y2 = cell.y + 30 * Math.sin(angle2);

        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#D4AF37"
            strokeWidth="1.2"
            opacity="0.15"
          />
        );
      })}
    </g>
  );
}

// Animated hexagon component
function AnimatedHexCell({ cell, onComplete }: { cell: HexCell; onComplete: (id: string) => void }) {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (cell.isActive) {
      // Convert to static after animation completes (about 1 second)
      timeoutRef.current = setTimeout(() => {
        onComplete(cell.id);
      }, 1000);

      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }
  }, [cell.isActive, cell.id, onComplete]);

  if (!cell.isActive) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.g
        key={cell.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {Array.from({ length: 6 }, (_, i) => {
          const angle1 = (i * Math.PI) / 3;
          const angle2 = ((i + 1) * Math.PI) / 3;
          const x1 = cell.x + 30 * Math.cos(angle1);
          const y1 = cell.y + 30 * Math.sin(angle1);
          const x2 = cell.x + 30 * Math.cos(angle2);
          const y2 = cell.y + 30 * Math.sin(angle2);

          return (
            <motion.line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#D4AF37"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.02 }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: 0.5,
                delay: i * 0.08,
                ease: "easeOut"
              }}
            />
          );
        })}
      </motion.g>
    </AnimatePresence>
  );
}

export default function BenzeneBackground() {
  const [hexGrid, setHexGrid] = useState<HexCell[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (dimensions.width > 0 && dimensions.height > 0) {
      const grid = generateHexGrid(dimensions.width, dimensions.height);
      setHexGrid(grid);
    }
  }, [dimensions]);

  const handleAnimationComplete = useCallback((hexId: string) => {
    setHexGrid(prev => prev.map(hex => 
      hex.id === hexId 
        ? { ...hex, isActive: false, isStatic: true } // Convert to static
        : hex
    ));
  }, []);

  useEffect(() => {
    if (hexGrid.length === 0) return;

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    const activateRandomHex = () => {
      setHexGrid(prev => {
        const availableHexes = prev.filter(hex => !hex.isActive && !hex.isStatic);
        
        if (availableHexes.length === 0) {
          // All hexagons are either active or static - stop the interval
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
          }
          return prev;
        }

        const randomIndex = Math.floor(Math.random() * availableHexes.length);
        const selectedHex = availableHexes[randomIndex];
        
        return prev.map(hex => 
          hex.id === selectedHex.id 
            ? { 
                ...hex, 
                isActive: true, 
                activationTime: Date.now()
              }
            : hex
        );
      });
    };

    // Start immediately, then every 100ms for faster filling
    activateRandomHex();
    intervalRef.current = setInterval(activateRandomHex, 100);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [hexGrid.length > 0]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Separate static and animated hexagons
  const staticHexes = hexGrid.filter(hex => hex.isStatic);
  const animatedHexes = hexGrid.filter(hex => hex.isActive);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <svg
        width="100%"
        height="100%"
        className="absolute inset-0"
        style={{ background: 'transparent' }}
      >
        {/* Render static hexagons (no animation overhead) */}
        {staticHexes.map(cell => (
          <StaticHexCell key={`static-${cell.id}`} cell={cell} />
        ))}
        
        {/* Render animated hexagons (only while animating) */}
        {animatedHexes.map(cell => (
          <AnimatedHexCell
            key={`animated-${cell.id}`}
            cell={cell}
            onComplete={handleAnimationComplete}
          />
        ))}
      </svg>
    </div>
  );
}