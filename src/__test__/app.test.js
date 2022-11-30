import Character from '../app';

test('Класс Character, проверка name', () => {
  function genErr() {
    const received = new Character('n', 'Bowman');
    return received;
  }
  expect(genErr).toThrow();
});

test('Класс Character, проверка type', () => {
  function genErr() {
    const received = new Character('Bowman', 'm');
    return received;
  }
  expect(genErr).toThrow();
});
