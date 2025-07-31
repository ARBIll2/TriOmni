// 📦 SETUP.js – TriOmni Project Bootstrap Instructions
// This file defines the scaffold for Codex and human contributors to generate the TriOmni project structure and logic.

/////////////////////////////
// ✅ Overview of TriOmni
/////////////////////////////

// TriOmni is a modular system consisting of a shared core (Omnisiah), a one-time user initializer (Rite of Activation), 
// and a library of shared logic (Vox Mechana). It merges logs, classifies incoming Gmail, and manages shared workspace data.
// Core behavior follows the CoverMaker-style principle:
// > "Read once. Normalize immediately. Operate entirely in memory. Write back once."

/////////////////////////////
// ✅ Description of Each Component
/////////////////////////////

// OmnisiahCore.gs – Main sidebar logic, merges log files, provides account awareness from Gmail/Sheets
// VoxMechana_Lib.gs – Shared functions: classification, lock-safe writes, log scoring
// RiteOfActivation.gs – Setup tool for new users: installs triggers, links Sheets, initializes user properties
// mergeLogs.gs – Combines distributed logs into one unified source of truth
// classifyEmailWithScore.gs – Uses scoring logic to categorize emails by intent (Order, Complaint, Query, etc.)
// safeAppendRowWithLock.gs – Ensures lock-protected append operations for shared Sheet safety

/////////////////////////////
// ✅ Sheet Structure Definitions
/////////////////////////////

// Signal: Tracks current execution status (e.g. in-progress, aborted, complete)
// Logs: Unified workspace log history (append-only)
// Account Info: Core reference table for account lookups

/////////////////////////////
// ✅ Trigger Descriptions
/////////////////////////////

// - classifyEmailWithScore.gs → Time-driven, every 30 min, uses LockService
// - mergeLogs.gs → Daily trigger, 3am UTC, ensures consistent central history
// - RiteOfActivation.gs → One-time trigger setup per user
// All triggers should:
//   - Use LockService (script-level lock)
//   - Respect Gmail quotas (1500 sends/day, 100 users/day per method)
//   - Be staggered when multiple users run concurrently

/////////////////////////////
// ✅ UI Logic References
/////////////////////////////

// - Sidebar: OmnisiahCore.gs → dynamically shows account context when email or sheet row selected
// - Modal: ProgressModal.html → shows pipeline status, auto-scroll log, abort button
// - Menu Entries: Created in OmnisiahCore.gs and/or RiteOfActivation.gs

/////////////////////////////
// ✅ Folder + File Layout Expectations
/////////////////////////////

// - /omnisiah/omnisiah_core.gs
// - /vox_mechana/vox_mechana_lib.gs
// - /rite_of_activation/rite_of_activation.gs
// - /vox_mechana/safe_append_row_with_lock.gs
// - /vox_mechana/classify_email_with_score.gs
// - /vox_mechana/merge_logs.gs
// - /omnisiah/ProgressModal.html

/////////////////////////////
// ✅ Constants + Config Expectations
/////////////////////////////

// All config should live inside a shared CONFIG object, e.g.:
//   CONFIG = { VERBOSE_LOG: true, LOCK_TIMEOUT_MS: 30000, MAX_RETRY_ATTEMPTS: 3 }
// Constants such as LANGUAGES, LABELS, QUOTA_LIMITS should be defined here or in a shared constants file.

/////////////////////////////
// ✅ Memory Structure Conventions
/////////////////////////////

// Use globalThis only for runtime memory:
//   globalThis.signal = { status, startedAt }
//   globalThis.logs = []  // In-memory buffer for log messages
// Avoid persisting these beyond run lifetime.

/////////////////////////////
// ✅ Common Naming Conventions
/////////////////////////////

// - Functions: camelCase
// - Files: snake_case where possible or namespaced folders
// - Triggers: Use function prefix with component, e.g., classify_runTrigger()
// - Sheets: Tabs named exactly ('Logs', 'Signal', 'Account Info')

/////////////////////////////
// ✅ Cross-Tool Best Practices
/////////////////////////////

// - All components must be modular and scoped by file (1 public function per file where appropriate)
// - Avoid cross-file state dependencies—communicate through structured memory objects or controlled Config
// - Always use centralized logging and error-handling helpers
// - Sheet reads/writes must be wrapped in read/write helpers with clear I/O boundaries
// - UI logic must be separated from business logic
