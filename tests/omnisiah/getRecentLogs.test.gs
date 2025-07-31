function test_getRecentLogs() {
  globalThis.SpreadsheetApp = {
    getActive: function() {
      return {
        getSheetByName: function() {
          return {
            getRange: function() {
              return {
                getValues: function() {
                  return [
                    ['AC1', 'Message 1', '2024-01-01'],
                    ['AC1', 'Message 2', '2024-01-02'],
                    ['AC2', 'Ignore', '2024-01-03']
                  ];
                }
              };
            }
          };
        }
      };
    }
  };
  globalThis.readDataX = function(sheet, range) {
    return sheet.getRange(range).getValues();
  };
  var logs = getRecentLogs('AC1', 2);
  console.assert(logs.length === 2, 'Should return two rows');
  console.assert(logs[0][0] === 'AC1', 'Row should match id');
}
