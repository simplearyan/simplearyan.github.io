import React from 'react';
import { QuestProvider, useQuest, LEVELS } from '../context/QuestContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../../ui/Button';
import { ArrowLeft, Trophy, Star } from 'lucide-react';

function QuestHeader() {
  const { progress } = useQuest();
  
  // Calculate total score
  const totalScore = Object.values(progress.scores).reduce((a, b) => a + b, 0);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-gray-200 bg-white/80 backdrop-blur-md px-4 flex items-center justify-between">
       <div className="flex items-center gap-4">
         <a href="/quest" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="font-medium hidden sm:inline">Map</span>
         </a>
         <div className="h-6 w-px bg-gray-300 mx-2" />
         <h1 className="font-bold text-gray-800 text-lg tracking-tight">Statistical Quest</h1>
       </div>

       <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-yellow-600 font-semibold bg-yellow-50 px-3 py-1 rounded-full border border-yellow-200">
             <Trophy className="w-4 h-4" />
             <span>{totalScore} <span className="text-xs text-yellow-500 font-normal">XP</span></span>
          </div>
       </div>
    </header>
  );
}

function PageTransition({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full max-w-5xl mx-auto pt-24 pb-12 px-6"
        >
            {children}
        </motion.div>
    )
}

export function QuestShell({ children }) {
  return (
    <QuestProvider>
       <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden relative">
          {/* Background Elements */}
          <div className="fixed inset-0 z-0 pointer-events-none">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
              <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-400 opacity-20 blur-[100px]"></div>
              <div className="absolute right-0 bottom-0 -z-10 h-[400px] w-[400px] rounded-full bg-purple-400 opacity-20 blur-[100px] translate-y-1/2 translate-x-1/2"></div>
          </div>
          
          <div className="relative z-10">
            <QuestHeader />
            <PageTransition>
                {children}
            </PageTransition>
          </div>
       </div>
    </QuestProvider>
  );
}
