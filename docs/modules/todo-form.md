# Module: todo-form

## Tujuan
Komponen form untuk menambah task baru (title + optional deadline).

## Scope
- Input text untuk judul (required)
- Input date picker untuk deadline (optional)
- Button "Add" (disable saat title kosong)
- Validasi sederhana, reset form setelah submit
- Emit event `onAdd` dengan payload `{title, deadline}` ke parent component
- Styling dengan Tailwind (responsive, accessible)

## Deliverables
- `src/components/TodoForm.tsx`
- Props interface `{ onAdd: (data: {title:string; deadline?:string}) => void }`
- Unit test untuk mengirim data dan reset form

## Acceptance Criteria
- Form dapat menambah task tanpa error
- Deadline optional, format ISO string
- UI responsif (mobile & desktop)
- Accessible (ARIA label, keyboard navigation)

## Estimasi Waktu
15-20 menit