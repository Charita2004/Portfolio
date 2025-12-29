import React from 'react';
import { Eye, FileText, BarChart2, ExternalLink } from 'lucide-react';

interface ActionButtonProps {
  label: string;
  iconType: 'eye' | 'file' | 'chart' | 'link';
  href: string;
}

export const ActionButton: React.FC<ActionButtonProps> = ({ label, iconType, href }) => {
  const getIcon = () => {
    switch (iconType) {
      case 'eye': return <Eye size={14} />;
      case 'file': return <FileText size={14} />;
      case 'chart': return <BarChart2 size={14} />;
      case 'link': return <ExternalLink size={14} />;
      default: return <Eye size={14} />;
    }
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-2 bg-blue-100 hover:bg-blue-200 active:bg-blue-300 text-blue-700 text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md whitespace-nowrap border border-transparent hover:border-blue-300 no-underline"
    >
      <span>{label}</span>
      <span className="opacity-90 group-hover:translate-x-0.5 transition-transform">
        {getIcon()}
      </span>
    </a>
  );
};