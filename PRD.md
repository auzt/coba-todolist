# PRD — Personal Todo List (coba-todolist)

## 1. Project Overview

**Nama:** coba-todolist  
**Tipe:** Web App (Personal Use)  
**Ringongan:** Todo list sederhana untuk mengelola tugas harian, responsif di HP dan PC.

---

## 2. User Stories

| # | Sebagai | Saya ingin | Supaya |
|---|---|---|---|
| US-01 | User | Tambah tugas baru dengan judul + deadline | Tidak lupa tugas penting |
| US-02 | User | Tandai tugas sebagai selesai/belum | Lacak progress |
| US-03 | User | Hapus tugas | Buang yang sudah tidak relevan |
| US-04 | User | Lihat semua tugas (ongoing + completed) | Dapat overview cepat |
| US-05 | User | Filter tugas: semua / aktif / selesai | Mudah cari |
| US-06 | User | Edit judul dan deadline tugas | Bisa koreksi tanpa hapus |
| US-07 | User | Akses dari HP dan PC tanpa masalah UI | Bisa kerja di mana saja |

---

## 3. Functional Requirements

### FR-01 — CRUD Tugas
- **Create:** Input judul (required), deadline (optional, date picker)
- **Read:** List semua tugas, sort by created_at atau deadline
- **Update:** Edit judul dan deadline inline
- **Delete:** Hapus dengan konfirmasi sederhana

### FR-02 — Status Toggle
- Toggle selesai / belum langsung dari list
- Completed tasks tampil struck-through

### FR-03 — Filter
- Tab/button: All / Active / Completed
- Filter berlaku instant tanpa reload

### FR-04 — Persistence
- Data tersimpan di localStorage (client-side only, no backend)
- Tidak perlu login/register

### FR-05 — Responsive UI
- Mobile-first design
- Touch-friendly tap targets (min 44px)
- Grid/list layout adaptif berdasarkan viewport

---

## 4. Non-Functional Requirements

| Aspek | Requirement |
|---|---|
| **Performance** | Load < 2 detik, interaksi < 100ms |
| **Accessibility** | keyboard-navigable, screen-reader friendly |
| **Browser Support** | Chrome, Firefox, Safari, Edge (latest 2 versions) |
| **Maintainability** | Codebase modular, dokumentasi cukup |
| **Portability** | Single page app, no install required |

---

## 5. Tech Stack

| Layer | Pilihan |
|---|---|
| **Frontend** | React + Vite |
| **Styling** | Tailwind CSS |
| **State** | React useState / useReducer (no Redux needed) |
| **Storage** | localStorage via custom hook |
| **Icons** | Lucide React |
| **Fonts** | System font stack (performance) |

**Alasan:** React + Vite cepat build dan hot-reload. Tailwind untuk styling responsif tanpa menulis custom CSS. localStorage cukup untuk single-user.

---

## 6. Out of Scope (v1)

- User auth / login
- Cloud sync / multi-device
- Due date reminders / notifications
- Collaboration / shared tasks
- Tags / categories / priority
- Drag-and-drop reordering

---

## 7. Success Criteria

✅ User bisa tambah, edit, hapus, toggle tugas  
✅ Data persist setelah refresh browser  
✅ UI bagus dan usable di HP (375px) dan PC (1280px+)  
✅ No console errors  
✅ Build production-ready bundle