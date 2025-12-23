import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../../../ui/Button';
import { Card } from '../../../ui/Card';
import { Check, X, AlertTriangle } from 'lucide-react';
import { cn } from '../../../ui/Button';

const BAD_CHARTS = [
  {
    id: 1,
    title: "Quarterly Revenue Growth",
    violation: "Truncated Axis",
    description: "The Y-axis starts at 98, exaggerating the difference between 99 and 100.",
    svg: (
      <svg viewBox="0 0 300 200" className="w-full h-full text-gray-800">
        {/* Axes */}
        <line x1="40" y1="180" x2="280" y2="180" stroke="currentColor" strokeWidth="2" />
        <line x1="40" y1="180" x2="40" y2="20" stroke="currentColor" strokeWidth="2" />
        
        {/* Bars */}
        <rect x="60" y="100" width="40" height="80" fill="#3b82f6" opacity="0.8" />
        <text x="80" y="195" textAnchor="middle" fontSize="12" fill="currentColor">Q1</text>
        <rect x="130" y="90" width="40" height="90" fill="#3b82f6" opacity="0.8" />
        <text x="150" y="195" textAnchor="middle" fontSize="12" fill="currentColor">Q2</text>
        <rect x="200" y="20" width="40" height="160" fill="#3b82f6" opacity="0.8" />
        <text x="220" y="195" textAnchor="middle" fontSize="12" fill="currentColor">Q3</text>

        {/* Labels - Deliberately misleading scale */}
        <text x="35" y="180" textAnchor="end" fontSize="10" fill="currentColor">98M</text>
        <text x="35" y="100" textAnchor="end" fontSize="10" fill="currentColor">99M</text>
        <text x="35" y="20" textAnchor="end" fontSize="10" fill="currentColor">100M</text>
      </svg>
    ),
    options: [
      { id: 'correct', label: 'Y-Axis Truncation (Area Principle Violation)' },
      { id: 'wrong1', label: 'Missing Data Points' },
      { id: 'wrong2', label: 'Incorrect Color Usage' },
    ]
  },
  {
    id: 2,
    title: "Market Share 2024",
    violation: "3D Perspective",
    description: "The 3D tilt makes the front slice look bigger than it actually is.",
    svg: (
      <svg viewBox="0 0 300 200" className="w-full h-full"> 
         <g transform="translate(150, 100) scale(1, 0.6)">
           {/* Back slice (actually 60%) */}
           <path d="M0,0 L100,0 A100,100 0 1,1 -100,0 Z" fill="#9333ea" />
           {/* Front slice (actually 40%) but looks huge due to perspective */}
           <path d="M0,0 L-100,0 A100,100 0 0,0 100,0 Z" fill="#ef4444" transform="translate(0, 10)" />
           <path d="M-100,0 L-100,20 A100,100 0 0,0 100,20 L100,0" fill="#b91c1c" />
         </g>
         <text x="150" y="80" textAnchor="middle" fill="white" fontWeight="bold">Competitor (60%)</text>
         <text x="150" y="150" textAnchor="middle" fill="white" fontWeight="bold">Our Company (40%)</text>
      </svg>
    ),
    options: [
        { id: 'wrong1', label: 'Colors are too bright' },
        { id: 'correct', label: '3D Distortion / Perspective Bias' },
        { id: 'wrong2', label: 'Pie Charts must sum to 200%' },
    ]
  }
];

export function ChartGuardian({ onComplete }: { onComplete: () => void }) {
  const [currentChartIndex, setCurrentChartIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const currentChart = BAD_CHARTS[currentChartIndex];

  const handleSelect = (optionId) => {
    if (selectedOption) return; // Locked

    setSelectedOption(optionId);
    const correct = optionId === 'correct';
    setIsCorrect(correct);

    if (correct) {
        setTimeout(() => {
            if (currentChartIndex < BAD_CHARTS.length - 1) {
                setCurrentChartIndex(prev => prev + 1);
                setSelectedOption(null);
                setIsCorrect(null);
            } else {
                onComplete();
            }
        }, 2500);
    } else {
        setTimeout(() => {
            setSelectedOption(null);
            setIsCorrect(null);
        }, 1500);
    }
  };

  return (
    <div className="py-8 max-w-2xl mx-auto space-y-8">
       <div className="text-center">
           <h3 className="text-2xl font-bold mb-2">The Chart Guardian</h3>
           <p className="text-gray-500">Identify how these visualizations are deceiving you.</p>
       </div>

       <Card className="overflow-hidden bg-white shadow-xl border-gray-200">
           <div className="p-4 border-b bg-gray-50 flex justify-between items-center">
               <h4 className="font-bold text-gray-700">{currentChart.title}</h4>
               <span className="text-xs font-mono text-gray-400">Case {currentChartIndex + 1}/{BAD_CHARTS.length}</span>
           </div>
           
           <div className="h-64 bg-gray-50 p-6 flex items-center justify-center">
               {currentChart.svg}
           </div>

           <div className="p-6 space-y-4">
               <p className="font-medium text-gray-900 mb-4">What is misleading about this chart?</p>
               
               <div className="space-y-3">
                   {currentChart.options.map((opt) => {
                       let stateStyles = "hover:border-blue-300 hover:bg-blue-50 border-gray-200";
                       if (selectedOption === opt.id) {
                           if (opt.id === 'correct') stateStyles = "border-green-500 bg-green-50 text-green-700";
                           else stateStyles = "border-red-500 bg-red-50 text-red-700";
                       } else if (selectedOption && opt.id !== selectedOption) {
                           stateStyles = "opacity-50 cursor-not-allowed";
                       }

                       return (
                           <button
                                key={opt.id}
                                onClick={() => handleSelect(opt.id)}
                                disabled={!!selectedOption}
                                className={cn(
                                    "w-full text-left p-4 rounded-lg border-2 transition-all flex items-center justify-between",
                                    stateStyles
                                )}
                           >
                               <span>{opt.label}</span>
                               {selectedOption === opt.id && (
                                   opt.id === 'correct' ? <Check className="w-5 h-5 text-green-600" /> : <X className="w-5 h-5 text-red-600" />
                               )}
                           </button>
                       );
                   })}
               </div>

               <AnimatePresence>
                   {isCorrect && (
                       <motion.div 
                         initial={{ height: 0, opacity: 0 }}
                         animate={{ height: 'auto', opacity: 1 }}
                         className="bg-green-100 text-green-800 p-4 rounded-lg text-sm mt-4 flex gap-3"
                       >
                           <AlertTriangle className="shrink-0 w-5 h-5" />
                           <div>
                               <span className="font-bold block mb-1">Investigation Report:</span>
                               {currentChart.description}
                           </div>
                       </motion.div>
                   )}
               </AnimatePresence>
           </div>
       </Card>
    </div>
  );
}
