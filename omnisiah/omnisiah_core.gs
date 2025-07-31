/**
 * @summary Display the Omnisiah sidebar in Gmail or Sheets with context-aware account details.
 *
 * Example:
 * ```
 * showSidebar();
 * ```
 */
function showSidebar() {
  const context = detectContext();
  let account = null;
  if (context.type === 'SHEETS') {
    account = getAccountData(context.accountId);
  }
  globalThis.context = context;
  globalThis.account = account;

  const template = HtmlService.createTemplateFromFile('Sidebar');
  template.data = account;
  const html = template.evaluate().setTitle('TriOmni');
  SpreadsheetApp.getUi().showSidebar(html);
}
