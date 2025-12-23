import React, { useState } from 'react';
import { useQuest } from '../context/QuestContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../../ui/Button';
import { Card } from '../../ui/Card';
import { Check, ArrowRight, BarChart2 } from 'lucide-react';

import { ChartGuardian } from './Level2/ChartGuardian';
import { CentralTendencyArena } from './Level2/CentralTendencyArena';
import { QuestShell } from '../layout/QuestShell';

const STAGES = {
  INTRO: 'intro',
  CHALLENGE_1: 'chart_guardian',
  CHALLENGE_2: 'central_tendency',
  COMPLETE: 'complete',
};

export function Level2Container() {
  const [stage, setStage] = useState(STAGES.INTRO);
  const { completeLevel } = useQuest();

  const handleChallenge1Complete = () => {
    setStage(STAGES.CHALLENGE_2);
  };

  const handleChallenge2Complete = () => {
    completeLevel('level-2', 150);
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
               <div className="mx-auto w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-6">
                  <BarChart2 size={40} />
               </div>
               <h2 className="text-3xl font-bold text-gray-900">The Descriptive Architect</h2>
               <p className="text-lg text-gray-600 leading-relaxed">
                 Data can be deceptive. A true architect knows how to summarize and visualize truth without distortion.
               </p>
               <div className="pt-4">
                 <Button size="lg" onClick={() => setStage(STAGES.CHALLENGE_1)}>
                    Start Mission <ArrowRight className="ml-2 w-5 h-5" />
                 </Button>
               </div>
            </Card>
          </motion.div>
        )}

        {stage === STAGES.CHALLENGE_1 && (
           <ChartGuardian key="c1" onComplete={handleChallenge1Complete} />
        )}

        {stage === STAGES.CHALLENGE_2 && (
           <CentralTendencyArena key="c2" onComplete={handleChallenge2Complete} />
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
               You can now guard against misleading charts and calculate robust summaries.
             </p>
             <div className="flex justify-center gap-4 pt-4">
                 <Button variant="outline" onClick={() => window.location.href = '/quest'}>
                    Back to Map
                 </Button>
                 <Button onClick={() => window.location.href = '/quest/level-3'}>
                    Next Level <ArrowRight className="ml-2 w-5 h-5" />
                 </Button>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Level2Page() {
    return (
        <QuestShell>
            <Level2Container />
        </QuestShell>
    );
}
