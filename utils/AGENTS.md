# Utilities

Low-level helpers including lock-safe write functions.
Provides sheet read/write wrappers.

## Main Export
- `safeAppendRowWithLock()` ensures atomic writes to shared sheets.
- `readDataX()` and `writeDataX()` wrap sheet access operations.

## Immutable Rules
- Never remove locking or change sheet wrapper names.

## When Updating
- Add tests in `/tests/utils`.
- Update documentation.
