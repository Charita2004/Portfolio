import React from 'react';
import { PortfolioModule } from '../types';
import { ActionButton } from './ActionButton';

interface TimelineItemProps {
  moduleData: PortfolioModule;
  isLast: boolean;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ moduleData, isLast }) => {
  return (
    <div className="flex gap-4 sm:gap-6 relative">
      {/* Vertical Line */}
      {!isLast && (
        <div className="absolute left-[19px] sm:left-[23px] top-12 bottom-0 w-0.5 bg-blue-200" aria-hidden="true" />
      )}

      {/* Number Circle Column */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-blue-700 text-white font-bold text-lg sm:text-xl shadow-md border-4 border-white z-10">
          {moduleData.id}
        </div>
      </div>

      {/* Content Card Column */}
      <div className="flex-grow pb-10">
        <div className="bg-blue-50 border border-blue-200 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
          {/* Card Header */}
          <div className="bg-blue-100/50 px-4 py-3 sm:px-6 border-b border-blue-200">
            <h3 className="text-lg sm:text-xl font-bold text-blue-900 uppercase tracking-wide">
              {moduleData.title}
            </h3>
          </div>

          {/* Card Body (Task List) */}
          <div className="divide-y divide-blue-100">
            {moduleData.tasks.map((task) => (
              <div 
                key={task.id} 
                className="px-4 py-3 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-blue-100/30 transition-colors group"
              >
                <div className="flex items-start gap-3">
                  {/* Small bullet point decoration */}
                  <span className="mt-2 sm:mt-2.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                  <span className="text-gray-700 font-medium leading-tight">
                    {task.name}
                  </span>
                </div>
                
                <div className="self-end sm:self-auto flex-shrink-0 ml-4">
                  <ActionButton 
                    label={moduleData.buttonLabel} 
                    iconType={moduleData.buttonIconType}
                    href={task.url}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};