import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { ModulesView } from './components/ModulesView';
import { TimelineView } from './components/TimelineView';
import { Menu } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'modules' | 'timeline'>('timeline');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-gray-800 font-sans">
      
      {/* Sidebar Component */}
      <Sidebar 
        currentView={currentView} 
        onChangeView={setCurrentView}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      {/* Main Content Area */}
      <div className="md:ml-64 min-h-screen flex flex-col transition-all duration-300">
        
        {/* Mobile Header (Hamburger) */}
        <div className="md:hidden bg-white border-b border-gray-200 p-4 flex items-center sticky top-0 z-10">
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 -ml-2 hover:bg-gray-100 rounded-lg text-gray-600"
          >
            <Menu size={24} />
          </button>
          <span className="ml-3 font-bold text-lg text-blue-900">Báo Cáo Công Việc</span>
        </div>

        {/* Content Render */}
        <main className="flex-1 py-10 px-4 sm:px-8 lg:px-12">
          {currentView === 'modules' ? (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <ModulesView />
            </div>
          ) : (
             <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <TimelineView />
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default App;