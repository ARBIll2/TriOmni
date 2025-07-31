# Vox Mechana

Shared logic including classifiers, merge utilities and low level helpers.

## Main Export
- `classifyText()` and other helpers in this folder provide reusable functions.
- `classifyEmailWithScore()` and `mergeLogs()` are trigger based and must use `LockService`.

## Immutable Rules
- Do not remove lock protected operations.
- Never bypass sheet wrappers `readDataX()` and `writeDataX()`.

## When Updating
- Add tests in `/tests/vox_mechana` for new or changed functions.
- Update the README when files move or behavior changes.
