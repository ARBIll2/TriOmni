# Omnisiah Core

Contains the sidebar logic and HTML fragments rendered in Gmail or Sheets.

## Main Export
- `showSidebar()` loads `Sidebar.html` and uses `globalThis` for runtime context.
- `detectContext()` determines whether the user is in Gmail or Sheets.
- `getAccountData(id)` reads account info using helpers from `vox_mechana`.
- `getRecentLogs(id, max)` returns recent log rows from the 'Logs' sheet.
- `showProgressModal(msg)` displays `ProgressModal.html` with a status message.
- HTML fragments like `ProgressModal.html` should remain presentation-only.

## Immutable Rules
- Never write logs directly; use helpers from `vox_mechana`.
- Keep logic out of HTML files.

## When Updating
- Add or update tests in `/tests/omnisiah`.
- Update this file and the root `README.md` when files move or change.
- Keep `appscript.json` in sync with add-on features.
