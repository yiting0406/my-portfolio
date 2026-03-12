# My Portfolio 技術棧說明

## 專案定位

這是一個以 Vue 3 建立的個人作品集網站，重點是：

- 模組化元件架構（section-based）
- 可快速迭代的 UI 開發流程
- 設計 Token 與 Tailwind 主導的樣式系統
- 可部署到靜態站點（GitHub Pages）

## 核心技術棧

### 前端框架

- Vue 3（3.5.x）
  - 採用 SFC（Single File Components）與 Composition API
  - 讓 UI 元件可讀性與可維護性更高

### 建置工具

- Vite（7.x）
  - 開發時熱更新快、建置速度快
  - base 已設定為 /my-portfolio/，可直接對應 GitHub Pages 子路徑部署

### 樣式系統

- Tailwind CSS v4（搭配 @tailwindcss/vite）
  - 以 utility-first 開發，減少自訂 CSS 重複
  - 已導入 theme token（color/shadow）
  - 透過 @layer components 抽出可重用樣式（例如 section-eyebrow、section-title、card-surface）

### UI 元件庫

- PrimeVue（4.5.x）
- @primeuix/themes（2.x）
  - 提供成熟元件（Button、Drawer、Tag 等）
  - 與 Tailwind 並用，兼顧開發效率與樣式可控性

### 狀態管理與路由

- Pinia（3.x）
  - 輕量、Vue 官方推薦狀態管理方案
- Vue Router（5.x）
  - 管理前端頁面路由

### 測試

- Vitest（4.x）
- @vue/test-utils（2.x）
- jsdom（28.x）
  - 單元測試使用 jsdom 模擬瀏覽器環境

### 程式碼格式化

- Prettier（3.x）
  - 統一程式碼風格，降低協作成本

## 專案結構重點

- src/components/layout
  - 全域框架元件（例如 Navbar、App Chrome Overlay）
- src/components/sections
  - 首頁各段落（Hero、Skills、Projects、Contact...）
- src/composables
  - 可重用互動邏輯（例如 reveal、app chrome 行為）
- src/assets/tailwind.css
  - Tailwind v4 入口、theme token、共用 component classes
- docs/theme-naming-guidelines.md
  - token 命名與擴充規範

## 為什麼這樣選

- Vue 3 + Vite：開發體驗快，適合作品集型專案快速迭代
- Tailwind + Token：設計一致性高，改版成本低
- PrimeVue：減少重造輪子，加快互動元件開發
- Composable 架構：互動邏輯可拆分、可測試、可重用

## 對外簡短介紹（30 秒版）

這個作品集是用 Vue 3 + Vite 建立，樣式以 Tailwind v4 為主，並且用設計 Token 管理色彩與陰影，確保整體視覺一致。UI 元件使用 PrimeVue 加速開發，狀態管理用 Pinia、路由用 Vue Router，測試採 Vitest。整體架構採 section-based 元件化設計，方便後續功能擴充與維護。

## 目前執行指令

- npm run dev：啟動開發模式
- npm run build：產生正式版建置
- npm run preview：預覽建置結果
- npm run test:unit：執行單元測試
- npm run format：格式化 src 程式碼
