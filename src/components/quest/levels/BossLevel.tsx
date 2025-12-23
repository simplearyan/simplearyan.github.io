import React, { useState } from 'react';
import { useQuest } from '../context/QuestContext';
import { motion, AnimatePresence } from 'framer-motion';
import { QuestShell } from '../../layout/QuestShell';
import { Button } from '../../ui/Button';
import { Card } from '../../ui/Card';
import { Award, ArrowRight, TrendingUp } from 'lucide-react';
import confetti from 'canvas-confetti';

import { LeastSquaresChallenge } from './Boss/LeastSquaresChallenge';
import { OraclePrediction } from './Boss/OraclePrediction';

const STAGES = {
  INTRO: 'intro',
  CHALLENGE_1: 'least_squares',
  CHALLENGE_2: 'oracle',
  COMPLETE: 'victory',
};

export function BossLevelContainer() {
  const [stage, setStage] = useState(STAGES.INTRO);
  const { completeLevel } = useQuest();

  const handleChallenge1Complete = () => {
    setStage(STAGES.CHALLENGE_2);
  };

  const handleVictory = () => {
    completeLevel('boss', 500);
    setStage(STAGES.COMPLETE);
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });
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
            <Card className="p-8 text-center space-y-6 border-purple-200 bg-gradient-to-br from-white to-purple-50">
               <div className="mx-auto w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-6 shadow-iner">
                  <TrendingUp size={48} />
               </div>
               <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                   The Regression Ridge
               </h2>
               <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
                 You have reached the summit. Here, we do not just observe data; we master it. 
                 We draw lines through chaos to see the future.
               </p>
               <div className="pt-8">
                 <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-xl shadow-xl" onClick={() => setStage(STAGES.CHALLENGE_1)}>
                    Challenge the Boss <ArrowRight className="ml-2 w-6 h-6" />
                 </Button>
               </div>
            </Card>
          </motion.div>
        )}

        {stage === STAGES.CHALLENGE_1 && (
           <LeastSquaresChallenge key="c1" onComplete={handleChallenge1Complete} />
        )}

        {stage === STAGES.CHALLENGE_2 && (
           <OraclePrediction key="c2" onComplete={handleVictory} />
        )}

        {stage === STAGES.COMPLETE && (
          <motion.div
            key="complete"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-8 py-10"
          >
             <div className="mx-auto w-32 h-32 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 mb-6 shadow-lg animate-pulse">
                  <Award size={64} />
             </div>
             <div>
                <h1 className="text-5xl font-black text-gray-900 mb-4">QUEST COMPLETE!</h1>
                <p className="text-2xl text-gray-600">
                    You represent the top 1% of Data Adventurers.
                </p>
             </div>
             
             <Card className="max-w-md mx-auto p-6 bg-white shadow-xl border-t-4 border-yellow-400">
                 <h3 className="font-bold text-gray-800 text-lg uppercase tracking-wider mb-2">Certificate of Completion</h3>
                 <p className="italic text-gray-600">Awarded to</p>
                 <p className="text-3xl font-script text-blue-700 py-4">The User</p>
                 <p className="text-sm text-gray-500">For mastering Statistics</p>
             </Card>

             <div className="flex justify-center gap-4 pt-8">
                 <Button variant="outline" size="lg" onClick={() => window.location.href = '/quest'}>
                    Return Home
                 </Button>
                 <Button size="lg" onClick={() => window.location.href = '/'}>
                    Exit Game
                 </Button>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function BossLevelPage() {
    return (
        <QuestShell>
            <BossLevelContainer />
        </QuestShell>
    );
}
