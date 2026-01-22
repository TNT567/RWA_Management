
import React, { useState, useEffect } from 'react';
import { View } from './types';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './views/Dashboard';
import NavUpdate from './views/NavUpdate';
import Minting from './views/Minting';
import Burning from './views/Burning';
import Whitelist from './views/Whitelist';
import History from './views/History';
import Settings from './views/Settings';
import Landing from './views/Landing';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.DASHBOARD);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const renderView = () => {
    switch (currentView) {
      case View.DASHBOARD: return <Dashboard />;
      case View.NAV_UPDATE: return <NavUpdate />;
      case View.MINTING: return <Minting />;
      case View.BURNING: return <Burning />;
      case View.COMPLIANCE: return <Whitelist />;
      case View.HISTORY: return <History />;
      case View.SETTINGS: return <Settings />;
      default: return <Dashboard />;
    }
  };

  if (!isConnected) {
    return <Landing onConnect={() => setIsConnected(true)} />;
  }

  return (
    <div className="flex bg-background-light dark:bg-background-dark min-h-screen transition-colors duration-300">
      <Sidebar currentView={currentView} onViewChange={setCurrentView} />
      
      <div className="flex-1 ml-64 flex flex-col min-h-screen relative">
        <Header 
          isDarkMode={isDarkMode} 
          toggleDarkMode={() => setIsDarkMode(!isDarkMode)} 
          title={getViewTitle(currentView)}
          onDisconnect={() => setIsConnected(false)}
        />
        
        <main className="p-8 animate-fade-in-up">
          {renderView()}
        </main>

        <footer className="mt-auto py-8 text-center text-slate-400 text-sm">
          © 2024 Digital Fund Tokenization Platform. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

const getViewTitle = (view: View) => {
  switch (view) {
    case View.DASHBOARD: return '仪表盘';
    case View.NAV_UPDATE: return 'NAV MMF 更新';
    case View.MINTING: return '代币铸造管理';
    case View.BURNING: return '销毁申请管理';
    case View.COMPLIANCE: return '黑白名单管理';
    case View.HISTORY: return '事件历史';
    case View.SETTINGS: return '系统设置';
    default: return '仪表盘';
  }
};

export default App;
