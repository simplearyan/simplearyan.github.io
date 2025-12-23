import React, { useState } from 'react';
import { Button } from '../../../ui/Button';
import { Card } from '../../../ui/Card';
import { Check, ArrowRight } from 'lucide-react';
import { cn } from '../../../ui/Button';

const DATASET = [2, 3, 5, 6, 7, 7, 117];

export function CentralTendencyArena({ onComplete }: { onComplete: () => void }) {
  const [answers, setAnswers] = useState({ mean: '', median: '', mode: '' });
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);

  // Correct answers
  const correctMean = 21; // Sum = 147, N=7 -> 147/7 = 21
  const correctMedian = 6;
  const correctMode = 7;

  const handleSubmit = () => {
      const mean = parseFloat(answers.mean);
      const median = parseFloat(answers.median);
      const mode = parseFloat(answers.mode);

      const meanOk = Math.abs(mean - correctMean) < 0.1;
      const medianOk = Math.abs(median - correctMedian) < 0.1;
      const modeOk = Math.abs(mode - correctMode) < 0.1;

      if (meanOk && medianOk && modeOk) {
          setFeedback('correct');
          setTimeout(onComplete, 3000);
      } else {
          setFeedback('wrong');
      }
  };

  return (
    <div className="py-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto">
           <h3 className="text-2xl font-bold mb-2">The Central Tendency Arena</h3>
           <p className="text-gray-500">
               A reliable statistician knows which average to trust. Calculate the measures for this dataset.
           </p>
        </div>

        <Card className="p-8 max-w-3xl mx-auto">
             <div className="mb-8 p-6 bg-slate-900 rounded-xl text-center text-white/90 font-mono text-xl sm:text-2xl tracking-widest shadow-inner">
                 {`{ 2, 3, 5, 6, 7, 7, 117 }`}
             </div>

             <div className="grid md:grid-cols-3 gap-8">
                 {/* Mean Input */}
                 <div className="group">
                     <label className="text-xs uppercase font-bold text-gray-500 mb-2 block tracking-wider">Mean (Average)</label>
                     <div className="relative">
                        <input 
                            type="number" 
                            value={answers.mean}
                            onChange={e => setAnswers(prev => ({...prev, mean: e.target.value}))}
                            className="w-full bg-white border-2 border-gray-100 rounded-xl p-4 text-center text-xl font-bold text-gray-800 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-gray-200"
                            placeholder="μ"
                        />
                     </div>
                 </div>

                 {/* Median Input */}
                 <div className="group">
                     <label className="text-xs uppercase font-bold text-gray-500 mb-2 block tracking-wider">Median (Middle)</label>
                     <div className="relative">
                        <input 
                            type="number" 
                            value={answers.median}
                            onChange={e => setAnswers(prev => ({...prev, median: e.target.value}))}
                            className="w-full bg-white border-2 border-gray-100 rounded-xl p-4 text-center text-xl font-bold text-gray-800 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all placeholder:text-gray-200"
                            placeholder="M"
                        />
                     </div>
                 </div>

                 {/* Mode Input */}
                 <div className="group">
                     <label className="text-xs uppercase font-bold text-gray-500 mb-2 block tracking-wider">Mode (Frequent)</label>
                     <div className="relative">
                        <input 
                            type="number" 
                            value={answers.mode}
                            onChange={e => setAnswers(prev => ({...prev, mode: e.target.value}))}
                            className="w-full bg-white border-2 border-gray-100 rounded-xl p-4 text-center text-xl font-bold text-gray-800 focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all placeholder:text-gray-200"
                            placeholder="Mo"
                        />
                     </div>
                 </div>
             </div>

             {feedback === 'correct' && (
                 <div className="mt-8 bg-green-50 border border-green-200 text-green-800 p-4 rounded-lg">
                     <h4 className="font-bold flex items-center mb-2"><Check className="mr-2" /> Correct!</h4>
                     <p>
                         Did you notice? The <strong>Mean (21)</strong> was heavily dragged up by the outlier (117), 
                         while the <strong>Median (6)</strong> stayed close to the majority of the data. 
                         The Median is often a safer bet when outliers are present!
                     </p>
                 </div>
             )}

            {feedback === 'wrong' && (
                 <div className="mt-8 bg-red-50 border border-red-200 text-red-800 p-4 rounded-lg text-center">
                     <p className="font-semibold">Check your calculations properly!</p>
                     <p className="text-sm mt-1">Mean = Sum / Count (7)</p>
                 </div>
             )}

             <div className="mt-8 flex justify-center">
                 <Button 
                    size="lg" 
                    onClick={handleSubmit} 
                    disabled={feedback === 'correct'}
                    className={cn(
                        "w-full md:w-auto px-12 py-6 text-lg rounded-full shadow-lg transition-all",
                        feedback === 'correct' ? "bg-green-600 hover:bg-green-700" : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-blue-200 hover:scale-105"
                    )}
                 >
                    {feedback === 'correct' ? "Correct! Proceeding..." : "Submit Analysis"}
                    {feedback !== 'correct' && <ArrowRight className="ml-2 w-5 h-5" />}
                 </Button>
             </div>
        </Card>
    </div>
  );
}
