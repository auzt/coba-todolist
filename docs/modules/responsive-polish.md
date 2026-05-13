# Module: responsive-polish

## Tujuan
Final touchup untuk responsive layout dan dark mode support.

## Scope
- Responsive: 1 column di mobile, optimal width di desktop (max-width container)
- Dark mode: support sistem (`prefers-color-scheme`) + toggle manual
- Animasi subtle: fade-in untuk item baru, smooth toggle
- Touch targets minimal 44px
- Focus states visible
- CSS cleanup: tidak ada orphaned styles

## Deliverables
- Update `src/index.css` dengan dark mode vars
- Update components dengan dark: prefix Tailwind
- Optional: toggle button untuk dark/light mode

## Acceptance Criteria
- Look bagus di 375px (mobile) dan 1280px (desktop)
- Dark mode berfungsi sesuai preferensi sistem
- Semua interactive elements reachable via keyboard
- Lighthouse score > 90

## Estimasi Waktu
20-30 menit