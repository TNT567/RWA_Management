
import React from 'react';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  title: string;
  onDisconnect?: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode, title, onDisconnect }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-slate-200 dark:border-zinc-800 px-8 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <h2 className="text-xl font-bold tracking-tight dark:text-white">{title}</h2>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center bg-slate-100 dark:bg-zinc-800 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-zinc-700">
          <span className="text-[10px] font-mono font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest">
            Compliance_Officer_1
          </span>
        </div>
        
        <button 
          onClick={toggleDarkMode}
          className="p-2 rounded-lg bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700 transition-colors text-slate-600 dark:text-slate-300"
        >
          <span className="material-symbols-outlined">
            {isDarkMode ? 'light_mode' : 'dark_mode'}
          </span>
        </button>

        <div className="group relative">
          <div className="h-10 w-10 rounded-full border-2 border-primary/20 overflow-hidden ring-2 ring-transparent hover:ring-primary/40 transition-all cursor-pointer">
            <img 
              alt="User profile" 
              className="w-full h-full object-cover" 
              src="https://picsum.photos/seed/user/100/100"
            />
          </div>
          
          {/* Simple Dropdown for Logout */}
          <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
            <div className="p-4 border-b border-slate-100 dark:border-zinc-700">
              <p className="text-xs font-bold dark:text-white">Admin User</p>
              <p className="text-[10px] text-slate-400 font-mono mt-1">0x5a7d...8a23</p>
            </div>
            <button 
              onClick={onDisconnect}
              className="w-full flex items-center gap-3 px-4 py-3 text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/20 text-xs font-bold transition-colors text-left rounded-b-xl"
            >
              <span className="material-symbols-outlined text-sm">logout</span>
              Disconnect Wallet
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
