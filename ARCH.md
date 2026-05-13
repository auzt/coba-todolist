# ARCH — Personal Todo List (coba-todolist)

## 1. Architecture Overview

**Pola:** Single-Page Application (SPA) — Client-side only  
**Alasan:** Personal use, no backend needed. Semua data di localStorage.

```
┌─────────────────────────────────┐
│           Browser / SPA         │
│                                 │
│  ┌─────────┐  ┌──────────────┐  │
│  │  React   │  │  Tailwind CSS│  │
│  │  (Vite)  │  │  (Styling)   │  │
│  └────┬─────┘  └──────────────┘  │
│       │                          │
│  ┌────▼──────────────────────┐   │
│  │     App State (useReducer)│   │
│  └────┬──────────────────────┘   │
│       │                          │
│  ┌────▼──────────────────────┐   │
│  │   localStorage (persist)  │   │
│  └───────────────────────────┘   │
└─────────────────────────────────┘
```

---

## 2. Component Structure

```
src/
├── App.vue / App.tsx              ← Entry point
├── main.tsx                       ← Bootstrap React + Vite
├── components/
│   ├── TodoForm.tsx               ← Input form (judul + deadline)
│   ├── TodoList.tsx               ← Daftar tugas (map dari items)
│   ├── TodoItem.tsx               ← Single task row (text, toggle, delete, edit)
│   ├── FilterBar.tsx              ← Tab filter (All / Active / Completed)
│   └── Header.tsx                 ← Title + stats ringkasan
├── hooks/
│   └── useLocalStorage.ts         ← Custom hook untuk persist/read localStorage
├── store/
│   └── todoReducer.ts             ← useReducer logic (add, toggle, edit, delete)
├── types/
│   └── todo.ts                    ← TypeScript interfaces
└── utils/
    └── format.ts                  ← Date formatting helpers
```

---

## 3. Data Model

```typescript
interface Todo {
  id: string;          // UUID v4
  title: string;       // Judul tugas (required)
  deadline?: string;   // ISO date string (optional)
  completed: boolean;  // Status
  createdAt: string;   // ISO timestamp
}
```

**Storage key:** `coba-todolist-todos` (JSON array di localStorage)

---

## 4. State Management

**Pendekatan:** `useReducer` + custom `useLocalStorage` hook

- `useReducer` untuk logic CRUD yang jelas dan terpusat
- `useLocalStorage` sync state ↔ localStorage secara transparent
- Tidak perlu Redux/Zustand — terlalu overkill untuk app personal sederhana

### Actions

```typescript
type Action =
  | { type: 'ADD'; payload: { title: string; deadline?: string } }
  | { type: 'TOGGLE'; payload: { id: string } }
  | { type: 'EDIT'; payload: { id: string; title: string; deadline?: string } }
  | { type: 'DELETE'; payload: { id: string } }
  | { type: 'CLEAR_COMPLETED' };
```

---

## 5. Routing

**Tidak perlu router.** Semua di satu halaman (SPA single-view):
- Form tambah di atas
- Filter bar
- List tugas
- Semua render conditionally berdasarkan filter state

---

## 6. Styling Strategy

- **Mobile-first** — base styles untuk layar kecil, `@media (min-width: 768px)` untuk tablet/desktop
- **Tailwind CSS** via utility classes — tidak ada CSS custom files
- **Color scheme:** Light default, optional dark mode via Tailwind `dark:` prefix
- **Spacing:** 4px grid system, konsisten di semua viewport
- **Typography:** System font stack (sans-serif ringan, cepat load)

---

## 7. Tech Stack Detail

| Komponen | Pilihan | Versi Target |
|---|---|---|
| Runtime | Node.js | 20+ |
| Bundler | Vite | 6.x |
| Framework | React | 19.x |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS | 4.x |
| Icons | Lucide React | latest |
| Testing | Vitest + React Testing Library | latest |
| Linting | ESLint + Prettier | latest |

---

## 8. Build & Deploy

- **Build:** `vite build` → output ke `dist/` (static files)
- **Deploy:** Bisa langsung ke GitHub Pages, Netlify, atau Vercel (static hosting)
- **No server needed** — pure static SPA

---

## 9. Performance Targets

| Metric | Target |
|---|---|
| First Contentful Paint | < 1s |
| Time to Interactive | < 2s |
| Bundle size | < 100KB (gzipped) |
| Lighthouse score | > 90 |

---

## 10. Out of Scope (v1)

- Backend / API server
- Authentication
- Cloud sync
- Notifications / reminders
- Shared / collaborative lists
- Drag-and-drop reorder
- Export / import (JSON)

---

## 11. Risk & Mitigation

| Risk | Mitigasi |
|---|---|
| localStorage penuh (>5MB) | Notifikasi ke user, batasi history |
| Browser tidak support | Target modern browsers saja |
| Data hilang (clear storage) | Beri warning di UI |
| TypeScript learning curve | Gunakan strict mode dari awal, dokumentasi inline |