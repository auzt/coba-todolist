# Module: todo-list

## Tujuan
Komponen utama untuk menampilkan dan mengelola daftar tugas (list view).

## Scope
- Render list of TodoItem components
- Props: `{ todos: Todo[], onToggle: (id) => void, onEdit: (id, data) => void, onDelete: (id) => void }`
- Empty state: "Belum ada tugas" message
- Conditional styling jika todos.length === 0

## Deliverables
- `src/components/TodoList.tsx`

## Acceptance Criteria
- List todos sesuai array yang di-pass
- Empty state render dengan baik
- Kompatibel dengan responsive layout

## Estimasi Waktu
10-15 menit