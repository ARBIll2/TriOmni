/**
 * @summary Append a row to a sheet while preventing concurrent writes.
 *
 * Example:
 * ```
 * safeAppendRowWithLock(sheet, ['a', 'b']);
 * ```
 * @param {GoogleAppsScript.Spreadsheet.Sheet} sheet target sheet
 * @param {Array} row row values
 */
function safeAppendRowWithLock(sheet, row) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);
  writeDataX(sheet, row);
  lock.releaseLock();
}
