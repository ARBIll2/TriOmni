function test_resetRuntimeState() {
  globalThis.context = {type: 'GMAIL'};
  globalThis.account = {id: '1'};
  globalThis.progressStatus = 'Running';
  resetRuntimeState();
  console.assert(globalThis.context === null, 'Context should reset');
  console.assert(globalThis.account === null, 'Account should reset');
  console.assert(globalThis.progressStatus === null, 'Progress should reset');
}

function test_updateProgressStatus() {
  var result = updateProgressStatus('Working');
  console.assert(result === 'Working', 'Status should return message');
  console.assert(globalThis.progressStatus === 'Working', 'Global status updated');
}
