function test_buildGmailCard() {
  var builder = {
    sections: [],
    addSection: function(sec) { this.sections.push(sec); return this; },
    build: function() { return { sections: this.sections }; }
  };
  var section = {
    widgets: [],
    addWidget: function(w) { this.widgets.push(w); return this; }
  };
  globalThis.CardService = {
    newCardBuilder: function() { return builder; },
    newCardSection: function() { return section; },
    newTextParagraph: function() { return { setText: function(t) { this.text = t; return this; } }; }
  };
  var card = buildGmailCard({ account: { id: '1', name: 'Test' }, logs: [['1','msg']] });
  console.assert(card.sections.length === 1, 'Card should contain section');
}
