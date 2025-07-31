/**
 * Fetch account information from the 'Account Info' sheet by ID.
 * Utilizes readDataX from vox_mechana.
 * @param {string} accountId account identifier
 * @return {?Object} account data row or null
 */
function getAccountData(accountId) {
  const ss = SpreadsheetApp.getActive();
  const sheet = ss.getSheetByName('Account Info');
  const data = readDataX(sheet, 'A2:B');
  for (var i = 0; i < data.length; i++) {
    if (String(data[i][0]) === String(accountId)) {
      return { id: data[i][0], name: data[i][1] };
    }
  }
  return null;
}
