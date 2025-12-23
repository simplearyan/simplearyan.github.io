import React, { useState } from 'react';
import { Button } from '../../../ui/Button';
import { Card } from '../../../ui/Card';
import { motion } from 'framer-motion';
import { Crown, Sparkles, AlertCircle } from 'lucide-react';
import { cn } from '../../../ui/Button';

export function OraclePrediction({ onComplete }: { onComplete: () => void }) {
  const [estimate, setEstimate] = useState('');
  const [feedback, setFeedback] = useState<'correct' | 'near' | 'wrong' | null>(null);

  // Scenario:
  // Model: Sales = 10 * AdSpend + 50
  // Question: If AdSpend is 5, what are Sales?
  // Answer: 100
  
  const handleSubmit = () => {
      const val = parseFloat(estimate);
      if (val === 100) {
          setFeedback('correct');
      } else if (val >= 90 && val <= 110) {
          setFeedback('near');
      } else {
          setFeedback('wrong');
      }
  };

  return (
    <div className="py-8 space-y-8 max-w-2xl mx-auto">
         <div className="text-center">
           <h3 className="text-2xl font-bold mb-2">The Oracle's Prediction</h3>
           <p className="text-gray-500">A model is only as good as its predictions. Can you forecast the future?</p>
        </div>

        <Card className="p-8">
            <div className="space-y-6">
                <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                    <h4 className="font-bold text-lg text-purple-900 mb-2 flex items-center gap-2">
                        <Sparkles className="w-5 h-5" /> The Golden Equation
                    </h4>
                    <p className="text-purple-800 font-mono text-xl text-center py-4 bg-white/50 rounded-lg border border-purple-100 shadow-sm">
                        Total Sales = 10 × (Ad Spend) + 50
                    </p>
                    <p className="text-sm text-purple-700 mt-2">
                        Your data science team has derived this regression equation from historical data.
                    </p>
                </div>

                <div className="space-y-4">
                     <p className="font-medium text-gray-800">
                         The marketing team plans to spend <span className="font-bold text-blue-600 text-lg">5 million</span> on ads next quarter.
                     </p>
                     <p className="text-gray-600">
                         Based on your model, what is the predicted Total Sales Volume?
                     </p>
                     
                     <div className="flex gap-4">
                         <input 
                            type="number" 
                            className="flex-1 border-2 border-gray-200 rounded-lg p-3 text-lg"
                            placeholder="Enter prediction..."
                            value={estimate}
                            onChange={e => setEstimate(e.target.value)}
                         />
                         <Button size="lg" onClick={handleSubmit}>Predict</Button>
                     </div>
                </div>

                <AnimatePresence>
                    {feedback && (
                        <motion.div 
                            initial={{ opacity: 0, height: 0 }} 
                            animate={{ opacity: 1, height: 'auto' }}
                            className={cn(
                                "rounded-lg p-4 flex items-start gap-3",
                                feedback === 'correct' ? "bg-green-100 text-green-900" : 
                                feedback === 'near' ? "bg-yellow-100 text-yellow-900" : "bg-red-100 text-red-900"
                            )}
                        >
                            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                            <div>
                                {feedback === 'correct' && "Spot on! 10 * 5 + 50 = 100. The board is impressed."}
                                {feedback === 'near' && "Close... check your math. 10 * 5 + 50 = ?"}
                                {feedback === 'wrong' && "Way off. Remember: y = mx + c. Plug in x = 5."}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {feedback === 'correct' && (
                    <motion.div 
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="pt-6 border-t border-gray-100 text-center"
                    >
                        <Button className="w-full h-14 text-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg" onClick={onComplete}>
                            <Crown className="mr-2" /> Claim Your Degree
                        </Button>
                    </motion.div>
                )}
            </div>
        </Card>
    </div>
  );
}
