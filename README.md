# TriOmni

TriOmni is a modular, scalable Google Workspace system designed to distribute, monitor and enrich information about customer accounts and their associated emails.

## Components

1. **Omnisiah Core (Workspace Add‑on)** – Connects Gmail and Sheets through a smart, context‑aware sidebar. It merges user logs into a unified email history and exposes triggerable actions.
2. **Rite of Activation (User Setup Sheet)** – A one‑time install sheet that links a user to the shared Vox Mechana library, installs time‑based triggers and creates their personal log file.
3. **Vox Mechana (User Script Library)** – Shared Apps Script logic responsible for email logging, classification, forwarding and safe locked writes.

## Installation

Each user opens the setup sheet in `/rite_of_activation/` and runs `install()` once. This links their account to the Vox Mechana library, creates their personal log file and schedules the time‑based triggers.

## Sidebar Usage

When viewing Gmail or a sheet, run `showSidebar()` to open the Omnisiah sidebar. It automatically detects the email or account cell in focus and shows related details pulled from a shared account sheet and the central email log. From the sidebar you can trigger actions such as launching a form, applying labels or searching past interactions.

## Logging and Classification

Every user runs a timed task from Vox Mechana that scans new customer messages, classifies them using a rules-based engine and writes metadata to a personal log file. Omnisiah periodically merges these logs into a master sheet using timestamp-safe appends. Certain classes such as damaged orders or complaints are automatically forwarded to the relevant team.

## Folder Guide

- `/omnisiah/` – Sidebar code and HTML fragments.
- `/vox_mechana/` – Libraries, classifiers and merge utilities.
- `/rite_of_activation/` – Installation script.
- `/tests/` – Unit tests mirroring the source folders.
- `/docs/` – Additional documentation.
- `/docs/omnisiah_core_ui.md` – Features and UI description for Omnisiah Core.

## Contributing

See `AGENTS.md` files in each folder for guidance. Report bugs or suggest features by opening an issue in this repository.
