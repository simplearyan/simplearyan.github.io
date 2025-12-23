import React from 'react';
import { QuestShell } from '../layout/QuestShell';
import { LevelMap } from '../LevelMap';

export function QuestHome() {
  return (
    <QuestShell>
        <div className="max-w-4xl mx-auto">
            <div className="mb-10 text-center">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl mb-4">
                    Statistical Quest
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Embark on a journey to master the art of data science. Solve challenges, unlock levels, and prove your skills in the Regression Ridge.
                </p>
            </div>
            
            <LevelMap />
        </div>
    </QuestShell>
  );
}
