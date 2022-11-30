import Character from '../app';
import Bowman from '../bowman';
import Daemon from '../daemon';
import Magician from '../magician';
import Swordsman from '../swordsman';
import Undead from '../undead';
import Zombie from '../zombie';

test('Создание нового персонажа Bowman', () => {
  const received = new Bowman('Bowman', 'Bowman');
  const expected = {
    name: 'Bowman',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(received).toEqual(expected);
});

test('Создание нового персонажа Daemon', () => {
  const received = new Daemon('Daemon', 'Daemon');
  const expected = {
    name: 'Daemon',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(received).toEqual(expected);
});

test('Создание нового персонажа Magician', () => {
  const received = new Magician('Magician', 'Magician');
  const expected = {
    name: 'Magician',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(received).toEqual(expected);
});

test('Создание нового персонажа Swordsman', () => {
  const received = new Swordsman('Swordsman', 'Swordsman');
  const expected = {
    name: 'Swordsman',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(received).toEqual(expected);
});

test('Создание нового персонажа Undead', () => {
  const received = new Undead('Undead', 'Undead');
  const expected = {
    name: 'Undead',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(received).toEqual(expected);
});

test('Создание нового персонажа Zombie', () => {
  const received = new Zombie('Zombie', 'Zombie');
  const expected = {
    name: 'Zombie',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(received).toEqual(expected);
});

test('Класс Character, выброс ошибки', () => {
  function genErr() {
    const received = new Character('n', 'Bowman');
    return received;
  }
  expect(genErr).toThrow();
});

test('Класс Character, выброс ошибки', () => {
  function genErr() {
    const received = new Character('Bowman', 'm');
    return received;
  }
  expect(genErr).toThrow();
});
