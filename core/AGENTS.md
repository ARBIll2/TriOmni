# Omnisiah Core Module

This folder contains the sidebar and menu logic for TriOmni.

## Main Export
- `showSidebar()` is triggered from the add-on menu and loads HTML from `/ui`.
- It reads account context via `globalThis` memory.

## Immutable Rules
- Never write logs directly; use the logging utilities in `/lib`.
- Do not remove `LockService` usage from triggered functions.

## When Updating
- Add or update tests in `/tests/core`.
- Update this file and the root `README.md`.
