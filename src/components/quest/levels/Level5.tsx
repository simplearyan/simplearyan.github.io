import React, { useState } from 'react';
import { useQuest } from '../context/QuestContext';
import { motion, AnimatePresence } from 'framer-motion';
import { QuestShell } from '../../layout/QuestShell';
import { Button } from '../../ui/Button';
import { Card } from '../../ui/Card';
import { Check, ArrowRight, Search } from 'lucide-react';

import { EstimationWorkshop } from './Level5/EstimationWorkshop';
import { HypothesisShowdown } from './Level5/HypothesisShowdown';

const STAGES = {
  INTRO: 'intro',
  CHALLENGE_1: 'estimation',
  CHALLENGE_2: 'hypothesis',
  COMPLETE: 'complete',
};

export function Level5Container() {
  const [stage, setStage] = useState(STAGES.INTRO);
  const { completeLevel } = useQuest();

  const handleChallenge1Complete = () => {
    setStage(STAGES.CHALLENGE_2);
  };

  const handleChallenge2Complete = () => {
    completeLevel('level-5', 300);
    setStage(STAGES.COMPLETE);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        {stage === STAGES.INTRO && (
          <motion.div
            key="intro"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <Card className="p-8 text-center space-y-6">
               <div className="mx-auto w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mb-6">
                  <Search size={40} />
               </div>
               <h2 className="text-3xl font-bold text-gray-900">The Detective’s Trial</h2>
               <p className="text-lg text-gray-600 leading-relaxed">
                 The world is noisy. Can you find the signal? It's time to test your hypotheses in the court of statistics.
               </p>
               <div className="pt-4">
                 <Button size="lg" onClick={() => setStage(STAGES.CHALLENGE_1)}>
                    Begin Investigation <ArrowRight className="ml-2 w-5 h-5" />
                 </Button>
               </div>
            </Card>
          </motion.div>
        )}

        {stage === STAGES.CHALLENGE_1 && (
           <EstimationWorkshop key="c1" onComplete={handleChallenge1Complete} />
        )}

        {stage === STAGES.CHALLENGE_2 && (
           <HypothesisShowdown key="c2" onComplete={handleChallenge2Complete} />
        )}

        {stage === STAGES.COMPLETE && (
          <motion.div
            key="complete"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-6"
          >
             <div className="mx-auto w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6 animate-bounce">
                  <Check size={48} />
             </div>
             <h2 className="text-3xl font-bold text-gray-900">Level Complete!</h2>
             <p className="text-xl text-gray-600">
               You have proven yourself. Only one challenge remains...
             </p>
             <div className="flex justify-center gap-4 pt-4">
                 <Button variant="outline" onClick={() => window.location.href = '/quest'}>
                    Back to Map
                 </Button>
                 {/* Next level button placeholder */}
                 <Button disabled title="Coming Soon">
                    Await Boss Level
                 </Button>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Level5Page() {
    return (
        <QuestShell>
            <Level5Container />
        </QuestShell>
    );
}
