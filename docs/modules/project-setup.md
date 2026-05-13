# Module: project-setup

## Tujuan
Inisialisasi proyek React + Vite + TypeScript dengan konfigurasi Tailwind CSS, ESLint, dan Prettier.

## Scope
- Init Vite project dengan template `react-ts`
- Install Tailwind CSS 4.x
- Konfigurasi ESLint + Prettier
- Install dependencies: react, react-dom, vite, @vitejs/plugin-react, typescript, tailwindcss, postcss, autoprefixer
- Install devDependencies: @types/react, @types/react-dom, eslint, prettier, eslint-config-prettier
- Buat struktur folder awal (src/, public/)
- Verifikasi dev server jalan (`npm run dev`)

## Deliverables
- `package.json` dengan semua dependencies
- `vite.config.ts`
- `tailwind.config.js` / `tailwind.config.ts`
- `postcss.config.js`
- `.eslintrc.cjs` / `.eslintrc.json`
- `.prettierrc`
- `tsconfig.json`
- `src/main.tsx` — entry point
- `src/App.tsx` — root component (sementara kosong)
- `src/index.css` — Tailwind directives
- `index.html`

## Acceptance Criteria
- Dev server jalan di localhost:5173
- Halaman kosong render tanpa error
- ESLint & Prettier terintegrasi di editor
- Build production tanpa error

## Estimasi Waktu
30-45 menit