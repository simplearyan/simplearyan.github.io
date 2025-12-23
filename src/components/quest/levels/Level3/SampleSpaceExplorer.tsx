import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../../../ui/Button';
import { Card } from '../../../ui/Card';
import { Coins, Dices, ArrowRight, Check } from 'lucide-react';
import { cn } from '../../../ui/Button';

// Utility for formatting
const formatSet = (items) => `{ ${items.join(', ')} }`;

export function SampleSpaceExplorer({ onComplete }) {
  const [mode, setMode] = useState('coins'); // 'coins' | 'dice'
  const [history, setHistory] = useState([]);
  const [isSimulationDone, setIsSimulationDone] = useState(false);
  const [userAnswer, setUserAnswer] = useState(null);
  const [feedback, setFeedback] = useState(null);

  const handleCoinFlip = () => {
      const result = Math.random() > 0.5 ? 'H' : 'T';
      const newHistory = [...history, result];
      setHistory(newHistory);
      if (newHistory.length >= 10) setIsSimulationDone(true);
  };

  const handleDiceRoll = () => {
      const result = Math.floor(Math.random() * 6) + 1;
      const newHistory = [...history, result];
      setHistory(newHistory);
      if (newHistory.length >= 10) setIsSimulationDone(true);
  };

  const checkSampleSpace = (answer) => {
      let correct = false;
      if (mode === 'coins') correct = answer === '{ H, T }';
      if (mode === 'dice') correct = answer === '{ 1, 2, 3, 4, 5, 6 }';

      setFeedback(correct ? 'correct' : 'wrong');
      if (correct) {
          setTimeout(() => {
              if (mode === 'coins') {
                  setMode('dice');
                  setHistory([]);
                  setIsSimulationDone(false);
                  setFeedback(null);
                  setUserAnswer(null);
              } else {
                  onComplete();
              }
          }, 2000);
      }
  };

  return (
    <div className="py-8 space-y-8 max-w-2xl mx-auto">
        <div className="text-center">
           <h3 className="text-2xl font-bold mb-2">The Sample Space Explorer</h3>
           <p className="text-gray-500">Perform experiments to discover the universe of all possible outcomes (S).</p>
        </div>

        <Card className="p-8">
            <div className="flex justify-center gap-4 mb-8">
                <Button 
                    variant={mode === 'coins' ? 'primary' : 'outline'}
                    onClick={() => { setMode('coins'); setHistory([]); setIsSimulationDone(false); }}
                >
                    <Coins className="mr-2 w-4 h-4" /> Coin Toss
                </Button>
                <Button 
                    variant={mode === 'dice' ? 'primary' : 'outline'}
                    onClick={() => { setMode('dice'); setHistory([]); setIsSimulationDone(false); }}
                >
                    <Dices className="mr-2 w-4 h-4" /> Die Roll
                </Button>
            </div>

            <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-xl p-8 min-h-[200px] flex flex-col items-center justify-center relative overflow-hidden">
                <div className="flex flex-wrap justify-center gap-3 mb-4">
                    <AnimatePresence>
                        {history.map((res, i) => (
                            <motion.div 
                                key={i}
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                className={cn(
                                    "w-12 h-12 flex items-center justify-center rounded-lg font-bold text-xl shadow-sm border",
                                    mode === 'coins' ? "bg-yellow-100 border-yellow-300 text-yellow-700 rounded-full" : "bg-white border-gray-300 text-gray-800"
                                )}
                            >
                                {res}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {!isSimulationDone && (
                    <Button onClick={mode === 'coins' ? handleCoinFlip : handleDiceRoll}>
                        {mode === 'coins' ? "Flip Coin" : "Roll Die"}
                    </Button>
                )}

                {isSimulationDone && (
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }} 
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <p className="font-medium text-gray-700 mb-4">You've seen the outcomes. Define the Sample Space (S).</p>
                        
                        <div className="grid gap-3">
                            {mode === 'coins' ? (
                                <>
                                    <Button variant="outline" onClick={() => checkSampleSpace('{ H, T }')}>{`S = { H, T }`}</Button>
                                    <Button variant="outline" onClick={() => checkSampleSpace('{ H, H, T }')}>{`S = { H, H, T }`}</Button>
                                    <Button variant="outline" onClick={() => checkSampleSpace('{ 1, 0 }')}>{`S = { 1, 0 }`}</Button>
                                </>
                            ) : (
                                <>
                                    <Button variant="outline" onClick={() => checkSampleSpace('{ 1, 2, 3, 4, 5, 6 }')}>{`S = { 1, 2, 3, 4, 5, 6 }`}</Button>
                                    <Button variant="outline" onClick={() => checkSampleSpace('{ 1, 6 }')}>{`S = { 1, 6 }`}</Button>
                                    <Button variant="outline" onClick={() => checkSampleSpace('{ Even, Odd }')}>{`S = { Even, Odd }`}</Button>
                                </>
                            )}
                        </div>
                    </motion.div>
                )}
            </div>
            
            <AnimatePresence>
                {feedback && (
                    <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        className={cn(
                            "mt-4 p-4 rounded-lg flex items-center justify-center gap-2",
                            feedback === 'correct' ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                        )}
                    >
                        {feedback === 'correct' ? <><Check /> Correct! The sample space contains all unique possible outcomes.</> : "Incorrect. Remember, S must list ALL POSSIBLE unique outcomes."}
                    </motion.div>
                )}
            </AnimatePresence>
        </Card>
    </div>
  );
}
