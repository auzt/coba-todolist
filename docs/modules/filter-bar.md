# Module: filter-bar

## Tujuan
Tab filter untuk menampilkan semua / hanya aktif / hanya selesai.

## Scope
- 3 tabs/buttons: "All", "Active", "Completed"
- Props: `{ activeFilter: 'all'|'active'|'completed', onFilterChange: (filter) => void }`
- Active tab styling (highlight)
- Counts per category: "All (5)", "Active (3)", "Completed (2)"

## Deliverables
- `src/components/FilterBar.tsx`

## Acceptance Criteria
- Filter change update list di parent
- Active tab visible distinction
- Counts update sesuai data

## Estimasi Waktu
10-15 menit