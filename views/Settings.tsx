
import React from 'react';

const Settings: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-12 gap-8">
        {/* Left: Role Management */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-slate-100 dark:border-zinc-800 flex justify-between items-center">
              <h3 className="font-bold dark:text-white">角色管理</h3>
              <button className="text-primary p-1">
                <span className="material-symbols-outlined">add_box</span>
              </button>
            </div>
            <div className="p-4 space-y-2">
              <div className="p-4 bg-primary/5 border border-primary/20 rounded-xl cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">admin_panel_settings</span>
                    <span className="font-bold text-primary text-sm">超级管理员</span>
                  </div>
                  <span className="text-[10px] bg-primary text-white px-2 py-0.5 rounded-full uppercase">Current</span>
                </div>
              </div>
              {['财务审批员', '合规官', '只读分析师'].map(role => (
                <div key={role} className="p-4 hover:bg-slate-50 dark:hover:bg-zinc-800 rounded-xl cursor-pointer transition-all border border-transparent">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-slate-400">group</span>
                      <span className="font-bold text-slate-600 dark:text-slate-300 text-sm">{role}</span>
                    </div>
                    <span className="material-symbols-outlined text-slate-300 text-sm">chevron_right</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Center: Permission Matrix */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl shadow-sm overflow-hidden">
            <div className="px-8 py-6 border-b border-slate-100 dark:border-zinc-800 flex justify-between items-center">
              <h3 className="font-bold text-lg dark:text-white">
                权限配置: <span className="text-primary ml-2">超级管理员</span>
              </h3>
              <button className="bg-primary text-white px-6 py-2.5 rounded-xl font-black text-xs shadow-lg shadow-primary/20">
                保存配置修改
              </button>
            </div>
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: '铸造代币', desc: '发起和执行新代币的铸造操作', enabled: true },
                { title: '销毁审批', desc: '确认和最终化代币销毁请求', enabled: true },
                { title: '黑白名单编辑', desc: '添加或移除合规名单中的地址', enabled: true },
                { title: 'NAV 趋势更新', desc: '发布最新的资产净值数据', enabled: true },
                { title: '系统合约配置', desc: '修改 RWA 智能合约的核心参数', enabled: false },
                { title: '审计日志导出', desc: '下载全量的系统操作审计记录', enabled: true },
              ].map((perm, idx) => (
                <div key={idx} className="flex items-center justify-between p-5 bg-slate-50 dark:bg-zinc-800/30 rounded-2xl border border-slate-100 dark:border-zinc-800">
                  <div>
                    <h5 className="font-bold text-sm dark:text-white mb-1">{perm.title}</h5>
                    <p className="text-[10px] text-slate-500">{perm.desc}</p>
                  </div>
                  <div className={`size-10 rounded-xl flex items-center justify-center transition-all ${perm.enabled ? 'bg-primary text-white shadow-md shadow-primary/20' : 'bg-slate-200 dark:bg-zinc-800 text-slate-400'}`}>
                    <span className="material-symbols-outlined text-xl">
                      {perm.enabled ? 'check_circle' : 'do_not_disturb_on'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Members Table */}
          <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl shadow-sm overflow-hidden">
             <div className="px-8 py-6 border-b border-slate-100 dark:border-zinc-800 flex justify-between items-center">
                <h3 className="font-bold dark:text-white">系统成员</h3>
                <button className="bg-slate-900 dark:bg-zinc-800 text-white px-4 py-2 rounded-lg text-xs font-bold">
                  添加新成员
                </button>
             </div>
             <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <tbody className="divide-y divide-slate-100 dark:divide-zinc-800">
                    {[
                      { name: 'Zhang Hong', addr: '0x5a7d...8a23', role: '超级管理员' },
                      { name: 'Li Wei', addr: '0x221c...6671', role: '财务审批员' },
                      { name: 'Chen Yang', addr: '0x992a...bc11', role: '合规官' },
                    ].map((user, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-zinc-800/30 transition-colors">
                        <td className="px-8 py-5">
                          <div className="flex items-center gap-3">
                            <div className="size-8 rounded-full bg-slate-100 dark:bg-zinc-800 flex items-center justify-center font-bold text-[10px] text-primary">
                              {user.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <span className="text-sm font-bold dark:text-white">{user.name}</span>
                          </div>
                        </td>
                        <td className="px-8 py-5 font-mono text-xs text-slate-500">{user.addr}</td>
                        <td className="px-8 py-5">
                          <span className="text-xs font-medium text-slate-600 dark:text-slate-400">{user.role}</span>
                        </td>
                        <td className="px-8 py-5 text-right">
                          <button className="text-slate-400 hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-lg">settings_suggest</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
