# 📝 coba-todolist

Personal Todo List Web App — simple, responsive, dan offline-first.

[Live Demo](https://auzt.github.io/coba-todolist/)

## ✨ Fitur

- ✅ Tambah tugas dengan judul dan deadline opsional
- ✅ Toggle selesai / belum selesai
- ✅ Edit tugas inline (judul + deadline)
- ✅ Hapus tugas dengan konfirmasi
- 🔍 Filter: All / Active / Completed
- 📊 Stats: jumlah tugas tersisa
- 🗑️ Clear completed (hapus semua yang sudah selesai)
- 🌙 Dark mode (otomatis sesuai sistem + toggle manual)
- 📱 Responsive design (mobile & desktop)
- 💾 Offline-first — data tersimpan di localStorage

## 🛠 Tech Stack

| Stack | Detail |
|---|---|
| **Framework** | React 19 + Vite 8 |
| **Language** | TypeScript 6 |
| **Styling** | Tailwind CSS 4 |
| **State** | useReducer + useLocalStorage (no Redux) |
| **Testing** | Vitest + React Testing Library |
| **Build** | Vite production build |

## 🚀 Cara Install

```bash
# Clone repo
git clone https://github.com/auzt/coba-todolist.git
cd coba-todolist

# Install dependencies
npm install

# Jalankan dev server
npm run dev
# → buka http://localhost:5173

# Production build
npm run build

# Preview production build
npm run preview

# Jalankan tests
npm test
```

## 📂 Struktur Proyek

```
coba-todolist/
├── src/
│   ├── components/        # React components
│   │   ├── TodoForm.tsx   # Form tambah/edit tugas
│   │   ├── TodoList.tsx   # List container
│   │   ├── TodoItem.tsx   # Individual todo dengan inline edit
│   │   ├── FilterBar.tsx  # Tab filter All/Active/Completed
│   │   ├── Header.tsx     # Header + stats
│   │   └── DarkModeToggle.tsx  # Dark/light mode toggle
│   ├── hooks/
│   │   └── useLocalStorage.ts  # Custom hook persist ke localStorage
│   ├── store/
│   │   └── todoReducer.ts      # Pure reducer function
│   ├── types/
│   │   └── todo.ts     # TypeScript interfaces
│   ├── __tests__/      # Unit & component tests
│   ├── test/
│   │   └── setup.ts    # Vitest setup dengan jest-dom
│   ├── App.tsx         # Root component
│   ├── main.tsx        # Entry point
│   └── index.css       # Tailwind + CSS variables
├── docs/
│   └── modules/        # Spec detail tiap modul
├── index.html
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.ts
├── package.json
└── .github/
    └── workflows/
        └── deploy.yml  # GitHub Pages deploy workflow
```

## 🎯 Data Model

```typescript
interface Todo {
  id: string;           // crypto.randomUUID()
  title: string;        // Judul tugas
  deadline?: string;    // ISO date string (opsional)
  completed: boolean;    // Status selesai
  createdAt: string;     // ISO timestamp
}

type Action =
  | { type: 'ADD'; payload: { title: string; deadline?: string } }
  | { type: 'TOGGLE'; payload: { id: string } }
  | { type: 'EDIT'; payload: { id: string; title: string; deadline?: string } }
  | { type: 'DELETE'; payload: { id: string } }
  | { type: 'CLEAR_COMPLETED' };
```

## 📜 License

ISC