import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../../../ui/Button';
import { Card } from '../../../ui/Card';
import { Check, X } from 'lucide-react';
import { cn } from '../../../ui/Button';

const DATA_ITEMS = [
  { id: 1, label: 'Blood Group', type: 'categorical', hint: 'A, B, AB, O... describes a quality.' },
  { id: 2, label: 'Temperature', type: 'numerical', hint: 'Measured in degrees. Math operations make sense.' },
  { id: 3, label: 'T-shirt Size', type: 'categorical', hint: 'S, M, L, XL... ordered categories.' },
  { id: 4, label: 'Weight', type: 'numerical', hint: 'Measured in kg/lbs. Ratio scale.' },
  { id: 5, label: 'Gender', type: 'categorical', hint: 'Describes a category, not a quantity.' },
  { id: 6, label: 'Marks', type: 'numerical', hint: 'Countable score, e.g., 85/100.' },
];

export function ClassificationChallenge({ onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [feedback, setFeedback] = useState(null); // 'correct' | 'wrong'
  const [score, setScore] = useState(0);

  const currentItem = DATA_ITEMS[currentIndex];

  const handleChoice = (choice) => {
    if (feedback) return; // Prevent double clicks

    const isCorrect = choice === currentItem.type;
    setFeedback(isCorrect ? 'correct' : 'wrong');

    if (isCorrect) {
      setScore(s => s + 10);
    } else {
        // Penalty or just no points?
    }

    setTimeout(() => {
      setFeedback(null);
      if (currentIndex < DATA_ITEMS.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else {
        onComplete();
      }
    }, 1500); // Wait for feedback reading
  };

  const progress = ((currentIndex) / DATA_ITEMS.length) * 100;

  return (
    <div className="space-y-8 py-8">
      <div className="flex justify-between items-center text-sm font-medium text-gray-500">
          <span>Progress: {Math.round(progress)}%</span>
          <span>Score: {score}</span>
      </div>
      
      {/* Progress Bar */}
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-blue-500" 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
         {/* Button Zone Left */}
         <button
            onClick={() => handleChoice('categorical')}
            className="hidden md:flex h-64 rounded-2xl border-4 border-dashed border-purple-200 bg-purple-50 hover:bg-purple-100 hover:border-purple-400 items-center justify-center transition-all"
         >
            <span className="text-2xl font-bold text-purple-700">Categorical</span>
         </button>

         {/* Central Card Area (Mobile: Stacked) */}
         <div className="col-span-1 md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-96 z-10">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentItem.id}
                    initial={{ y: 50, opacity: 0, scale: 0.9 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: -50, opacity: 0, scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                >
                    <Card className={cn(
                        "h-64 flex flex-col items-center justify-center p-8 text-center shadow-xl border-2 transition-colors",
                        feedback === 'correct' ? "border-green-500 bg-green-50" : 
                        feedback === 'wrong' ? "border-red-500 bg-red-50" : "border-gray-200"
                    )}>
                        <h3 className="text-3xl font-extrabold text-gray-800 mb-2">{currentItem.label}</h3>
                        
                        {feedback && (
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.5 }} 
                                animate={{ opacity: 1, scale: 1 }}
                                className={cn("mt-4 font-semibold flex items-center gap-2", feedback === 'correct' ? "text-green-700" : "text-red-700")}
                            >
                                {feedback === 'correct' ? <Check /> : <X />}
                                {feedback === 'correct' ? "Correct!" : "Try again!"}
                            </motion.div>
                        )}
                        
                        {feedback === 'wrong' && (
                             <p className="text-sm text-gray-600 mt-2">{currentItem.hint}</p>
                        )}

                        {/* Mobile Buttons */}
                        <div className="grid grid-cols-2 gap-4 mt-8 w-full md:hidden">
                            <Button 
                                onClick={() => handleChoice('categorical')} 
                                className="bg-purple-100 text-purple-700 hover:bg-purple-200 border border-purple-200 py-4 h-auto"
                            >
                                Categorical
                            </Button>
                            <Button 
                                onClick={() => handleChoice('numerical')} 
                                className="bg-blue-100 text-blue-700 hover:bg-blue-200 border border-blue-200 py-4 h-auto"
                            >
                                Numerical
                            </Button>
                        </div>
                    </Card>
                </motion.div>
            </AnimatePresence>
         </div>

         {/* Button Zone Right */}
         <button
            onClick={() => handleChoice('numerical')}
            className="hidden md:flex h-64 rounded-2xl border-4 border-dashed border-blue-200 bg-blue-50 hover:bg-blue-100 hover:border-blue-400 items-center justify-center transition-all"
         >
            <span className="text-2xl font-bold text-blue-700">Numerical</span>
         </button>
      </div>
      
      <div className="text-center text-gray-400 text-sm mt-12">
        Tip: Categorical data describes qualities. Numerical data describes quantities.
      </div>
    </div>
  );
}
