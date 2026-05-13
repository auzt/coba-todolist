# Module: tests

## Tujuan
Unit test dan integration test untuk semua komponen dan logic.

## Scope
- Install: vitest, @testing-library/react, @testing-library/jest-dom, jsdom
- Konfigurasi: `vitest.config.ts`
- Unit tests untuk:
  - `todoReducer` — semua action (add, toggle, edit, delete, clear)
  - `useLocalStorage` hook
- Component tests:
  - `TodoForm` — render, validation, submit
  - `TodoItem` — display, toggle, edit, delete
  - `FilterBar` — tabs, counts
  - `Header` — stats, clear button

## Deliverables
- `vite.config.ts` dengan vitest setup
- `src/__tests__/` folder dengan test files
- `src/__tests__/todoReducer.test.ts`
- `src/__tests__/useLocalStorage.test.ts`
- `src/__tests__/TodoForm.test.tsx`
- `src/__tests__/TodoItem.test.tsx`
- `src/__tests__/FilterBar.test.tsx`
- `src/__tests__/Header.test.tsx`

## Acceptance Criteria
- Semua tests pass (`npm test`)
- Coverage > 70% (functional areas)
- CI-ready: `npm run test` exit 0

## Estimasi Waktu
45-60 menit