# UI Fragments

Contains HTML files rendered by the sidebar and modals.

## Main Export
- HTML fragments like `ProgressModal.html` loaded by `showSidebar()`.

## Immutable Rules
- Keep logic out of HTML; use scriptlets only for data injection.

## When Updating
- Update tests in `/tests/ui` if UI behavior changes.
- Document changes in README.
