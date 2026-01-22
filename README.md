# Digital Fund RWA Platform（RWA 资产数字化管理平台）

一个面向机构的人民币货币基金（Money Market Fund）数字化 / 代币化管理前端 Demo。提供从资产净值管理、代币铸造 / 销毁、黑白名单合规管理到审计历史与权限配置的一体化管理界面。

> 本项目当前为前端原型（无真实链上交互），用于展示产品交互与信息架构，方便后续接入真实区块链与后台服务。

---

## 功能概览

- **登录与连接**
  - 首屏为品牌化 Landing 页面（连接钱包按钮、产品卖点展示），模拟机构用户通过钱包接入平台。
- **仪表盘（Dashboard）**
  - 代币总体概览：合约地址、Token 名称、总供给、当前 NAV、持币地址数、Owner 地址等关键信息。
  - NAV 历史趋势图：使用 Recharts 展示 NAV 与基准的对比曲线。
  - 持币地址分布：饼图展示不同机构 / 资金池的持仓比例。
  - 近期铸造记录预览：最近的铸造事件表格。
- **NAV MMF 更新（净值更新）**
  - 表单输入新的 NAV 值及更新备注。
  - 右侧说明卡片解释 NAV 更新的业务含义与合规要求（不可篡改的审计记录、收益曲线生成等）。
  - 下方展示上一次 NAV 更新记录（NAV 数值、区块号、时间等）。
- **代币铸造管理（Minting）**
  - 当前流通量、铸造上限及剩余额度展示。
  - “发起代币铸造”行动卡片，模拟新铸造申请入口。
  - 铸造事件历史表格：包含区块、哈希、接收地址、数量、时间、状态等字段。
- **销毁申请管理（Burning）**
  - 活跃销毁请求列表：含请求 ID、数量、状态、发起部门等。
  - 右侧详情面板：展示单个销毁请求的详细信息、审批时间线（财务审批、合规审核、链上执行）、评论框以及“拒绝 / 通过”按钮。
- **黑白名单管理（Whitelist / Blacklist）**
  - 标签页切换白名单 / 黑名单。
  - 白名单：钱包地址、KYC 等级、添加时间及删除操作，模拟 KYC/KYB 合规名单管理。
  - 黑名单：空状态展示，表明当前无被禁止地址。
  - 支持 CSV 导出、批量导入地址的交互入口。
- **交易与操作历史（History）**
  - 高级筛选：时间范围、事件类型、搜索哈希或地址。
  - 历史事件表格：涵盖 MINT、BURN、NAV UPDATE、WHITELIST ADD 等事件类型，展示时间戳、事件类型、相关地址、金额 / 详情、交易哈希。
- **系统设置（Settings）**
  - 角色管理：超级管理员、财务审批员、合规官、只读分析师等角色列表。
  - 权限矩阵：按功能模块（铸造代币、销毁审批、黑白名单编辑、NAV 更新等）配置不同角色的权限状态。
  - 系统成员表：展示成员姓名、钱包地址、角色，并预留配置入口。
- **主题与布局**
  - 支持浅色 / 深色模式切换。
  - 固定侧边栏导航 + 顶部 Header + 内容区布局，适合运营后台与控制面板场景。

---

## 技术栈

- **框架与语言**
  - React 19（函数式组件）
  - TypeScript
- **构建与开发**
  - Vite 6（开发 / 构建 / 预览）
  - ES 模块、Import Map（在 index.html 中配置）
- **样式与 UI**
  - Tailwind CSS（通过 CDN 在 index.html 注入）
  - Google Fonts：Inter、Material Symbols 图标字体
- **数据可视化**
  - Recharts（折线图 / 饼图）

---

## 目录结构

项目根目录主要结构如下（节选）：

- `index.html`：应用 HTML 模板、Tailwind 与 Import Map 配置。
- `index.tsx`：React 入口文件，挂载 [App.tsx](file:///c:/Users/ZhuanZ/Desktop/RWA_Management/App.tsx)。
- `App.tsx`：应用根组件，管理路由视图切换、钱包连接状态和暗黑模式。
- `types.ts`：全局枚举和基础类型定义（视图枚举、交易类型等）。
- `vite.config.ts`：Vite 配置（React 插件、别名、环境变量注入）。
- `metadata.json`：项目元数据与描述。
- `components/`
  - [Header.tsx](file:///c:/Users/ZhuanZ/Desktop/RWA_Management/components/Header.tsx)：顶部栏（标题、当前用户、主题切换、退出）。
  - [Sidebar.tsx](file:///c:/Users/ZhuanZ/Desktop/RWA_Management/components/Sidebar.tsx)：左侧导航栏，控制视图切换。
- `views/`
  - [Landing.tsx](file:///c:/Users/ZhuanZ/Desktop/RWA_Management/views/Landing.tsx)：首屏 Landing / 连接钱包页面。
  - [Dashboard.tsx](file:///c:/Users/ZhuanZ/Desktop/RWA_Management/views/Dashboard.tsx)：代币概览仪表盘。
  - [NavUpdate.tsx](file:///c:/Users/ZhuanZ/Desktop/RWA_Management/views/NavUpdate.tsx)：NAV MMF 净值更新。
  - [Minting.tsx](file:///c:/Users/ZhuanZ/Desktop/RWA_Management/views/Minting.tsx)：铸造管理。
  - [Burning.tsx](file:///c:/Users/ZhuanZ/Desktop/RWA_Management/views/Burning.tsx)：销毁申请管理。
  - [Whitelist.tsx](file:///c:/Users/ZhuanZ/Desktop/RWA_Management/views/Whitelist.tsx)：黑白名单管理。
  - [History.tsx](file:///c:/Users/ZhuanZ/Desktop/RWA_Management/views/History.tsx)：历史与审计事件。
  - [Settings.tsx](file:///c:/Users/ZhuanZ/Desktop/RWA_Management/views/Settings.tsx)：角色 / 权限 / 成员设置。

---

## 启动与运行

### 环境要求

- Node.js（建议 18+）
- npm 或 pnpm / yarn（以下以 npm 为例）

### 安装依赖

在项目根目录执行：

```bash
npm install
```

### 开发模式启动

```bash
npm run dev
```

默认会在 `http://localhost:3000` 启动开发服务器（端口见 [vite.config.ts](file:///c:/Users/ZhuanZ/Desktop/RWA_Management/vite.config.ts)）。

### 生产构建

```bash
npm run build
```

构建产物将输出到 `dist/` 目录，可部署到任意静态资源服务器。

### 本地预览生产构建

```bash
npm run preview
```

用于本地以生产模式启动预览服务器。

---

## 环境变量

在 [vite.config.ts](file:///c:/Users/ZhuanZ/Desktop/RWA_Management/vite.config.ts) 中，项目会从环境中读取以下变量并注入到前端：

- `GEMINI_API_KEY`

使用方式示例（在前端代码中）：

```ts
const apiKey = process.env.GEMINI_API_KEY;
```

目前代码中尚未实际调用该 API，但该配置已准备好供未来集成 AI / 智能分析相关功能。

在本地开发时，可以在项目根目录创建 `.env` 文件：

```bash
GEMINI_API_KEY=your-api-key-here
```

---

## 开发与扩展指南

本项目采用“单页面 + 视图枚举”的简单导航模式。要扩展新功能或视图，建议按以下步骤操作：

### 1. 新增视图组件

在 `views/` 下新增一个页面组件，例如：

- `views/Reports.tsx`

### 2. 在视图枚举中注册

在 [types.ts](file:///c:/Users/ZhuanZ/Desktop/RWA_Management/types.ts) 中的 `View` 枚举添加新成员：

```ts
export enum View {
  DASHBOARD = 'DASHBOARD',
  NAV_UPDATE = 'NAV_UPDATE',
  MINTING = 'MINTING',
  BURNING = 'BURNING',
  COMPLIANCE = 'COMPLIANCE',
  HISTORY = 'HISTORY',
  SETTINGS = 'SETTINGS',
  REPORTS = 'REPORTS'
}
```

### 3. 在侧边栏中添加菜单项

在 [Sidebar.tsx](file:///c:/Users/ZhuanZ/Desktop/RWA_Management/components/Sidebar.tsx) 的 `navItems` 中加入一项：

```ts
{ view: View.REPORTS, icon: 'insights', label: '报表分析' }
```

### 4. 在 App 中完成路由映射

在 [App.tsx](file:///c:/Users/ZhuanZ/Desktop/RWA_Management/App.tsx) 中：

- 在 `renderView` 的 `switch` 里为新视图返回对应组件。
- 在 `getViewTitle` 中为新视图设置页面标题。

### 5. 保持样式与交互一致

- 尽量复用现有 Tailwind 类名与布局模式（卡片、表格、过滤栏等），保持整体产品设计的一致性。
- 审计类、合规类功能建议遵循现有 History / Whitelist 的信息密度与字段命名风格。

---

## 后续集成建议

- 接入真实链上节点或中间层服务，将当前静态数据替换为实时链上数据。
- 在 NAV 更新、铸造 / 销毁、黑白名单编辑等操作上，接入后端 API 和签名流程。
- 基于 `GEMINI_API_KEY` 等能力，为合规检查、风险提示、收益分析等模块加入智能分析支持。

本 README 旨在帮助新加入的开发者快速理解项目结构与业务背景，并在此基础上继续扩展功能。欢迎在现有组件基础上进行重构与增强。

