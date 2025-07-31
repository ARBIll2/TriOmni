# Rite of Activation

Handles one-time installation and trigger setup for TriOmni.

## Main Export
- `install()` configures triggers and must use `LockService`.

## Immutable Rules
- Do not change trigger names or remove locking.
- Validate all writes to properties.

## When Updating
- Update or add tests in `/tests/rite_of_activation`.
- Keep documentation and this file current.
