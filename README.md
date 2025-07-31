# TriOmni

TriOmni is a modular, scalable Google Workspace system designed to distribute, monitor and enrich information about customer accounts and their associated emails.

## Components

1. **Omnisiah Core (Workspace Add‑on)** – Connects Gmail and Sheets through a smart, context‑aware sidebar. It merges user logs into a unified email history and exposes triggerable actions. It now automatically detects the active account or thread using `detectContext()` and fetches sheet data via `getAccountData()`. The sidebar lists recent history via `getRecentLogs()` and long-running tasks show progress with `showProgressModal()`.
2. **Rite of Activation (User Setup Sheet)** – A one‑time install sheet that links a user to the shared Vox Mechana library, installs time‑based triggers and creates their personal log file.
3. **Vox Mechana (User Script Library)** – Shared Apps Script logic responsible for email logging, classification, forwarding and safe locked writes.

## Installation

Each user opens the setup sheet in `/rite_of_activation/` and runs `install()` once. This links their account to the Vox Mechana library, creates their personal log file and schedules the time‑based triggers.

## Sidebar Usage

When viewing Gmail or a sheet, run `showSidebar()` to open the Omnisiah interface. In Gmail the function now returns a card built by `buildGmailCard()` while Sheets continues to show an HTML sidebar. The context is detected automatically so the interface lists relevant account details pulled from the shared sheet and recent history from the unified log. From the sidebar or card you can trigger actions such as launching a form or applying labels via `applyLabel()`. The interface also displays the latest messages for the current account using `getRecentLogs()`.

## Logging and Classification

Every user runs a timed task from Vox Mechana that scans new customer messages, classifies them using a rules-based engine and writes metadata to a personal log file. Omnisiah periodically merges these logs into a master sheet using timestamp-safe appends. Certain classes such as damaged orders or complaints are automatically forwarded to the relevant team.

## Folder Guide

- `/omnisiah/` – Sidebar code and HTML fragments.
- `/omnisiah/appscript.json` – Manifest configuration for the add-on.
- `/vox_mechana/` – Libraries, classifiers and merge utilities.
- `/rite_of_activation/` – Installation script.
- `/tests/` – Unit tests mirroring the source folders.
- `/docs/` – Additional documentation.
- `/docs/omnisiah_core_ui.md` – Features and UI description for Omnisiah Core.

## Contributing

See `AGENTS.md` files in each folder for guidance. Report bugs or suggest features by opening an issue in this repository.
