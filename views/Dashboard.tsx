
import React from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from 'recharts';

const NAV_DATA = [
  { name: '11-01', nav: 1.0000, benchmark: 1.0000 },
  { name: '11-05', nav: 1.0120, benchmark: 1.0050 },
  { name: '11-10', nav: 1.0250, benchmark: 1.0120 },
  { name: '11-15', nav: 1.0423, benchmark: 1.0210 },
  { name: '11-20', nav: 1.0550, benchmark: 1.0300 },
];

const HOLDER_DATA = [
  { name: 'Institutional 1', value: 450000 },
  { name: 'Institutional 2', value: 250000 },
  { name: 'Reserve Fund', value: 150000 },
  { name: 'Individual Pooled', value: 100000 },
  { name: 'Others', value: 50000 },
];

const COLORS = ['#7f19e6', '#9d44ff', '#b678ff', '#cfadff', '#e7d6ff'];

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Protocol Status */}
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-2xl font-black tracking-tight dark:text-white">代币概览</h3>
        <div className="flex items-center gap-3 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800 rounded-lg px-4 py-2">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <p className="text-sm font-bold text-emerald-700 dark:text-emerald-400">系统状态: 正常</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard 
          icon="code" 
          label="Contract Address" 
          value="0x742d...f321" 
          subValue="ETH Mainnet" 
          isAddress 
        />
        <StatCard 
          icon="token" 
          label="Token Name" 
          value="Digital RMB Fund" 
          subValue="DFT" 
        />
        <StatCard 
          icon="inventory_2" 
          label="Total Supply" 
          value="1,000,000.00" 
          subValue="DFT Tokens" 
        />
        <StatCard 
          icon="query_stats" 
          label="Current NAV" 
          value="1.0423" 
          trend="+0.12%" 
          trendUp 
        />
        <StatCard 
          icon="group" 
          label="Token Holders" 
          value="124" 
          subValue="Whitelisted Accounts" 
        />
        <StatCard 
          icon="security" 
          label="Owner Address" 
          value="0x5a7d...8a23" 
          isAddress 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* NAV History Chart */}
        <div className="lg:col-span-2 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h4 className="text-lg font-bold dark:text-white">NAV 历史趋势</h4>
              <p className="text-sm text-slate-500">基金净值增长对比基准</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1 text-[10px] uppercase font-bold text-primary">
                <span className="size-2 rounded-full bg-primary"></span> NAV
              </span>
              <span className="flex items-center gap-1 text-[10px] uppercase font-bold text-slate-400">
                <span className="size-2 rounded-full bg-slate-400"></span> Benchmark
              </span>
            </div>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={NAV_DATA}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" fontSize={12} stroke="#94a3b8" />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{ 
                    borderRadius: '12px', 
                    border: 'none', 
                    boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                    backgroundColor: '#fff'
                  }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="nav" 
                  stroke="#7f19e6" 
                  strokeWidth={4} 
                  dot={{ fill: '#7f19e6', r: 4 }} 
                  activeDot={{ r: 8, stroke: '#fff', strokeWidth: 2 }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="benchmark" 
                  stroke="#cbd5e1" 
                  strokeWidth={2} 
                  strokeDasharray="5 5"
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Holder Distribution */}
        <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl shadow-sm p-6">
          <h4 className="text-lg font-bold mb-8 dark:text-white text-center">持币地址分布</h4>
          <div className="h-[240px] w-full flex justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={HOLDER_DATA}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {HOLDER_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 space-y-2">
            {HOLDER_DATA.slice(0, 3).map((item, idx) => (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="size-2 rounded-full" style={{ backgroundColor: COLORS[idx] }}></div>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400">{item.name}</span>
                </div>
                <span className="text-xs font-bold dark:text-white">{(item.value / 1000000 * 100).toFixed(1)}%</span>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-2 bg-slate-50 dark:bg-zinc-800 text-slate-500 text-xs font-bold rounded-lg hover:text-primary transition-colors flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-sm">download</span>
            DOWNLOAD ANALYSIS REPORT
          </button>
        </div>
      </div>

      {/* Recent History Table Preview */}
      <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 dark:border-zinc-800 flex items-center justify-between">
          <h4 className="font-bold dark:text-white">近期铸造记录</h4>
          <button className="text-primary text-xs font-bold flex items-center gap-1 hover:underline">
            View All <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 dark:bg-zinc-800/50">
              <tr>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Block</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Hash</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Amount</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-zinc-800">
              {[1, 2, 3].map(i => (
                <tr key={i} className="hover:bg-slate-50 dark:hover:bg-zinc-800/50 transition-colors">
                  <td className="px-6 py-4 font-mono text-xs text-primary">192837{40+i}</td>
                  <td className="px-6 py-4 font-mono text-xs text-slate-500">0xbf2d...a12c</td>
                  <td className="px-6 py-4 text-sm font-bold dark:text-white">{(5000 * i).toLocaleString()}.00 DFT</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700 uppercase">Success</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ icon, label, value, subValue, trend, trendUp, isAddress }: any) => (
  <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-slate-200 dark:border-zinc-800 shadow-sm hover:shadow-glow transition-all group">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
        <span className="material-symbols-outlined text-xl">{icon}</span>
      </div>
      <h3 className="font-bold text-slate-400 text-xs uppercase tracking-widest">{label}</h3>
    </div>
    <div className="flex items-baseline justify-between">
      <p className={`text-xl font-bold dark:text-white ${isAddress ? 'font-mono' : ''}`}>{value}</p>
      {trend && (
        <span className={`text-xs font-bold ${trendUp ? 'text-emerald-500' : 'text-rose-500'}`}>
          {trendUp ? '↑' : '↓'} {trend}
        </span>
      )}
      {subValue && <span className="text-xs text-slate-400 font-medium">{subValue}</span>}
    </div>
  </div>
);

export default Dashboard;
