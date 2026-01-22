
import React, { useState } from 'react';

const NavUpdate: React.FC = () => {
  const [nav, setNav] = useState('1.0423');
  const [remark, setRemark] = useState('');

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Form Container */}
        <div className="lg:col-span-5 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl shadow-lg p-8">
          <h3 className="text-xl font-bold mb-6 dark:text-white">更新资产净值</h3>
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">新资产净值 (NAV)</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined">paid</span>
                <input 
                  type="number"
                  step="0.0001"
                  value={nav}
                  onChange={(e) => setNav(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-zinc-800 border-slate-200 dark:border-zinc-700 rounded-xl focus:ring-primary focus:border-primary transition-all text-lg font-bold"
                  placeholder="1.0423"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">更新备注</label>
              <textarea 
                rows={4}
                value={remark}
                onChange={(e) => setRemark(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 dark:bg-zinc-800 border-slate-200 dark:border-zinc-700 rounded-xl focus:ring-primary focus:border-primary transition-all text-sm"
                placeholder="例如：常规每日收益结转，利息入账..."
              />
            </div>

            <button 
              type="button"
              className="w-full bg-primary hover:bg-primary-hover text-white font-black py-4 rounded-xl shadow-xl shadow-primary/20 transition-all flex items-center justify-center gap-2 group"
            >
              <span className="material-symbols-outlined group-hover:translate-y-[-2px] transition-transform">upload</span>
              提交更新并上链
            </button>
          </form>
        </div>

        {/* Info/Help Box */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 relative overflow-hidden">
            <div className="absolute -right-8 -bottom-8 opacity-10">
              <span className="material-symbols-outlined text-[160px]">trending_up</span>
            </div>
            <h4 className="text-lg font-bold text-primary mb-4">关于 NAV 更新</h4>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl">verified</span>
                <span>资产净值将直接影响代币的公允价值计算。请确保输入数据的真实性和合规性。</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl">lock</span>
                <span>所有更新行为都将被记录在区块链审计历史中，不可撤销或篡改。</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl">analytics</span>
                <span>系统将根据历史数据自动生成收益曲线，并与基准货币基金指数进行对标。</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl shadow-sm p-6">
             <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold dark:text-white">上次更新记录</h4>
                <span className="text-xs text-slate-400 font-mono">Block: 19283745</span>
             </div>
             <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400 uppercase font-bold tracking-widest mb-1">Previous NAV</p>
                  <p className="text-2xl font-black text-slate-900 dark:text-white">1.0411</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-400 uppercase font-bold tracking-widest mb-1">Update Time</p>
                  <p className="text-sm font-bold text-slate-700 dark:text-slate-300">2023-11-20 14:23</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavUpdate;
