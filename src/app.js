export default class Character {
  constructor(name, type) {
    const types = ['Bowman', 'Daemon', 'Magician', 'Swordsman', 'Undead', 'Zombie'];
    if (name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error('Некорректные значения в name');
    }

    if (types.includes(type)) {
      this.type = type;
    } else {
      throw new Error('Некорректные значения в type');
    }

    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }
}
