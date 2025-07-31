# TriOmni

TriOmni is a modular Google Workspace add-on that helps manage Gmail and Sheets workflows.

## Components

1. **Omnisiah Core** – Provides a context-aware sidebar and UI when viewing Gmail or sheets.
2. **Vox Mechana** – Shared library with classifiers, logging, and safe-write utilities.
3. **Rite of Activation** – One-time installer that sets up triggers and config.

## Installation

Run the `RiteOfActivation.gs` script to install triggers and configure your environment.

## Sidebar Usage

When viewing Gmail or a sheet, run `showSidebar()` to open the Omnisiah sidebar. It reads account context and displays relevant tools.

## Logging and Classification

Emails are classified using `classifyEmailWithScore()` from the `classify/` folder. Logs are merged daily by `mergeLogs()` to keep a central history.

## Folder Guide

- `/core/` – Sidebar and menu logic.
- `/lib/` – Shared helpers and classifiers.
- `/setup/` – Installation scripts.
- `/classify/` – Email classification pipelines.
- `/merge/` – Log consolidation utilities.
 - `/utils/` – Low-level helpers such as safe writes and sheet read/write wrappers.
- `/ui/` – HTML sidebar and modal fragments.
- `/tests/` – Unit tests for each module.
- `/docs/` – Additional documentation.

## Contributing

See `AGENTS.md` files in each folder for guidance. Report bugs or suggest features by opening an issue in this repository.
