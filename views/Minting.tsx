
import React from 'react';

const Minting: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-slate-200 dark:border-zinc-800 shadow-sm group">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">当前流通总量</p>
          <div className="flex items-baseline gap-2">
            <h3 className="text-3xl font-black text-slate-900 dark:text-white">1,000,000.00</h3>
            <span className="text-sm font-bold text-primary">DFT</span>
          </div>
          <div className="mt-6 h-2 w-full bg-slate-100 dark:bg-zinc-800 rounded-full overflow-hidden">
            <div className="h-full bg-primary" style={{ width: '65%' }}></div>
          </div>
          <p className="text-[10px] text-slate-400 mt-2 font-medium">占铸造上限的 65%</p>
        </div>

        <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-slate-200 dark:border-zinc-800 shadow-sm">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">铸造上限</p>
          <div className="flex items-baseline gap-2">
            <h3 className="text-3xl font-black text-slate-900 dark:text-white">5,000,000.00</h3>
            <span className="text-sm font-bold text-slate-400">DFT</span>
          </div>
          <p className="text-[10px] text-slate-400 mt-6 font-medium uppercase tracking-widest">
            剩余可铸造额度: <span className="text-primary font-bold">4,000,000.00 DFT</span>
          </p>
        </div>

        <div className="bg-primary p-8 rounded-2xl shadow-xl shadow-primary/20 flex flex-col justify-center relative overflow-hidden group">
          <div className="absolute -right-4 -bottom-4 text-white/10 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-[100px]">rocket_launch</span>
          </div>
          <h4 className="text-white font-bold mb-4 relative z-10">发起代币铸造</h4>
          <button className="w-full bg-white text-primary font-black py-3 rounded-xl shadow-lg hover:bg-slate-50 transition-all relative z-10 flex items-center justify-center gap-2">
            <span className="material-symbols-outlined">add_circle</span>
            发起新铸造申请
          </button>
        </div>
      </section>

      {/* Minting History */}
      <section className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl shadow-sm overflow-hidden">
        <div className="px-8 py-6 border-b border-slate-100 dark:border-zinc-800 flex justify-between items-center">
          <h2 className="text-lg font-bold dark:text-white">铸造事件历史 (Minting History)</h2>
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-400 hover:text-primary transition-colors">
              <span className="material-symbols-outlined">filter_list</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-primary bg-primary/5 rounded-lg border border-primary/10">
              <span className="material-symbols-outlined text-sm">download</span>
              导出 CSV
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 dark:bg-zinc-800/50">
              <tr>
                <th className="px-8 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">区块</th>
                <th className="px-8 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">交易哈希</th>
                <th className="px-8 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">接收地址</th>
                <th className="px-8 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">数量</th>
                <th className="px-8 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">时间</th>
                <th className="px-8 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">状态</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-zinc-800">
              {[1, 2, 3, 4].map(i => (
                <tr key={i} className="hover:bg-slate-50 dark:hover:bg-zinc-800/30 transition-colors">
                  <td className="px-8 py-5">
                    <a className="text-primary font-mono text-xs hover:underline flex items-center gap-1" href="#">
                      192837{40-i}
                      <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                    </a>
                  </td>
                  <td className="px-8 py-5">
                    <span className="text-slate-500 font-mono text-xs">0xbf2d...a12c</span>
                  </td>
                  <td className="px-8 py-5 font-mono text-xs text-slate-600 dark:text-slate-400">0x5a7d...8a23</td>
                  <td className="px-8 py-5 font-bold dark:text-white">{(25000 / i).toLocaleString()}.00 DFT</td>
                  <td className="px-8 py-5 text-xs text-slate-500">2023-11-20 14:23</td>
                  <td className="px-8 py-5">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-emerald-100 text-emerald-700">Success</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-8 py-5 bg-slate-50 dark:bg-zinc-800/30 border-t border-slate-100 dark:border-zinc-800 flex items-center justify-between">
          <span className="text-xs text-slate-500">Showing 1 to 4 of 128 entries</span>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg border border-slate-200 dark:border-zinc-700 disabled:opacity-30" disabled>
              <span className="material-symbols-outlined text-sm">chevron_left</span>
            </button>
            <button className="size-8 rounded-lg bg-primary text-white text-xs font-bold">1</button>
            <button className="size-8 rounded-lg border border-slate-200 dark:border-zinc-700 text-xs font-bold hover:bg-white transition-all">2</button>
            <button className="p-2 rounded-lg border border-slate-200 dark:border-zinc-700">
              <span className="material-symbols-outlined text-sm">chevron_right</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Minting;
