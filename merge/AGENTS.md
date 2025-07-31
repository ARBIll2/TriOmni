# Log Merging Utilities

Scripts to combine distributed Gmail logs into a central sheet.

## Main Export
- `mergeLogs()` runs daily under time-driven trigger with lock protection.

## Immutable Rules
- Do not remove lock usage or change sheet names.

## When Updating
- Add tests in `/tests/merge`.
- Update README accordingly.
