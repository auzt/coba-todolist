# Module: todo-item

## Tujuan
Komponen individual untuk satu tugas — display, toggle, edit, delete.

## Scope
- Display title (strike-through jika completed)
- Display deadline (format readable: "12 Mei 2026")
- Checkbox untuk toggle status
- Button edit → inline edit mode
- Button delete dengan konfirmasi (simple confirm)
- Edit mode: input fields untuk title & deadline, Save/Cancel buttons

## Deliverables
- `src/components/TodoItem.tsx`
- Props: `{ todo: Todo, onToggle: (id) => void, onEdit: (id, data) => void, onDelete: (id) => void }`
- Types sudah import dari types-and-store

## Acceptance Criteria
- Toggle completed: UI update langsung (optimistic)
- Edit mode: input terisi data saat ini, Save/Cancel works
- Delete: ada confirm sebelum hapus
- Deadline display: format lokal yang readable

## Estimasi Waktu
20-25 menit