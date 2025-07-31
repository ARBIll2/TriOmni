# TriOmni

TriOmni is a modular Google Workspace add-on that helps manage Gmail and Sheets workflows.

## Components

1. **Omnisiah Core** – Provides a context-aware sidebar and UI when viewing Gmail or sheets.
2. **Vox Mechana** – Shared library with classifiers, logging and utilities.
3. **Rite of Activation** – One-time installer that sets up triggers and config.

## Installation

Run the `RiteOfActivation.gs` script to install triggers and configure your environment.

## Sidebar Usage

When viewing Gmail or a sheet, run `showSidebar()` to open the Omnisiah sidebar. It reads account context and displays relevant tools.

## Logging and Classification

Emails are classified using `classifyEmailWithScore()` in the `vox_mechana/` folder. Logs are merged daily by `mergeLogs()` to keep a central history.

## Folder Guide

- `/omnisiah/` – Sidebar code and HTML fragments.
- `/vox_mechana/` – Libraries, classifiers and merge utilities.
- `/rite_of_activation/` – Installation script.
- `/tests/` – Unit tests mirroring the source folders.
- `/docs/` – Additional documentation.

## Contributing

See `AGENTS.md` files in each folder for guidance. Report bugs or suggest features by opening an issue in this repository.
