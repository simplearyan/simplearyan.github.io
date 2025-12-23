import React from 'react';
import { useQuest, LEVELS } from './context/QuestContext';
import { motion } from 'framer-motion';
import { Lock, Play, CheckCircle } from 'lucide-react';
import { Card } from '../ui/Card';
import { cn } from '../ui/Button';

export function LevelMap() {
  const { isUnlocked, isCompleted, progress } = useQuest();

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {LEVELS.map((level, index) => {
        const unlocked = isUnlocked(level.id);
        const completed = isCompleted(level.id);
        const score = progress.scores[level.id] || 0;
        const isBoss = level.id === 'boss';

        return (
          <a
             key={level.id}
             href={unlocked ? level.path : '#'}
             className={cn("block group focus:outline-none", !unlocked && "cursor-not-allowed")}
             aria-disabled={!unlocked}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={cn(
                "h-full transition-all duration-500 relative overflow-hidden border",
                "backdrop-blur-sm bg-white/60",
                unlocked ? "hover:scale-[1.03] hover:shadow-xl cursor-pointer border-blue-200/50 hover:border-blue-400" : "bg-gray-100/50 border-gray-200 opacity-60 grayscale-[0.8]",
                completed && "border-green-200 bg-green-50/40",
                isBoss && unlocked && "border-purple-200 hover:border-purple-500 shadow-purple-100 ring-2 ring-purple-100"
              )}>
                {/* Background Pattern */}
                <div className={cn(
                    "absolute -right-12 -top-12 w-48 h-48 rounded-full transition-all duration-700 blur-2xl",
                    unlocked ? "bg-gradient-to-br from-blue-200 to-indigo-100 opacity-40 group-hover:opacity-70 group-hover:scale-125" : "bg-gray-200",
                    completed && "from-green-200 to-emerald-100",
                    isBoss && unlocked && "from-purple-400 to-pink-300 opacity-30"
                )} />

                <div className="relative p-6 flex flex-col h-full z-10">
                   <div className="flex justify-between items-start mb-4">
                      <div className={cn(
                        "w-12 h-12 rounded-2xl flex items-center justify-center text-xl font-black shadow-sm transition-transform duration-300 group-hover:rotate-6",
                        unlocked ? "bg-white text-blue-600 ring-1 ring-blue-100" : "bg-gray-200 text-gray-400",
                        completed && "bg-gradient-to-br from-green-400 to-emerald-600 text-white ring-green-200",
                        isBoss && unlocked && "bg-gradient-to-br from-purple-500 to-indigo-600 text-white"
                      )}>
                        {index + 1}
                      </div>
                      
                      {completed && <div className="flex flex-col items-end">
                          <div className="bg-green-100 text-green-700 rounded-full px-2 py-0.5 text-xs font-bold flex items-center gap-1">
                              <CheckCircle className="w-3 h-3" /> Done
                          </div>
                      </div>}
                      {!unlocked && <Lock className="text-gray-400 w-5 h-5" />}
                   </div>

                   <h3 className={cn(
                       "text-xl font-bold mb-2 leading-tight",
                       unlocked ? "text-slate-800" : "text-gray-500"
                   )}>
                       {level.title.split(': ')[1] || level.title}
                   </h3>
                   
                   <p className="text-sm font-medium text-slate-500 mt-auto uppercase tracking-wider text-[10px]">
                      {isBoss ? "Final Boss" : "Module " + (index+1)}
                   </p>

                   {unlocked && !completed && (
                       <div className="mt-6 flex items-center text-blue-600 font-bold text-sm group-hover:translate-x-2 transition-transform">
                           Start Mission <Play className="w-4 h-4 ml-1 fill-current" />
                       </div>
                   )}
                </div>
              </Card>
            </motion.div>
          </a>
        );
      })}
    </div>
  );
}
