# Rite of Activation

This module configures TriOmni for a user on first install.

## Main Export
- `install()` runs once and sets up triggers using `LockService`.

## Immutable Rules
- Do not change trigger names or remove locking.
- Do not write to properties without validation.

## When Updating
- Add tests in `/tests/setup`.
- Update documentation and this file.
