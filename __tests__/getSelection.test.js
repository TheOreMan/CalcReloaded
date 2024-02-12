const {getSelection} = require('../scripts/myScripts.js');

test('getSelection of 1', () => {
  expect(getSelection(1)).toBe("hours_per_day");
});
test('getSelection of 2', () => {
  expect(getSelection(2)).toBe("cals_per_week");
});
test('getSelection of 3', () => {
  expect(getSelection(3)).toBe("mets_per_week");
});
test('getSelection of other', () => {
  expect(getSelection(4)).toBe("");
  expect(getSelection(0)).toBe("");
});
