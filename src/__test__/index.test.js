import sortCharacters from '../index';

test('testing function of sorting characters by health', () => {
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  const result = sortCharacters();

  expect(result).toEqual(expected);
});
