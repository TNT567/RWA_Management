
import React from 'react';

const History: React.FC = () => {
  return (
    <div className="space-y-8">
       <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-black tracking-tight dark:text-white">交易与操作历史</h2>
          <p className="text-sm text-slate-500 mt-1">监控所有链上事件、资产变动及合规性更新。</p>
        </div>
        <button className="group flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-primary bg-primary/5 border border-primary/20 rounded-lg hover:bg-primary/10 transition-all shadow-sm">
          <span className="material-symbols-outlined text-lg">download</span>
          <span>导出历史记录 (CSV)</span>
        </button>
      </div>

      <section className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl shadow-sm p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">时间范围</label>
            <div className="flex items-center bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded-xl px-4 py-2.5">
              <input type="date" className="w-full bg-transparent border-none p-0 text-sm focus:ring-0 dark:text-white" defaultValue="2023-11-01" />
              <span className="mx-2 text-slate-300 text-xs">至</span>
              <input type="date" className="w-full bg-transparent border-none p-0 text-sm focus:ring-0 dark:text-white" defaultValue="2023-11-30" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">事件类型</label>
            <select className="w-full bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded-xl px-4 py-2.5 text-sm focus:ring-primary focus:border-primary dark:text-white">
              <option>全部类型</option>
              <option>Mint (铸造)</option>
              <option>Burn (销毁)</option>
              <option>NAV Update (净值更新)</option>
              <option>Whitelist Add (准入)</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">搜索</label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
              <input 
                type="text" 
                className="w-full bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:ring-primary focus:border-primary dark:text-white" 
                placeholder="交易哈希或钱包地址..." 
              />
            </div>
          </div>
          <div className="flex items-end">
            <button className="w-full bg-slate-900 dark:bg-primary text-white font-black py-2.5 rounded-xl hover:opacity-90 transition-all text-sm">
              应用筛选
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 dark:bg-zinc-800/50">
              <tr>
                <th className="px-8 py-5 text-[10px] font-bold text-slate-500 uppercase tracking-widest">时间戳</th>
                <th className="px-8 py-5 text-[10px] font-bold text-slate-500 uppercase tracking-widest">事件类型</th>
                <th className="px-8 py-5 text-[10px] font-bold text-slate-500 uppercase tracking-widest">相关地址</th>
                <th className="px-8 py-5 text-[10px] font-bold text-slate-500 uppercase tracking-widest">金额/详情</th>
                <th className="px-8 py-5 text-[10px] font-bold text-slate-500 uppercase tracking-widest">交易哈希</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-zinc-800">
              {[
                { time: '2023-11-22 14:25:31', type: 'MINT', addr: '0x71C...aB42', amount: '+ 5,000.00 DFT', hash: '0x9a2b...f4d1', color: 'bg-blue-100 text-blue-700' },
                { time: '2023-11-22 11:12:05', type: 'NAV UPDATE', addr: 'System Admin', amount: '1.0452 USD/DFT', hash: '0x34e1...88c2', color: 'bg-amber-100 text-amber-700' },
                { time: '2023-11-21 16:42:12', type: 'BURN', addr: '0x88F...012e', amount: '- 1,200.00 DFT', hash: '0x7c3e...2e9a', color: 'bg-rose-100 text-rose-700' },
                { time: '2023-11-20 09:30:45', type: 'WHITELIST ADD', addr: '0x5a7d...8a23', amount: 'KYC Level 2 Auth', hash: '0x12d5...99b2', color: 'bg-emerald-100 text-emerald-700' },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-zinc-800/30 transition-colors">
                  <td className="px-8 py-6 text-xs text-slate-500">{row.time}</td>
                  <td className="px-8 py-6">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase ${row.color}`}>
                      {row.type}
                    </span>
                  </td>
                  <td className="px-8 py-6 font-mono text-xs text-slate-600 dark:text-slate-400">{row.addr}</td>
                  <td className="px-8 py-6 font-bold text-slate-900 dark:text-white text-sm">{row.amount}</td>
                  <td className="px-8 py-6">
                    <a className="text-primary hover:underline flex items-center gap-1 font-mono text-xs" href="#">
                      {row.hash}
                      <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-8 py-6 border-t border-slate-100 dark:border-zinc-800 flex items-center justify-between">
          <span className="text-xs text-slate-400">显示 1 到 4 共 248 条记录</span>
          <div className="flex gap-2">
            <button className="p-2 rounded-lg border border-slate-200 dark:border-zinc-700 disabled:opacity-30" disabled>
              <span className="material-symbols-outlined text-sm">chevron_left</span>
            </button>
            <button className="size-8 rounded-lg bg-primary text-white text-xs font-bold shadow-lg shadow-primary/20">1</button>
            <button className="size-8 rounded-lg border border-slate-200 dark:border-zinc-700 text-xs font-bold hover:bg-white transition-all">2</button>
            <button className="size-8 rounded-lg border border-slate-200 dark:border-zinc-700 text-xs font-bold hover:bg-white transition-all">3</button>
            <button className="p-2 rounded-lg border border-slate-200 dark:border-zinc-700">
              <span className="material-symbols-outlined text-sm">chevron_right</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default History;
