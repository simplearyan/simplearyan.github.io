import React, { useState } from 'react';
import { Button } from '../../../ui/Button';
import { Card } from '../../../ui/Card';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Shuffle } from 'lucide-react';
import { cn } from '../../../ui/Button';

const SCENARIOS = [
  { id: 'bus', text: "Waiting time for the next bus to arrive", dist: 'Exponential' },
  { id: 'coins', text: "Number of heads in 10 coin flips", dist: 'Binomial' },
  { id: 'heights', text: "Heights of adult men in a city", dist: 'Normal' },
  { id: 'calls', text: "Number of phone calls received per hour", dist: 'Poisson' },
  { id: 'rare', text: "Finding a shiny Pokemon (rare event, many trials)", dist: 'Poisson' },
];

const DISTRIBUTIONS = ['Binomial', 'Normal', 'Poisson', 'Exponential', 'Geometric'];

export function MatchPhenomenon({ onComplete }: { onComplete: () => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [score, setScore] = useState(0);

  const currentScenario = SCENARIOS[currentIndex];

  const handleGuess = (dist: string) => {
      if (feedback) return;

      const isCorrect = dist === currentScenario.dist;
      setFeedback(isCorrect ? 'correct' : 'wrong');

      if (isCorrect) {
          setScore(s => s + 1);
          setTimeout(() => {
              if (currentIndex < SCENARIOS.length - 1) {
                  setCurrentIndex(prev => prev + 1);
                  setFeedback(null);
              } else {
                  onComplete();
              }
          }, 1500);
      } else {
          setTimeout(() => setFeedback(null), 1500);
      }
  };

  return (
    <div className="py-8 space-y-8 max-w-2xl mx-auto">
        <div className="text-center">
           <h3 className="text-2xl font-bold mb-2">Match the Phenomenon</h3>
           <p className="text-gray-500">Which probability distribution models this real-world event?</p>
        </div>

        <div className="flex justify-between items-center text-sm font-medium text-gray-500 max-w-md mx-auto">
             <span>Case {currentIndex + 1} of {SCENARIOS.length}</span>
             <span>Score: {score}</span>
        </div>

        <div className="relative h-64">
             <AnimatePresence mode="wait">
                 <motion.div
                    key={currentScenario.id}
                    initial={{ scale: 0.9, opacity: 0, x: 50 }}
                    animate={{ scale: 1, opacity: 1, x: 0 }}
                    exit={{ scale: 0.9, opacity: 0, x: -50 }}
                    className="absolute inset-0"
                 >
                     <Card className={cn(
                         "h-full flex flex-col items-center justify-center p-8 text-center shadow-lg border-2 transition-colors duration-300",
                         feedback === 'correct' ? "border-green-500 bg-green-50" :
                         feedback === 'wrong' ? "border-red-500 bg-red-50" : "border-blue-100 bg-white"
                     )}>
                         <h4 className="text-2xl font-bold text-gray-800 mb-4 leading-snug">
                             {currentScenario.text}
                         </h4>
                         
                         {feedback === 'correct' && (
                             <div className="text-green-600 font-bold flex items-center gap-2 animate-pulse">
                                 <Check /> Perfect Match!
                             </div>
                         )}
                         {feedback === 'wrong' && (
                             <div className="text-red-600 font-bold flex items-center gap-2">
                                 <X /> Not quite fits the model.
                             </div>
                         )}
                     </Card>
                 </motion.div>
             </AnimatePresence>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pt-8">
            {DISTRIBUTIONS.map(dist => (
                <Button
                    key={dist}
                    variant="outline"
                    className="h-16 text-lg hover:border-blue-400 hover:bg-blue-50 transition-all"
                    onClick={() => handleGuess(dist)}
                    disabled={!!feedback}
                >
                    {dist}
                </Button>
            ))}
        </div>
    </div>
  );
}
