# Omnisiah Core

Contains the sidebar logic and HTML fragments rendered in Gmail or Sheets.

## Main Export
- `showSidebar()` loads `Sidebar.html` and uses `globalThis` for runtime context.
- HTML fragments like `ProgressModal.html` should remain presentation-only.

## Immutable Rules
- Never write logs directly; use helpers from `vox_mechana`.
- Keep logic out of HTML files.

## When Updating
- Add or update tests in `/tests/omnisiah`.
- Update this file and the root `README.md` when files move or change.
