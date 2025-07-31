# Omnisiah Core Features and UI

This document describes the intended capabilities and user interface for the Omnisiah Core add‑on.

## Key Features

- **Context‑Aware Sidebar** – Detect the active Gmail thread or selected account row in Sheets and display relevant account data.
- **Unified Log Viewer** – Merge user logs into a single history and present recent interactions in the sidebar.
- **Triggerable Actions** – Provide quick actions such as launching forms, applying labels or searching related emails.
- **Progress Modal** – Show task progress when running merges or classification jobs.

## Sidebar Layout

1. **Header** – Displays the current account or email subject.
2. **Details Section** – Shows account information pulled from the shared sheet.
3. **Recent History** – Lists recent emails from the unified log.
4. **Actions Panel** – Contains buttons to run workflows (e.g. open form, apply label).

## Progress Modal

The modal appears during long‑running operations and includes:

- A status message that updates as steps complete.
- A log area to display recent messages.
- A cancel button that allows the user to abort when safe.

