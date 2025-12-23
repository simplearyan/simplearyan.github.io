import React, { createContext, useContext, useEffect, useState } from 'react';

const QuestContext = createContext(null);

export const LEVELS = [
  { id: 'level-1', title: 'Level 1: The Foundation of Data', path: '/quest/level-1' },
  { id: 'level-2', title: 'Level 2: The Descriptive Architect', path: '/quest/level-2' },
  { id: 'level-3', title: 'Level 3: The Probability Portal', path: '/quest/level-3' },
  { id: 'level-4', title: 'Level 4: The Distribution Dungeon', path: '/quest/level-4' },
  { id: 'level-5', title: 'Level 5: The Detective’s Trial', path: '/quest/level-5' },
  { id: 'boss', title: 'Boss Level: The Regression Ridge', path: '/quest/boss' },
];

export function QuestProvider({ children }) {
  const [progress, setProgress] = useState({
    unlockedLevels: ['level-1'], // IDs of unlocked levels
    completedLevels: [],
    scores: {}, // { 'level-1': 100 }
  });

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('statistical-quest-progress');
    if (saved) {
      try {
        setProgress(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse quest progress', e);
      }
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('statistical-quest-progress', JSON.stringify(progress));
    }
  }, [progress, isLoaded]);

  const completeLevel = (levelId, score = 100) => {
    setProgress((prev) => {
      const newCompleted = [...new Set([...prev.completedLevels, levelId])];
      const newScores = { ...prev.scores, [levelId]: Math.max(prev.scores[levelId] || 0, score) };
      
      // Unlock next level
      const currentIndex = LEVELS.findIndex(l => l.id === levelId);
      let newUnlocked = [...prev.unlockedLevels];
      if (currentIndex !== -1 && currentIndex < LEVELS.length - 1) {
        newUnlocked.push(LEVELS[currentIndex + 1].id);
      }
      
      return {
        ...prev,
        completedLevels: newCompleted,
        unlockedLevels: [...new Set(newUnlocked)],
        scores: newScores,
      };
    });
  };

  const isUnlocked = (levelId) => progress.unlockedLevels.includes(levelId);
  const isCompleted = (levelId) => progress.completedLevels.includes(levelId);

  return (
    <QuestContext.Provider value={{ progress, completeLevel, isUnlocked, isCompleted, isLoaded }}>
      {children}
    </QuestContext.Provider>
  );
}

export function useQuest() {
  const context = useContext(QuestContext);
  if (!context) {
    throw new Error('useQuest must be used within a QuestProvider');
  }
  return context;
}
