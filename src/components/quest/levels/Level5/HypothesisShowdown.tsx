import React, { useState } from 'react';
import { Button } from '../../../ui/Button';
import { Card } from '../../../ui/Card';
import { motion, AnimatePresence } from 'framer-motion';
import { Gavel, Scale, AlertCircle } from 'lucide-react';
import { cn } from '../../../ui/Button';

const CASES = [
  { 
      id: 1, 
      title: 'The "Loaded" Die', 
      desc: "Defense claims the die is fair (H0). Prosecution shows a P-value of 0.03. The law requires significance level (α) of 0.05.", 
      pValue: 0.03, 
      alpha: 0.05, 
      correctDecision: 'reject',
      explanation: "Since p (0.03) < α (0.05), the evidence is strong enough to convict (Reject H0). The die is likely loaded."
  },
  { 
      id: 2, 
      title: 'The Manufacturing Defect', 
      desc: "Factory claims < 1% defect rate (H0). Sample data shows P-value of 0.12. Strict quality control uses α = 0.01.", 
      pValue: 0.12, 
      alpha: 0.01, 
      correctDecision: 'fail_reject',
      explanation: "Since p (0.12) > α (0.01), there is not enough evidence to stop production. We fail to reject the claim."
  },
  { 
      id: 3, 
      title: 'The New Drug', 
      desc: "Pharma company claims drug works better than placebo (H0: No difference). P-value = 0.045. FDA standard α = 0.05.", 
      pValue: 0.045, 
      alpha: 0.05, 
      correctDecision: 'reject',
      explanation: "A close call! But p (0.045) < α (0.05). The results are statistically significant. The drug likely works."
  }
];

export function HypothesisShowdown({ onComplete }: { onComplete: () => void }) {
  const [currentCaseIndex, setCurrentCaseIndex] = useState(0);
  const [feedback, setFeedback] = useState<{correct: boolean, text: string} | null>(null);

  const currentCase = CASES[currentCaseIndex];

  const handleVerdict = (verdict: 'reject' | 'fail_reject') => {
      if (feedback) return;

      const isCorrect = verdict === currentCase.correctDecision;
      setFeedback({
          correct: isCorrect,
          text: isCorrect ? "Justice Served! " + currentCase.explanation : "Objection! " + currentCase.explanation
      });
  };

  const nextCase = () => {
      setFeedback(null);
      if (currentCaseIndex < CASES.length - 1) {
          setCurrentCaseIndex(p => p + 1);
      } else {
          onComplete();
      }
  };

  return (
    <div className="py-8 space-y-8 max-w-2xl mx-auto">
        <div className="text-center">
           <h3 className="text-2xl font-bold mb-2">Hypothesis Showdown</h3>
           <p className="text-gray-500">You are the Judge. Weigh the evidence (P-value) against the standard of doubt (Alpha).</p>
        </div>

        <div className="flex justify-center mb-4">
             <div className="bg-gray-800 text-white rounded-full px-4 py-1 text-sm font-mono flex items-center gap-2">
                 <Scale size={14} /> Case {currentCaseIndex + 1} / {CASES.length}
             </div>
        </div>

        <Card className="p-8 relative overflow-hidden">
             <AnimatePresence mode="wait">
                 <motion.div
                    key={currentCase.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                 >
                     <h4 className="text-xl font-bold border-b pb-2">{currentCase.title}</h4>
                     <p className="text-lg leading-relaxed text-gray-700">
                         {currentCase.desc}
                     </p>
                     
                     <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-lg border border-slate-200">
                         <div className="text-center">
                             <div className="text-xs text-gray-500 uppercase font-bold tracking-wider">Evidence (P-Value)</div>
                             <div className="text-2xl font-mono text-blue-600 font-bold">{currentCase.pValue}</div>
                         </div>
                         <div className="text-center border-l border-slate-200">
                             <div className="text-xs text-gray-500 uppercase font-bold tracking-wider">Threshold (Alpha)</div>
                             <div className="text-2xl font-mono text-gray-600 font-bold">{currentCase.alpha}</div>
                         </div>
                     </div>
                 </motion.div>
             </AnimatePresence>

            {feedback && (
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={cn(
                        "mt-6 p-4 rounded-lg flex items-start gap-3 text-sm",
                        feedback.correct ? "bg-green-100 text-green-900" : "bg-red-100 text-red-900"
                    )}
                >
                    <AlertCircle className="shrink-0 mt-0.5" size={18} />
                    <div>{feedback.text}</div>
                </motion.div>
            )}

            <div className="grid grid-cols-2 gap-4 mt-8">
                {!feedback ? (
                    <>
                        <Button 
                            variant="danger" 
                            className="h-16 text-lg" 
                            onClick={() => handleVerdict('reject')}
                        >
                            <Gavel className="mr-2" /> Reject Null (Guilty)
                        </Button>
                        <Button 
                            variant="secondary" 
                            className="h-16 text-lg"
                            onClick={() => handleVerdict('fail_reject')}
                        >
                            Fail to Reject (Innocent)
                        </Button>
                    </>
                ) : (
                    <Button onClick={nextCase} className="col-span-2 h-14 text-lg">
                        {currentCaseIndex < CASES.length - 1 ? "Next Case" : "Complete Level"}
                    </Button>
                )}
            </div>
        </Card>
    </div>
  );
}
