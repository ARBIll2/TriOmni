/**
 * @summary Read data from a sheet range.
 * @param {GoogleAppsScript.Spreadsheet.Sheet} sheet
 * @param {string} rangeA1
 * @return {Array}
 * Example:
 * ```
 * const values = readDataX(sheet, 'A1:B2');
 * ```
 */
function readDataX(sheet, rangeA1) {
  return sheet.getRange(rangeA1).getValues();
}

/**
 * @summary Write data to a sheet using appendRow.
 * @param {GoogleAppsScript.Spreadsheet.Sheet} sheet
 * @param {Array} row
 * Example:
 * ```
 * writeDataX(sheet, ['a', 'b']);
 * ```
 */
function writeDataX(sheet, row) {
  sheet.appendRow(row);
}
