/**
 * @summary Retrieve recent log entries for a specific account or thread.
 * @param {string} identifier accountId or threadId
 * @param {number} [maxResults=5] maximum number of rows to return
 * @return {Array<Array>} log rows
 */
function getRecentLogs(identifier, maxResults) {
  maxResults = maxResults || 5;
  const ss = SpreadsheetApp.getActive();
  const sheet = ss.getSheetByName('Logs');
  const data = readDataX(sheet, 'A2:C');
  const filtered = data.filter(function(row) {
    return String(row[0]) === String(identifier);
  });
  return filtered.slice(-maxResults);
}
