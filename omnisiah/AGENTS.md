# Omnisiah Core

Contains the sidebar logic and HTML fragments rendered in Gmail or Sheets.

## Main Export
- `showSidebar()` loads `Sidebar.html` or returns a Gmail card and uses `globalThis` for runtime context.
- `detectContext()` determines whether the user is in Gmail or Sheets.
- `getAccountData(id)` reads account info using helpers from `vox_mechana`.
- `getRecentLogs(id, max)` returns recent log rows from the 'Logs' sheet.
- `showProgressModal(msg)` displays `ProgressModal.html` with a status message.
- `resetRuntimeState()` clears in-memory context before each execution.
- `updateProgressStatus(msg)` updates the runtime progress message.
- `buildGmailCard(data)` constructs the card UI when running inside Gmail.
- `applyLabel(name)` applies a Gmail label to the active thread.
- HTML fragments like `ProgressModal.html` should remain presentation-only.

## Immutable Rules
- Never write logs directly; use helpers from `vox_mechana`.
- Keep logic out of HTML files.

## When Updating
- Add or update tests in `/tests/omnisiah`.
- Update this file and the root `README.md` when files move or change.
- Keep `appscript.json` in sync with add-on features.
