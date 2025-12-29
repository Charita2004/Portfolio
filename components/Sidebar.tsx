import React from 'react';
import { LayoutGrid, FileClock, Menu } from 'lucide-react';

interface SidebarProps {
  currentView: 'modules' | 'timeline';
  onChangeView: (view: 'modules' | 'timeline') => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentView, onChangeView, isOpen, setIsOpen }) => {
  const menuItems = [
    { id: 'timeline', label: 'TIMELINE', icon: FileClock },
    { id: 'modules', label: 'CÁC MODULE', icon: LayoutGrid },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <div className={`
        fixed top-0 left-0 h-full bg-white border-r border-gray-200 z-30 transition-transform duration-300 ease-in-out
        w-64 shadow-lg md:shadow-none md:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-xl font-bold text-blue-900 flex items-center gap-2">
            <span className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-sm">WP</span>
            Portfolio
          </h2>
          <button onClick={() => setIsOpen(false)} className="md:hidden text-gray-500">
            <Menu size={20} />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => {
                  onChangeView(item.id as 'modules' | 'timeline');
                  setIsOpen(false);
                }}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium text-sm
                  ${isActive 
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-200' 
                    : 'text-gray-600 hover:bg-blue-50 hover:text-blue-700'}
                `}
              >
                <Icon size={18} />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t border-gray-100 bg-gray-50/50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xs">
              NV
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-700">Intern BA</p>
              <p className="text-xs text-gray-500">LÊ TRẦN CHARITA</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};