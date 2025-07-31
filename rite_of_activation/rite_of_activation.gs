/**
 * @summary One-time installation sheet that links a user to Vox Mechana and schedules triggers.
 *
 * Example:
 * ```
 * install();
 * ```
 */
function install() {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);
  // Placeholder trigger creation
  ScriptApp.newTrigger('classifyEmailWithScore')
    .timeBased().everyHours(1).create();
  lock.releaseLock();
}
