import React, { useState, useEffect } from 'react';
import { Button } from '../../../ui/Button';
import { Card } from '../../../ui/Card';
import { motion } from 'framer-motion';
import { Target, RefreshCw, ArrowRight } from 'lucide-react';
import { cn } from '../../../ui/Button'; // Assuming cn is exported from Button.tsx or utils

// Simulate Population
const POP_MEAN = 50;
const POP_STD = 10;

function generateSample(n: number) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        // Box-Muller transform for normal distribution
        const u = 1 - Math.random();
        const v = Math.random();
        const z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
        sum += z * POP_STD + POP_MEAN;
    }
    return sum / n;
}

export function EstimationWorkshop({ onComplete }: { onComplete: () => void }) {
  const [intervals, setIntervals] = useState<{mean: number, lower: number, upper: number, caught: boolean}[]>([]);
  const [confidenceLevel, setConfidenceLevel] = useState(0.95); // 95%
  const [score, setScore] = useState(0);
  const zScore = 1.96; // For 95% approx
  const n = 30;
  
  const drawSample = () => {
      const sampleMean = generateSample(n);
      const marginOfError = zScore * (POP_STD / Math.sqrt(n));
      const lower = sampleMean - marginOfError;
      const upper = sampleMean + marginOfError;
      
      const caught = lower <= POP_MEAN && upper >= POP_MEAN;
      
      const newInterval = { mean: sampleMean, lower, upper, caught };
      const newIntervals = [...intervals, newInterval].slice(-10); // Keep last 10
      setIntervals(newIntervals);
      
      if (caught) setScore(s => s + 1);
  };

  useEffect(() => {
     // Initial Draw
     drawSample();
  }, []);

  return (
    <div className="py-8 space-y-8 max-w-2xl mx-auto">
        <div className="text-center">
           <h3 className="text-2xl font-bold mb-2">The Estimation Workshop</h3>
           <p className="text-gray-500">
               Cast your nets (Confidence Intervals) to catch the invisible Population Mean.
           </p>
        </div>

        <Card className="p-8">
            <div className="relative h-64 border-l border-b border-gray-300 mb-6 bg-slate-50 rounded-tr-lg">
                {/* True Mean Line */}
                <div 
                    className="absolute top-0 bottom-0 border-r-2 border-dashed border-purple-500 z-10" 
                    style={{ left: '50%' }}
                >
                    <span className="absolute -top-6 -translate-x-1/2 text-xs font-bold text-purple-600 bg-purple-100 px-2 py-1 rounded">True μ</span>
                </div>

                {/* Intervals */}
                {intervals.map((interval, i) => {
                    // Map 30-70 to 0-100% width
                    const mapX = (val: number) => Math.max(0, Math.min(100, ((val - 30) / 40) * 100));
                    
                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="absolute h-2 rounded-full flex items-center justify-center transform -translate-y-1/2"
                            style={{
                                top: `${(i + 1) * 9}%`,
                                left: `${mapX(interval.lower)}%`,
                                width: `${mapX(interval.upper) - mapX(interval.lower)}%`,
                                backgroundColor: interval.caught ? '#22c55e' : '#ef4444' // Green or Red
                            }}
                        >
                            <div className="w-1 h-1 bg-white rounded-full opacity-50" />
                        </motion.div>
                    );
                })}
            </div>

            <div className="flex items-center justify-between">
                <div className="flex gap-4 items-center">
                   <div className="text-sm font-medium">
                       Captured: <span className="text-xl font-bold text-blue-600">{score}</span> / {intervals.length}
                   </div>
                   <Button onClick={drawSample} variant="outline" className="gap-2">
                       <RefreshCw className="w-4 h-4" /> Draw Sample
                   </Button>
                </div>

                {intervals.length >= 10 && (
                    <Button onClick={onComplete} className="gap-2">
                        Analyze Evidence <ArrowRight className="w-4 h-4" />
                    </Button>
                )}
            </div>
            
            <p className="mt-4 text-xs text-center text-gray-400">
                Notice how not every interval captures the mean, even with 95% confidence!
            </p>
        </Card>
    </div>
  );
}
