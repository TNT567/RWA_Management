
import React from 'react';
import { View } from '../types';

interface SidebarProps {
  currentView: View;
  onViewChange: (view: View) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, onViewChange }) => {
  const navItems = [
    { view: View.DASHBOARD, icon: 'dashboard', label: '仪表盘' },
    { view: View.NAV_UPDATE, icon: 'trending_up', label: 'NAV MMF 更新' },
    { view: View.MINTING, icon: 'token', label: '代币铸造管理' },
    { view: View.BURNING, icon: 'local_fire_department', label: '销毁申请管理' },
    { view: View.COMPLIANCE, icon: 'verified_user', label: '黑白名单管理' },
    { view: View.HISTORY, icon: 'history', label: '事件历史' },
    { view: View.SETTINGS, icon: 'settings', label: '系统设置' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white dark:bg-zinc-900 border-r border-slate-200 dark:border-zinc-800 z-50 flex flex-col p-4 shadow-sm">
      <div className="px-2 pt-2 mb-8">
        <div className="flex items-center gap-3">
          <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-xl">account_balance_wallet</span>
          </div>
          <div>
            <h1 className="text-primary text-xl font-bold leading-none">RWA Management</h1>
            <p className="text-slate-500 text-[10px] uppercase tracking-widest mt-1">Fund Tokenization</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.view}
            onClick={() => onViewChange(item.view)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
              currentView === item.view 
                ? 'sidebar-active shadow-sm' 
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-zinc-800'
            }`}
          >
            <span className="material-symbols-outlined text-xl">{item.icon}</span>
            <span className={`text-sm font-medium ${currentView === item.view ? 'font-bold' : ''}`}>
              {item.label}
            </span>
          </button>
        ))}
      </nav>

      <div className="mt-auto pt-4 border-t border-slate-100 dark:border-zinc-800">
        <button className="w-full bg-primary hover:bg-primary-hover text-white rounded-lg py-3 px-4 flex items-center justify-center gap-2 font-bold text-sm transition-all shadow-lg shadow-primary/20 group">
          <span className="material-symbols-outlined group-hover:rotate-90 transition-transform">add_circle</span>
          Create New Token
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
