
import React, { useState } from 'react';

const Whitelist: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'WHITELIST' | 'BLACKLIST'>('WHITELIST');

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-black tracking-tight dark:text-white">黑白名单管理</h2>
          <p className="text-sm text-slate-500 mt-1">管理符合 KYC 合规要求的钱包地址准入权限。</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-zinc-800 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-all text-xs font-bold">
            <span className="material-symbols-outlined text-sm">download</span>
            导出 CSV
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg font-black transition-all shadow-lg shadow-primary/20 text-xs">
            <span className="material-symbols-outlined text-sm">group_add</span>
            批量导入地址
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl shadow-sm overflow-hidden">
        <div className="px-2 pt-2 bg-slate-50 dark:bg-zinc-800/50 flex gap-1 border-b border-slate-100 dark:border-zinc-800">
          <button 
            onClick={() => setActiveTab('WHITELIST')}
            className={`flex-1 py-3 text-xs font-bold rounded-t-xl transition-all flex items-center justify-center gap-2 ${
              activeTab === 'WHITELIST' 
                ? 'bg-white dark:bg-zinc-900 text-primary shadow-[0_-4px_10px_rgba(0,0,0,0.02)]' 
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            <span className={`material-symbols-outlined text-sm ${activeTab === 'WHITELIST' ? 'text-primary' : ''}`}>check_circle</span>
            白名单 (Whitelist)
          </button>
          <button 
            onClick={() => setActiveTab('BLACKLIST')}
            className={`flex-1 py-3 text-xs font-bold rounded-t-xl transition-all flex items-center justify-center gap-2 ${
              activeTab === 'BLACKLIST' 
                ? 'bg-white dark:bg-zinc-900 text-rose-500 shadow-[0_-4px_10px_rgba(0,0,0,0.02)]' 
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            <span className={`material-symbols-outlined text-sm ${activeTab === 'BLACKLIST' ? 'text-rose-500' : ''}`}>block</span>
            黑名单 (Blacklist)
          </button>
        </div>

        <div className="p-0">
          <table className="w-full text-left">
            <thead className="bg-slate-50/50 dark:bg-zinc-800/30">
              <tr>
                <th className="px-8 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">钱包地址</th>
                <th className="px-8 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">KYC 等级</th>
                <th className="px-8 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">添加时间</th>
                <th className="px-8 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-right">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-zinc-800">
              {activeTab === 'WHITELIST' ? (
                [1, 2, 3, 4, 5].map(i => (
                  <tr key={i} className="hover:bg-slate-50 dark:hover:bg-zinc-800/30 transition-colors">
                    <td className="px-8 py-5 font-mono text-xs dark:text-white">0x742d...{i}f321</td>
                    <td className="px-8 py-5">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-blue-50 text-blue-600 uppercase">Level 2</span>
                    </td>
                    <td className="px-8 py-5 text-xs text-slate-500">2023-11-20 14:23</td>
                    <td className="px-8 py-5 text-right">
                      <button className="text-rose-500 hover:bg-rose-50 p-2 rounded-lg transition-colors">
                        <span className="material-symbols-outlined text-lg">delete</span>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="py-20 text-center">
                    <div className="flex flex-col items-center">
                      <div className="size-16 bg-slate-100 dark:bg-zinc-800 rounded-full flex items-center justify-center text-slate-300 mb-4">
                        <span className="material-symbols-outlined text-4xl">list_alt</span>
                      </div>
                      <p className="text-slate-500 text-sm font-medium">当前没有被禁止的地址</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Whitelist;
