/**
 * Detect the active context in which the add-on is running.
 * Returns either account data from a sheet or a Gmail thread id.
 * @return {Object} context information
 */
function detectContext() {
  try {
    const ss = SpreadsheetApp.getActive();
    const cell = ss.getActiveSheet().getActiveCell();
    return { type: 'SHEETS', accountId: cell.getValue() };
  } catch (err) {
    // ignore
  }
  try {
    const threads = GmailApp.getInboxThreads(0, 1);
    if (threads && threads.length) {
      return { type: 'GMAIL', threadId: threads[0].getId() };
    }
  } catch (err) {
    // ignore
  }
  return { type: 'UNKNOWN' };
}
