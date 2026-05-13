# Module List — coba-todolist

Urutan build (bottom-up based on dependencies):

| # | Modul | Deskripsi | Status |
|---|---|---|---|
| 1 | project-setup | Init Vite + React + TypeScript + Tailwind + ESLint | [x] ✅ PR #10 |
| 2 | types-and-store | Type definitions, todoReducer, useLocalStorage hook | [x] ✅ PR #11 |
| 3 | todo-form | Input form: tambah tugas (judul + deadline) | [x] ✅ PR #12 |
| 4 | todo-list | Daftar tugas (TodoItem, toggle status, edit, delete) | [x] ✅ PR #13 |
| 5 | filter-bar | Tab filter All / Active / Completed | [x] ✅ PR #14 |
| 6 | header-and-stats | Header + ringkasan jumlah tugas | [x] ✅ PR #15 |
| 7 | responsive-polish | Final touch responsive + dark mode | [x] ✅ PR #16 |
| 8 | tests | Unit test pake Vitest + React Testing Library | [x] ✅ PR #16 |