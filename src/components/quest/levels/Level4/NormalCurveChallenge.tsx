import React, { useState, useEffect } from 'react';
import { Button } from '../../../ui/Button';
import { Card } from '../../../ui/Card';
import { motion } from 'framer-motion';
import { TrendingUp, ArrowRight } from 'lucide-react';

// Simple Histogram Bar
const Bar = ({ height, max, index, total }) => {
    return (
        <motion.div
           layout
           className="bg-blue-500 rounded-t-sm mx-[1px] relative group"
           style={{ 
               height: `${(height / max) * 100}%`,
               width: `${100 / total}%`
           }}
        >
             {/* Tooltip */}
             <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-900 text-white text-xs p-1 rounded z-10 whitespace-nowrap">
                 k={index}: {(height * 100).toFixed(1)}%
             </div>
        </motion.div>
    )
}

function factorial(n: number): number {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) result *= i;
    return result;
}

function nCr(n: number, r: number): number {
    return factorial(n) / (factorial(r) * factorial(n - r));
}

function binomialPMF(n: number, p: number): number[] {
    const probs = [];
    for (let k = 0; k <= n; k++) {
        probs.push(nCr(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k));
    }
    return probs;
}

export function NormalCurveChallenge({ onComplete }: { onComplete: () => void }) {
  const [n, setN] = useState(5); // Sample size
  const p = 0.5; // Probability of success (fair coin)
  const [data, setData] = useState<number[]>([]);
  const [showNormalOverlay, setShowNormalOverlay] = useState(false);

  useEffect(() => {
      setData(binomialPMF(n, p));
  }, [n]);

  const maxProb = Math.max(...data);
  const isTargetReached = n >= 30; // CLT rule of thumb

  return (
    <div className="py-8 space-y-8 max-w-4xl mx-auto">
        <div className="text-center">
           <h3 className="text-2xl font-bold mb-2">The Central Limit Theorem</h3>
           <p className="text-gray-500">
               Increase the sample size (N) to witness the birth of the Normal Curve.
           </p>
        </div>

        <Card className="p-8">
            <div className="h-64 flex items-end justify-center px-4 mb-8 bg-gray-50 rounded-xl border border-gray-100 relative overflow-hidden">
                 {/* Normal Curve Overlay */}
                 {showNormalOverlay && (
                     <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 pointer-events-none"
                     >
                         <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full opacity-50">
                             <path 
                                d="M0,100 Q50,0 100,100" 
                                fill="none" 
                                stroke="red" 
                                strokeWidth="2" 
                                strokeDasharray="5,5"
                             />
                             <text x="50" y="20" textAnchor="middle" fill="red" fontSize="5">Normal Approximation</text>
                         </svg>
                     </motion.div>
                 )}

                 {data.map((prob, k) => (
                     <Bar key={k} height={prob} max={maxProb} index={k} total={data.length} />
                 ))}
            </div>

            <div className="space-y-6">
                <div className="flex items-center gap-4">
                    <span className="font-bold text-gray-700 w-16">N = {n}</span>
                    <input 
                        type="range" 
                        min="2" 
                        max="50" 
                        step="1"
                        value={n}
                        onChange={(e) => setN(parseInt(e.target.value))}
                        className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                    <span className="text-sm text-gray-400 w-16 text-right">Max: 50</span>
                </div>

                <div className="p-4 bg-blue-50 text-blue-800 text-sm rounded-lg flex gap-3 items-start">
                    <TrendingUp className="shrink-0 w-5 h-5 mt-0.5" />
                    <p>
                        As <strong>N</strong> gets larger, the discrete Binomial blocks start to look smooth and bell-shaped. 
                        This is why we can use the Normal distribution to approximate so many things!
                    </p>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                     <div className="flex gap-4">
                         <label className="flex items-center space-x-2 text-sm text-gray-600 cursor-pointer">
                             <input 
                                type="checkbox" 
                                checked={showNormalOverlay} 
                                onChange={e => setShowNormalOverlay(e.target.checked)}
                                className="rounded text-blue-600 focus:ring-blue-500" 
                             />
                             <span>Show Bell Curve</span>
                         </label>
                     </div>

                     <Button 
                        onClick={onComplete} 
                        disabled={!isTargetReached}
                        variant={isTargetReached ? "primary" : "secondary"}
                        title={isTargetReached ? "Ready to proceed" : "Increase N to at least 30 first!"}
                     >
                        Confirm Theory <ArrowRight className="ml-2 w-4 h-4" />
                     </Button>
                </div>
            </div>
        </Card>
    </div>
  );
}
