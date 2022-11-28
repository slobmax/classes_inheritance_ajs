import Character from '../app';
import Bowman from '../bowman';
import Daemon from '../daemon';
import Magician from '../magician';
import Swordsman from '../swordsman';
import Undead from '../undead';
import Zombie from '../zombie';

test('character bowman', () => {
  const bowman = new Bowman('Bowman', 'Bowman');
  expect(bowman).toEqual({
    name: 'Bowman',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('character daemon', () => {
  const daemon = new Daemon('Daemon', 'Daemon');
  expect(daemon).toEqual({
    name: 'Daemon',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('character magician', () => {
  const magician = new Magician('Magician', 'Magician');
  expect(magician).toEqual({
    name: 'Magician',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('character swordsman', () => {
  const swordsman = new Swordsman('Swordsman', 'Swordsman');
  expect(swordsman).toEqual({
    name: 'Swordsman',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

test('character undead', () => {
  const undead = new Undead('Undead', 'Undead');
  expect(undead).toEqual({
    name: 'Undead',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('character zombie', () => {
  const zombie = new Zombie('Zombie', 'Zombie');
  expect(zombie).toEqual({
    name: 'Zombie',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

test('genError', () => {
  function genErr() {
    const genError = new Character('n', 'm');
    return genError;
  }
  expect(genErr).toThrow();
});
