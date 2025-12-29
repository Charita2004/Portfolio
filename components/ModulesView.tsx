import React from 'react';
import { portfolioData } from '../data';
import { TimelineItem } from './TimelineItem';
import { Briefcase } from 'lucide-react';

export const ModulesView: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      {/* Header Section */}
      <div className="mb-12 text-center">
        <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-4">
          <Briefcase className="text-blue-700 w-8 h-8" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-900 mb-3">
          Báo Cáo Kết Quả Công Việc
        </h1>
        <p className="text-blue-600/80 font-medium max-w-xl mx-auto">
          Tổng hợp tiến độ và các đầu mục công việc đã thực hiện theo từng module dự án.
        </p>
      </div>

      {/* Timeline Section */}
      <div className="relative">
        {/* Mobile Top Line Cap */}
        <div className="absolute left-[19px] sm:left-[23px] -top-6 h-6 w-0.5 bg-gradient-to-t from-blue-200 to-transparent sm:block hidden"></div>

        {portfolioData.map((module, index) => (
          <TimelineItem
            key={module.id}
            moduleData={module}
            isLast={index === portfolioData.length - 1}
          />
        ))}
      </div>

      {/* Footer */}
      <div className="text-center mt-8 pt-8 border-t border-gray-200">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Work Portfolio. All rights reserved.
        </p>
      </div>
    </div>
  );
};