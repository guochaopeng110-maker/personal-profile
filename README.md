# 个人主页与技术履历 (Personal Profile)

这是一个专为个人技术实力、项目案例与职业生涯演进设计的现代化响应式单页 Web 应用（SPA）。网站不仅集成了双语切换和自动化 CI/CD，还使用了高质感的网页交互动效。

👉 **在线预览地址**: [https://guochaopeng110-maker.github.io/personal-profile/](https://guochaopeng110-maker.github.io/personal-profile/)

---

## ✨ 核心特性

- **🌌 动态交互粒子星空背景**：
  - 基于 HTML5 Canvas + `requestAnimationFrame` 渲染的高性能流体粒子与星座网格系统。
  - **磁性引力交互**：粒子实时感知鼠标位置，生成柔和的引力偏移，并在鼠标与粒子间拉出高亮连线。
  - **性能与设备适配**：在移动端自动下调粒子数量（限制为 30 个）并禁用线段绘制，保障电池省电与丝滑流畅度。
  - **主题连贯**：动态抓取系统 CSS 变量（青色与琥珀色），配合暗角渐变遮罩（Vignette Overlay）在页面边缘进行平滑过渡，保证 100% 的文字可读性。

- **⏰ 职业生涯演进时间线**：
  - 以时间线形式清晰呈现核心职业经历，支持中英双语即时无缝切换。
  - 覆盖在**长沙兴盛优选**（设备控制系统/全栈开发）和**天度（厦门）科技**（VR/Web3D/C++ 研发）等阶段的关键成果与工程沉淀。

- **📁 深度技术专题与案例分析**：
  - 针对 **AI 智能体**、**Web3D/VR**、**货运船舶管理**、**工业控制系统**等关键技术域的详细案例展示。
  - 统一的案例页面架构，提供技术背景、工程难点、详细解决方案与多仓库 Git 链接。

- **🌐 双语本地化（i18n）**：
  - 使用 React Context 驱动的轻量级无缝中英双语切换系统，支持路径与状态联动。

- **🧪 完整的质量保障**：
  - 配备 Vitest 单元测试，覆盖路由切换、双语状态同步、可访问性（Accessibility）和核心组件渲染。

---

## 🛠️ 技术栈

- **核心框架**: React 18 & TypeScript
- **构建工具**: Vite 5
- **路由管理**: React Router v6
- **样式方案**: 原生 CSS（Vanilla CSS），无框架捆绑，精细化过渡控制
- **测试框架**: Vitest & jsdom & React Testing Library
- **持续集成/部署**: GitHub Actions & GitHub Pages

---

## 🚀 快速开始

### 1. 克隆项目
```bash
git clone https://github.com/guochaopeng110-maker/personal-profile.git
cd personal-profile
```

### 2. 安装依赖
```bash
npm install
```

### 3. 本地启动开发服务器
```bash
npm run dev
```
启动后可在浏览器打开 `http://localhost:5173/` 访问。

### 4. 运行单元测试
```bash
npm run test
```

### 5. 构建生产包
```bash
npm run build
```
打包产物将输出在 `dist/` 目录下。

---

## 📦 自动化部署 (GitHub Pages)

项目已配置 GitHub Actions 自动化工作流。每当您将代码推送至 `main` 分支时，Actions 会自动：
1. 安装依赖并验证代码质量。
2. 运行构建脚本生成静态资产。
3. 复制 `index.html` 为 `404.html`（解决 GitHub Pages 的 SPA 前端路由刷新 404 问题）。
4. 自动部署至 GitHub Pages 进行托管。

**如何开启托管**：
在 GitHub 仓库的 **Settings** -> **Pages** 页面，将 **Build and deployment** 下的 **Source** 修改为 **GitHub Actions** 即可。
