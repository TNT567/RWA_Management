
import React from 'react';

const Burning: React.FC = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
      {/* Left Column: Active Requests List */}
      <div className="xl:col-span-2 space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold dark:text-white">Active Burn Requests</h3>
          <span className="text-xs text-slate-500 bg-slate-100 dark:bg-zinc-800 px-3 py-1 rounded-full font-bold">Total: 12</span>
        </div>

        <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl shadow-sm overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-slate-50 dark:bg-zinc-800/50">
              <tr>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">ID</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Amount</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Status</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Requested By</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-zinc-800">
              <tr className="bg-primary/5 border-l-4 border-l-primary cursor-pointer transition-colors">
                <td className="px-6 py-5 font-mono text-xs text-primary font-bold">BRN-2023-0045</td>
                <td className="px-6 py-5 font-bold dark:text-white">50,000.00 DFT</td>
                <td className="px-6 py-5">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-700 uppercase">Pending Compliance</span>
                </td>
                <td className="px-6 py-5 text-xs text-slate-600 dark:text-slate-400">Finance Dept.</td>
              </tr>
              {[44, 42, 40].map(id => (
                <tr key={id} className="hover:bg-slate-50 dark:hover:bg-zinc-800/30 cursor-pointer transition-colors border-l-4 border-l-transparent">
                  <td className="px-6 py-5 font-mono text-xs text-slate-500">BRN-2023-00{id}</td>
                  <td className="px-6 py-5 font-bold dark:text-white">{(12500 * (id-35)).toLocaleString()}.00 DFT</td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-500 uppercase">
                      {id === 42 ? 'Awaiting Execution' : 'Completed'}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-xs text-slate-600 dark:text-slate-400">Admin Ops</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Right Column: Request Details & Actions */}
      <div className="space-y-6">
        <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl shadow-xl flex flex-col h-full sticky top-24 overflow-hidden">
          <div className="p-6 border-b border-slate-100 dark:border-zinc-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Detail View</span>
              <span className="text-[10px] text-slate-400 font-mono">BRN-2023-0045</span>
            </div>
            <h3 className="text-xl font-bold dark:text-white">销毁申请详情</h3>
          </div>

          <div className="p-6 space-y-6">
            <div className="bg-slate-50 dark:bg-zinc-800/50 p-4 rounded-xl space-y-4">
              <div className="flex justify-between">
                <span className="text-xs text-slate-500">Burn Amount</span>
                <span className="text-sm font-bold dark:text-white">50,000.00 DFT</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-slate-500">Asset Type</span>
                <span className="text-sm font-medium dark:text-white">Money Market Fund</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500 mb-2">Reason</span>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed italic bg-white dark:bg-zinc-900/50 p-3 rounded-lg border border-slate-100 dark:border-zinc-800">
                  "Redemption request fulfillment for institutional client ID 8829."
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold mb-6 flex items-center gap-2 text-slate-400 uppercase tracking-widest">
                <span className="material-symbols-outlined text-sm text-primary">analytics</span>
                Approval Timeline
              </h4>
              <div className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-100 dark:before:bg-zinc-800">
                <div className="relative pl-8">
                  <div className="absolute left-0 top-0 size-6 rounded-full bg-emerald-500 flex items-center justify-center ring-4 ring-white dark:ring-zinc-900">
                    <span className="material-symbols-outlined text-white text-[14px]">check</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold dark:text-white">Finance Dept. Approval</p>
                    <p className="text-[10px] text-slate-500">Robert Chen • 2023-11-21 10:45</p>
                  </div>
                </div>
                <div className="relative pl-8">
                  <div className="absolute left-0 top-0 size-6 rounded-full bg-amber-500 flex items-center justify-center ring-4 ring-white dark:ring-zinc-900 animate-pulse">
                    <span className="material-symbols-outlined text-white text-[14px]">pending</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold dark:text-white">Compliance Review</p>
                    <p className="text-[10px] text-amber-600 font-bold uppercase mt-1">Awaiting Current Action</p>
                  </div>
                </div>
                <div className="relative pl-8 opacity-40">
                  <div className="absolute left-0 top-0 size-6 rounded-full bg-slate-300 dark:bg-zinc-700 flex items-center justify-center ring-4 ring-white dark:ring-zinc-900">
                    <span className="material-symbols-outlined text-white text-[14px]">hourglass_empty</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold dark:text-white">Blockchain Execution</p>
                    <p className="text-[10px] text-slate-500">Pending signatures</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 dark:border-zinc-800 space-y-4">
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase mb-2 tracking-widest">Reviewer Comment</label>
                <textarea 
                  className="w-full text-sm rounded-xl border-slate-200 dark:border-zinc-800 dark:bg-zinc-800 focus:ring-primary focus:border-primary p-3" 
                  placeholder="Add a comment..." 
                  rows={2}
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button className="px-4 py-3 rounded-xl border border-slate-200 dark:border-zinc-700 font-bold text-xs hover:bg-slate-50 dark:hover:bg-zinc-800 transition-colors">
                  Reject
                </button>
                <button className="px-4 py-3 rounded-xl bg-primary text-white font-black text-xs hover:bg-primary-hover transition-shadow shadow-lg shadow-primary/20">
                  Approve Request
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Burning;
