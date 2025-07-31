/**
 * @summary Display the ProgressModal.html with a status message.
 * @param {string} message status text to display
 */
function showProgressModal(message) {
  globalThis.progressStatus = message || 'Processing...';
  const template = HtmlService.createTemplateFromFile('ProgressModal');
  template.status = globalThis.progressStatus;
  const html = template.evaluate().setWidth(300).setHeight(120);
  SpreadsheetApp.getUi().showModalDialog(html, 'TriOmni');
}
