import React, { useState } from 'react';
import { DndContext, useDraggable, useDroppable, DragOverlay } from '@dnd-kit/core';
import { Card } from '../../../ui/Card';
import { Button } from '../../../ui/Button';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const SCALES = [
  { id: 'nominal', title: 'Nominal', desc: 'Named variables (No order)' },
  { id: 'ordinal', title: 'Ordinal', desc: 'Named + Ordered' },
  { id: 'interval', title: 'Interval', desc: 'Ordered + Proportionate interval' },
  { id: 'ratio', title: 'Ratio', desc: 'Ordered + Interval + Absolute Zero' },
];

const ITEMS = [
    { id: 'plates', label: 'Car Number Plates', scale: 'nominal' },
    { id: 'rating', label: 'Service Rating (1-5 stars)', scale: 'ordinal' },
    { id: 'temp', label: 'Temperature (Celsius)', scale: 'interval' },
    { id: 'height', label: 'Height (cm)', scale: 'ratio' },
];

function DraggableItem({ id, label }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({ id });
  
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes} className="touch-none cursor-grab active:cursor-grabbing z-50">
        <div className={`bg-white p-4 rounded-lg shadow-sm border border-gray-200 font-medium text-center hover:shadow-md transition-shadow ${isDragging ? 'opacity-50 ring-2 ring-blue-500' : ''}`}>
           {label}
        </div>
    </div>
  );
}

function DroppableColumn({ id, title, desc, children }) {
  const { setNodeRef, isOver } = useDroppable({ id });
  
  return (
    <div 
        ref={setNodeRef} 
        className={`bg-gray-50 rounded-xl p-4 min-h-[160px] border-2 transition-colors ${isOver ? 'border-blue-500 bg-blue-50' : 'border-dashed border-gray-200'}`}
    >
      <h4 className="font-bold text-gray-700 text-center mb-1">{title}</h4>
      <p className="text-xs text-gray-400 text-center mb-4">{desc}</p>
      <div className="space-y-2">
         {children}
      </div>
    </div>
  );
}

export function MeasurementSort({ onComplete }) {
  // Items waiting to be sorted
  const [unsortedItems, setUnsortedItems] = useState(ITEMS);
  // Items placed in columns { 'nominal': [item1], ... }
  const [columns, setColumns] = useState({ nominal: [], ordinal: [], interval: [], ratio: [] });
  const [dragActiveId, setDragActiveId] = useState(null);
  const [showResult, setShowResult] = useState(false);

  // Get the drag active item label for overlay
  const activeItem = dragActiveId ? [...ITEMS].find(i => i.id === dragActiveId) : null;

  const handleDragStart = (event) => {
      setDragActiveId(event.active.id);
      setShowResult(false);
  };

  const handleDragEnd = (event) => {
      const { active, over } = event;
      setDragActiveId(null);

      if (over && SCALES.some(s => s.id === over.id)) {
          const itemId = active.id;
          const targetScale = over.id;
          const item = ITEMS.find(i => i.id === itemId);
          
          // Remove from unsorted if present
          setUnsortedItems(prev => prev.filter(i => i.id !== itemId));
          
          // Remove from other columns if present (re-sorting)
          setColumns(prev => {
              const newCols = { ...prev };
              Object.keys(newCols).forEach(key => {
                  newCols[key] = newCols[key].filter(i => i.id !== itemId);
              });
              newCols[targetScale] = [...newCols[targetScale], item];
              return newCols;
          });
      }
  };

  const checkAnswers = () => {
      setShowResult(true);
      const isCorrect = Object.keys(columns).every(scaleKey => {
          return columns[scaleKey].every(item => item.scale === scaleKey) && 
                 columns[scaleKey].length === ITEMS.filter(i => i.scale === scaleKey).length;
      });
      
      if (isCorrect) {
          setTimeout(onComplete, 2000);
      }
  };

  const allSorted = unsortedItems.length === 0;

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <div className="space-y-8 py-8">
            <div className="text-center">
                 <h3 className="text-2xl font-bold mb-2">The Scale Sorting Game</h3>
                 <p className="text-gray-500">Drag each variable to its correct Scale of Measurement.</p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center min-h-[80px] p-4 bg-gray-100 rounded-xl">
                 {unsortedItems.length === 0 && <span className="text-gray-400 italic self-center">All items sorted! Check your answers.</span>}
                 {unsortedItems.map(item => (
                     <DraggableItem key={item.id} id={item.id} label={item.label} />
                 ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {SCALES.map(scale => (
                    <DroppableColumn key={scale.id} id={scale.id} title={scale.title} desc={scale.desc}>
                        {columns[scale.id].map(item => (
                            <div key={item.id} className={`p-2 rounded bg-white border text-sm text-center shadow-sm ${showResult ? (item.scale === scale.id ? 'border-green-500 text-green-700 bg-green-50' : 'border-red-500 text-red-700 bg-red-50') : 'border-gray-200'}`}>
                                {item.label}
                            </div>
                        ))}
                    </DroppableColumn>
                ))}
            </div>
            
            <div className="flex justify-center mt-8">
                <Button 
                    size="lg" 
                    disabled={!allSorted} 
                    onClick={checkAnswers}
                    variant={showResult ? "danger" : "primary"}
                >
                    {showResult ? "Incorrect - Try Again" : "Check Answers"}
                </Button>
            </div>
        </div>
        
        <DragOverlay>
            {activeItem ? (
                 <div className="bg-white p-4 rounded-lg shadow-xl border-2 border-blue-500 font-medium text-center rotate-3 scale-105 opacity-90 cursor-grabbing">
                    {activeItem.label}
                 </div>
            ) : null}
        </DragOverlay>
    </DndContext>
  );
}
