function test_classifyText() {
  const res = classifyText('');
  console.assert(res.score === 0, 'Empty text should score 0');
}
