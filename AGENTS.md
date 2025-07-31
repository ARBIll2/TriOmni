# Root AGENT

## Purpose
Guidelines for contributing to the TriOmni project.

## Global Rules
- 🧪 All new functions must have a corresponding test under `/tests`.
- 📝 Update the related README and folder-level `AGENT.md` whenever files change.
- 🔐 Use `LockService` for any trigger-based operations.
- 🧠 Use `globalThis.` for runtime memory and reset each run.
- 📄 Wrap sheet reads/writes in `readDataX()` and `writeDataX()` helpers.
- 🧰 Keep business logic separate from UI logic.
- 🔁 Avoid circular dependencies across modules.
