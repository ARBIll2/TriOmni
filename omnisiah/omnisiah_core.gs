/**
 * @summary Display the Omnisiah sidebar in Gmail or Sheets with context-aware account details.
 *
 * Example:
 * ```
 * showSidebar();
 * ```
 */
function showSidebar() {
  const html = HtmlService.createHtmlOutputFromFile('Sidebar')
    .setTitle('TriOmni');
  SpreadsheetApp.getUi().showSidebar(html);
}
