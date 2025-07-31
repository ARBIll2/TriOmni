/**
 * @summary Display the Omnisiah sidebar in Gmail or Sheets.
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
