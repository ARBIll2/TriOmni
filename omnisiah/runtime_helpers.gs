/**
 * Reset runtime state stored in globalThis to ensure a clean environment per execution.
 */
function resetRuntimeState() {
  globalThis.context = null;
  globalThis.account = null;
  globalThis.progressStatus = null;
}

/**
 * Update the in-memory progress status and return it.
 * @param {string} message status message
 * @return {string} updated status
 */
function updateProgressStatus(message) {
  globalThis.progressStatus = message || 'Processing...';
  return globalThis.progressStatus;
}
