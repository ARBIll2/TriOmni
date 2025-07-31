# Classification Pipelines

Holds Gmail classification scripts with scoring logic.

## Main Export
- `classifyEmailWithScore()` is triggered periodically with `LockService`.

## Immutable Rules
- Never bypass locks or modify log format.
- Classifiers must use utilities from `/lib`.

## When Updating
- Add tests in `/tests/classify`.
- Document updates in README.
