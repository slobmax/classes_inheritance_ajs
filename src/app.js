export default class Character {
  constructor(name, type, attack, defence) {
    if (name.length >= 2 && name.length <= 10) {
      this.name = name;
      this.type = type;
      this.health = 100;
      this.level = 1;
      this.attack = attack;
      this.defence = defence;
    } else {
      throw new Error('Некорректные значения');
    }
  }
}
