import React, { useState } from 'react';
import { useQuest } from '../context/QuestContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../../ui/Button';
import { Card } from '../../ui/Card';
import { Check, ArrowRight, Database } from 'lucide-react';
import clsx from 'clsx'; // Import clsx directly if needed or use from utils

import { ClassificationChallenge } from './Level1/ClassificationChallenge';
import { MeasurementSort } from './Level1/MeasurementSort';
import { QuestShell } from '../layout/QuestShell';

// Stages of Level 1
const STAGES = {
  INTRO: 'intro',
  CHALLENGE_1: 'challenge_1', // Classification
  CHALLENGE_2: 'challenge_2', // Scales
  COMPLETE: 'complete',
};

export function Level1Container() {
  const [stage, setStage] = useState(STAGES.INTRO);
  const { completeLevel } = useQuest();

  const handleChallenge1Complete = () => {
    setStage(STAGES.CHALLENGE_2);
  };

  const handleChallenge2Complete = () => {
    completeLevel('level-1', 100); // 100 XP for completing level 1
    setStage(STAGES.COMPLETE);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <AnimatePresence mode="wait">
        {stage === STAGES.INTRO && (
          <motion.div
            key="intro"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <Card className="p-8 text-center space-y-6">
               <div className="mx-auto w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6">
                  <Database size={40} />
               </div>
               <h2 className="text-3xl font-bold text-gray-900">The Foundation of Data</h2>
               <p className="text-lg text-gray-600 leading-relaxed">
                 Before we can analyze the world, we must understand the language of data.
                 In this level, you will learn to distinguish between different types of data 
                 and the scales we use to measure them.
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
           <ClassificationChallenge key="c1" onComplete={handleChallenge1Complete} />
        )}

        {stage === STAGES.CHALLENGE_2 && (
           <MeasurementSort key="c2" onComplete={handleChallenge2Complete} />
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
               You have mastered the foundations of data classification.
             </p>
             <div className="flex justify-center gap-4 pt-4">
                 <Button variant="outline" onClick={() => window.location.href = '/quest'}>
                    Back to Map
                 </Button>
                 <Button onClick={() => window.location.href = '/quest/level-2'}>
                    Next Level <ArrowRight className="ml-2 w-5 h-5" />
                 </Button>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Level1Page() {
    return (
        <QuestShell>
            <Level1Container />
        </QuestShell>
    );
}
