# Vox Mechana Library

Shared classifiers, utilities, and logging helpers.

## Main Export
- Each file exports a single helper such as `classifyText()`.
- Utilized by core and pipelines; relies on `globalThis.logs`.

## Immutable Rules
- Do not remove lock-protected operations.
- Avoid writing to sheets directly; use utility wrappers.

## When Updating
- Add tests in `/tests/lib` for any new function.
- Update related README sections.
