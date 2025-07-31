/**
 * @summary Display the Omnisiah sidebar in Gmail or Sheets with context-aware account details.
 *
 * Example:
 * ```
 * showSidebar();
 * ```
 */
function showSidebar() {
  resetRuntimeState();
  const context = detectContext();
  let account = null;
  if (context.type === 'SHEETS') {
    account = getAccountData(context.accountId);
  }
  let logs = [];
  if (context.accountId) {
    logs = getRecentLogs(context.accountId);
  } else if (context.threadId) {
    logs = getRecentLogs(context.threadId);
  }
  globalThis.context = context;
  globalThis.account = account;

  const data = { account: account, logs: logs };

  if (context.type === 'GMAIL') {
    return buildGmailCard(data);
  }

  const template = HtmlService.createTemplateFromFile('Sidebar');
  template.data = data;
  const html = template.evaluate().setTitle('TriOmni');
  SpreadsheetApp.getUi().showSidebar(html);
}

/**
 * Build a Gmail add-on card from account and log data.
 * @param {{account:?Object, logs:Array<Array>}} data information to display
 * @return {GoogleAppsScript.Card.Card}
 */
function buildGmailCard(data) {
  const card = CardService.newCardBuilder();
  const section = CardService.newCardSection();
  if (data.account) {
    section.addWidget(
      CardService.newTextParagraph().setText(
        'Account: ' + data.account.name + ' (' + data.account.id + ')'
      )
    );
  } else {
    section.addWidget(
      CardService.newTextParagraph().setText('No account selected.')
    );
  }
  if (data.logs && data.logs.length) {
    const text = data.logs.map(function(row) { return row[1]; }).join('<br>');
    section.addWidget(CardService.newTextParagraph().setText(text));
  }
  card.addSection(section);
  return card.build();
}

/**
 * Apply a Gmail label to the active thread if available.
 * @param {string} labelName name of the label to apply
 */
function applyLabel(labelName) {
  const ctx = globalThis.context || detectContext();
  if (ctx.type !== 'GMAIL' || !ctx.threadId) return;
  const thread = GmailApp.getThreadById(ctx.threadId);
  const label = GmailApp.createLabel(labelName);
  label.addToThread(thread);
}
