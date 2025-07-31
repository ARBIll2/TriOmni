function test_applyLabel() {
  globalThis.context = { type: 'GMAIL', threadId: 'abc' };
  var added = false;
  globalThis.GmailApp = {
    getThreadById: function(id) { return { id: id }; },
    createLabel: function(name) {
      return { addToThread: function(thread) { added = true; } };
    }
  };
  applyLabel('foo');
  console.assert(added, 'Label should be added');
}
