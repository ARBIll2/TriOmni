/**
 * @summary Classify a piece of text and return a score.
 *
 * Example:
 * ```
 * const result = classifyText('hello world');
 * ```
 * @param {string} text input text
 * @return {Object} score and label
 */
function classifyText(text) {
  if (!text) return { score: 0, label: 'unknown' };
  return { score: 1, label: 'test' };
}
