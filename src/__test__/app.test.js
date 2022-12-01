import Character from '../app';

test('Класс Character, проверка name', () => {
  expect(() => new Character('n', 'Bowman')).toThrow();
});

test('Класс Character, проверка type', () => {
  expect(() => new Character('Bowman', 'm')).toThrow();
});
