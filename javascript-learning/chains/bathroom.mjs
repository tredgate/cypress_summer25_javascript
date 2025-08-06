import { EntryHall } from "./entry_hall.mjs";

export class Bathroom {
  constructor(name) {
    this.name = name;
    console.log(`Návštěvník ${name} vstoupil na toalety`);
  }

  returnToEntryHall() {
    console.log(`Návštěvník ${this.name} se vrací do vstupní haly`);
    return new EntryHall(this.name);
  }

  washHands() {
    console.log(`Uživatel ${this.name} si umyl ruce`);
    return this;
  }
}
