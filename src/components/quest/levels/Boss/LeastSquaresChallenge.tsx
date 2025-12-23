import React, { useState, useMemo } from 'react';
import { Button } from '../../../ui/Button';
import { Card } from '../../../ui/Card';
import { motion } from 'framer-motion';
import { TrendingUp, RefreshCw, ArrowRight } from 'lucide-react';

// Generate some linear-ish data with noise
const generateData = () => {
    const points = [];
    for (let x = 1; x <= 10; x++) {
        const noise = (Math.random() - 0.5) * 10;
        const y = 2 * x + 5 + noise;
        points.push({ x, y: Math.max(0, y) });
    }
    return points;
};

export function LeastSquaresChallenge({ onComplete }: { onComplete: () => void }) {
  const [data, setData] = useState(generateData());
  const [slope, setSlope] = useState(1);
  const [intercept, setIntercept] = useState(0);
  const [showSquares, setShowSquares] = useState(true);

  // Calculate SSE (Sum of Squared Errors)
  const sse = useMemo(() => {
      return data.reduce((sum, p) => {
          const predictedY = slope * p.x + intercept;
          const error = p.y - predictedY;
          return sum + (error * error);
      }, 0);
  }, [data, slope, intercept]);

  // Optimal line (simple linear regression formula could be used to check closeness)
  // For gamification, we just check if SSE is below a threshold
  const isOptimal = sse < 150; // Threshold depends on noise, 150 is generous but requires effort

  const handleReset = () => {
      setData(generateData());
      setSlope(1);
      setIntercept(0);
  };

  return (
    <div className="py-8 space-y-8 max-w-4xl mx-auto">
        <div className="text-center">
           <h3 className="text-2xl font-bold mb-2">The Least Squares Challenge</h3>
           <p className="text-gray-500">
               Fit the line to the data. Minimize the Sum of Squared Errors (SSE) represented by the red boxes.
           </p>
        </div>

        <Card className="p-8">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Chart Area */}
                <div className="flex-1 aspect-square bg-slate-50 border border-slate-200 rounded-lg relative overflow-hidden">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        {/* Grid */}
                        <defs>
                            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="gray" strokeWidth="0.5" opacity="0.1"/>
                            </pattern>
                        </defs>
                        <rect width="100" height="100" fill="url(#grid)" />

                        {/* Squares representing residuals */}
                        {showSquares && data.map((p, i) => {
                             const predictedY = slope * p.x + intercept;
                             const error = p.y - predictedY;
                             const size = Math.abs(error);
                             // We draw a rect. x,y at corner. 
                             // If error is positive (point above line), rect goes down from point
                             // If error is negative (point below line), rect goes up from point
                             // We want to visualize the AREA.
                             
                             // Coordinate mapping: 
                             // Chart X: 0-12 maps to 0-100%
                             // Chart Y: 0-40 maps to 100-0% (SVGs y is down)
                             
                             const mapX = (val: number) => (val / 12) * 100;
                             const mapY = (val: number) => 100 - (val / 40) * 100;
                             
                             const x1 = mapX(p.x);
                             const y1 = mapY(p.y);
                             const y2 = mapY(predictedY);
                             const h = Math.abs(y1 - y2); // Height in %
                             
                             // To make actual squares visually in SVG coordinates is tricky due to aspect ratio
                             // simplified: just draw lines or bars for now to avoid distortion confusion
                             // visual square approximation:
                             return (
                                 <rect 
                                    key={`sq-${i}`}
                                    x={x1 - 1} // centerish
                                    y={Math.min(y1, y2)}
                                    width={2} 
                                    height={h}
                                    fill="rgba(239, 68, 68, 0.3)"
                                    stroke="rgba(239, 68, 68, 0.5)"
                                    strokeWidth="0.5"
                                 />
                             );
                        })}

                        {/* Data Points */}
                        {data.map((p, i) => (
                            <circle 
                                key={i} 
                                cx={(p.x / 12) * 100} 
                                cy={100 - (p.y / 40) * 100} 
                                r="1.5" 
                                fill="#2563eb" 
                            />
                        ))}

                        {/* Regression Line */}
                        <line 
                            x1="0" 
                            y1={100 - (intercept / 40) * 100} 
                            x2="100" 
                            y2={100 - ((slope * 12 + intercept) / 40) * 100} 
                            stroke="#7c3aed" 
                            strokeWidth="1" 
                        />
                    </svg>

                    {/* Overlay info */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur p-2 rounded shadow text-xs font-mono">
                        SSE: <span className={isOptimal ? "text-green-600 font-bold" : "text-red-600 font-bold"}>{sse.toFixed(1)}</span>
                    </div>
                </div>

                {/* Controls */}
                <div className="w-full md:w-64 space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Slope (m): {slope.toFixed(2)}</label>
                        <input 
                            type="range" min="0" max="5" step="0.1" 
                            value={slope} onChange={e => setSlope(parseFloat(e.target.value))}
                            className="w-full"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Intercept (c): {intercept.toFixed(1)}</label>
                        <input 
                            type="range" min="-10" max="20" step="1" 
                            value={intercept} onChange={e => setIntercept(parseFloat(e.target.value))}
                            className="w-full"
                        />
                    </div>
                    
                    <div className="pt-4 border-t border-gray-100 space-y-3">
                         <div className="flex gap-2">
                             <input type="checkbox" checked={showSquares} onChange={e => setShowSquares(e.target.checked)} />
                             <span className="text-sm text-gray-600">Show Residuals</span>
                         </div>
                         <Button variant="outline" size="sm" onClick={handleReset} className="w-full">
                             <RefreshCw className="mr-2 w-4 h-4" /> New Data
                         </Button>
                    </div>

                    <div className="pt-8">
                         <Button 
                            className="w-full" 
                            disabled={!isOptimal}
                            variant={isOptimal ? "primary" : "secondary"}
                            onClick={onComplete}
                         >
                            {isOptimal ? "Model Optimized! Proceed" : "Minimize SSE to < 150"}
                         </Button>
                    </div>
                </div>
            </div>
        </Card>
    </div>
  );
}
