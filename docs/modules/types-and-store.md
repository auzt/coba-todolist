# Module: types-and-store

## Tujuan
Membuat type definitions, reducer logic, dan custom localStorage hook untuk state management.

## Scope
- Definisikan interface `Todo` (id, title, deadline?, completed, createdAt)
- Definisikan `Action` type (ADD, TOGGLE, EDIT, DELETE, CLEAR_COMPLETED)
- Buat `todoReducer` function — pure function, handle semua action
- Buat `useLocalStorage` custom hook — baca/tulis ke localStorage dengan JSON parse/stringify
- Buat initial state (array kosong atau data dari localStorage)
- Export semua dari index file

## Deliverables
- `src/types/todo.ts` — interface Todo, type Action
- `src/store/todoReducer.ts` — reducer function
- `src/hooks/useLocalStorage.ts` — custom hook persist
- `src/types/index.ts` — barrel export

## Acceptance Criteria
- TypeScript compile tanpa error
- useLocalStorage baca/tulis dengan benar
- todoReducer handle semua action dengan benar (unit test ready)
- Data persist setelah page reload

## Estimasi Waktu
20-30 menit