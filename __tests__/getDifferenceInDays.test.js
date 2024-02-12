const {getDifferenceInDays} = require('../scripts/myScripts.js');

test('Difference in days between two same dates should be 0', () => {
  const startDate = '2022-01-01';
  const endDate = '2022-01-01';
  expect(getDifferenceInDays(startDate, endDate)).toBe(1);
});

test('Difference in days between two consecutive dates should be 1', () => {
  const startDate = '2022-01-01';
  const endDate = '2022-01-02';
  expect(getDifferenceInDays(startDate, endDate)).toBe(2);
});

test('Difference in days between two dates with a gap of more than one day', () => {
  const startDate = '2022-01-01';
  const endDate = '2022-01-05';
  expect(getDifferenceInDays(startDate, endDate)).toBe(5);
});

test('Difference in days between two dates with a large gap', () => {
  const startDate = '2022-12-31';
  const endDate = '2023-01-05';
  expect(getDifferenceInDays(startDate, endDate)).toBe(6);
});

test('Difference in days in a leap year', () => {
  const startDate = '2020-02-28';
  const endDate = '2020-03-01';
  expect(getDifferenceInDays(startDate, endDate)).toBe(3);
});

test('Difference in days in a common year', () => {
  const startDate = '2023-02-28';
  const endDate = '2023-03-01';
  expect(getDifferenceInDays(startDate, endDate)).toBe(2);
});
