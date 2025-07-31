/**
 * @summary One-time installation for TriOmni triggers and setup.
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
