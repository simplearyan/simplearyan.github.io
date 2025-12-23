import React, { useState } from 'react';
import { Button } from '../../../ui/Button';
import { Card } from '../../../ui/Card';
import { motion } from 'framer-motion';
import { Check, AlertTriangle, ArrowRight } from 'lucide-react';

export function BayesPuzzle({ onComplete }) {
  const [step, setStep] = useState(0); // 0: Intro, 1: Prior, 2: Likelihood, 3: Posterior
  const [guess, setGuess] = useState('');
  const [showResult, setShowResult] = useState(false);

  // Scenario: Rare Disease
  // P(D) = 0.01 (1%)
  // P(Pos | D) = 0.99 (Sensitivity)
  // P(Pos | No D) = 0.05 (False Positive Rate - 5%)
  
  // Bayes: P(D | Pos) = (0.99 * 0.01) / [ (0.99 * 0.01) + (0.05 * 0.99) ]
  // Numerator = 0.0099
  // Denom = 0.0099 + 0.0495 = 0.0594
  // Result = 0.166... (~16.7%)

  const handleSubmit = () => {
      const val = parseFloat(guess);
      if (val >= 15 && val <= 18) {
          setShowResult('correct');
      } else {
          setShowResult('wrong');
      }
  };

  return (
    <div className="py-8 space-y-8 max-w-3xl mx-auto">
         <div className="text-center">
           <h3 className="text-2xl font-bold mb-2">The Bayes' Logic Puzzle</h3>
           <p className="text-gray-500">The test is positive. But do you actually have the disease?</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-slate-50 border-slate-200">
                <h4 className="font-bold text-lg mb-4">The Scenario</h4>
                <ul className="space-y-3 text-sm">
                    <li className="flex justify-between items-center p-2 bg-white rounded border border-gray-200">
                        <span>Prevalence P(D)</span>
                        <span className="font-mono font-bold text-blue-600">1%</span>
                    </li>
                    <li className="flex justify-between items-center p-2 bg-white rounded border border-gray-200">
                        <span>True Positive Rate P(+|D)</span>
                        <span className="font-mono font-bold text-green-600">99%</span>
                    </li>
                    <li className="flex justify-between items-center p-2 bg-white rounded border border-gray-200">
                        <span>False Positive Rate P(+|No D)</span>
                        <span className="font-mono font-bold text-red-600">5%</span>
                    </li>
                </ul>
                <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded text-sm text-yellow-800">
                    <AlertTriangle className="w-4 h-4 inline mr-1 mb-1" />
                    <strong>Question:</strong> A patient tests <strong>Positive (+)</strong>. What is the probability they actually have the disease? P(D|+)?
                </div>
            </Card>

            <div className="space-y-6">
                <div className="relative h-64 w-full bg-white rounded-xl border border-gray-200 p-4 overflow-hidden">
                    <div className="absolute inset-0 flex flex-col">
                        {/* Tree Diagram */}
                        <div className="flex-1 flex">
                            {/* Disease Branch (1%) */}
                            <div className="w-[20%] h-full flex flex-col border-r border-dashed border-gray-300 relative">
                                <div className="text-[10px] text-center text-gray-500 bg-gray-100 py-1">Disease (1%)</div>
                                <div className="flex-1 bg-green-100 flex items-center justify-center text-xs text-green-800 font-bold" title="True Positive">
                                    Hit <br/> (0.99%)
                                </div>
                                <div className="h-[1%] bg-red-100" title="False Negative"></div>
                            </div>
                            
                            {/* No Disease Branch (99%) */}
                            <div className="w-[80%] h-full flex flex-col relative">
                                <div className="text-[10px] text-center text-gray-500 bg-gray-100 py-1">Healthy (99%)</div>
                                <div className="h-[5%] bg-red-100 flex items-center justify-center text-xs text-red-800 font-bold border-b border-white" title="False Positive">
                                    False Alarm <br/> (4.95%)
                                </div>
                                <div className="flex-1 bg-blue-50"></div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="space-y-4">
                    <label className="block text-sm font-medium text-gray-700">Enter your estimate (%):</label>
                    <div className="flex gap-2">
                        <input 
                            type="number" 
                            className="flex-1 border-2 border-gray-200 rounded-lg p-3"
                            placeholder="e.g. 50"
                            value={guess}
                            onChange={e => setGuess(e.target.value)}
                        />
                        <Button onClick={handleSubmit} disabled={showResult === 'correct'}>Check</Button>
                    </div>
                    <p className="text-xs text-gray-400">Hint: Look at the red "False Alarm" area vs the green "Hit" area in the diagram.</p>
                </div>
            </div>
        </div>

        {showResult === 'correct' && (
             <motion.div initial={{opacity:0}} animate={{opacity:1}}  className="bg-green-100 border-l-4 border-green-500 p-4 rounded text-green-800">
                 <h4 className="font-bold text-lg">Correct! It's ~16.7%</h4>
                 <p className="mt-2">
                     Even with a 99% accurate test, the rarity of the disease means most positives are false alarms. 
                     This is the counter-intuitive power of Bayes' Theorem.
                 </p>
                 <Button className="mt-4" onClick={onComplete}>Complete Level</Button>
             </motion.div>
        )}

        {showResult === 'wrong' && (
             <motion.div initial={{opacity:0}} animate={{opacity:1}} className="bg-red-50 border-l-4 border-red-500 p-4 rounded text-red-800">
                 <h4 className="font-bold">Not quite.</h4>
                 <p className="mt-2">
                     Likely you guessed too high (like 95% or 99%). <br/>
                     Look at the diagram: The "False Alarm" block (red) is actually <strong>5x larger</strong> than the "True Hit" block (green).
                     So the chance is roughly 1 in 6.
                 </p>
             </motion.div>
        )}
    </div>
  );
}
