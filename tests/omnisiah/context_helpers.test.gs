function test_detectContextSheets() {
  globalThis.SpreadsheetApp = {
    getActive: function() {
      return {
        getActiveSheet: function() {
          return {
            getActiveCell: function() {
              return { getValue: function() { return 'AC123'; } };
            }
          };
        }
      };
    }
  };
  const ctx = detectContext();
  console.assert(ctx.type === 'SHEETS', 'Context should be SHEETS');
  console.assert(ctx.accountId === 'AC123', 'Account ID should match');
}

function test_getAccountData() {
  globalThis.SpreadsheetApp = {
    getActive: function() {
      return {
        getSheetByName: function() {
          return {
            getRange: function() {
              return {
                getValues: function() {
                  return [['AC123', 'Test Co']];
                }
              };
            }
          };
        }
      };
    }
  };
  globalThis.readDataX = function(sheet, range) { return sheet.getRange(range).getValues(); };
  const row = getAccountData('AC123');
  console.assert(row.name === 'Test Co', 'Should return row data');
}
