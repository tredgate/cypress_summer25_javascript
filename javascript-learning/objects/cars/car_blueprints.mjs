export class CarBlueprint {
  constructor(color, engine, fuel, carName) {
    this.color = color;
    this.engine = engine;
    this.fuel = fuel;
    this.carName = carName;
    this.wheels = 4; // ? Hardcoded property
    console.log(
      `Auto "${this.carName}" bylo vyrobeno s vlastnostmi: \n\t - motor: ${this.engine} \n\t - typ paliva: ${this.fuel}\n\t - barva: ${this.color} \n\t - počet kol: ${this.wheels}`
    );
    this.logDivider();
  }

  logCarProperties() {
    console.log(
      `Informace o autě: ${this.carName}: \n\t motor: ${this.engine}, palivo: ${this.fuel}, barva: ${this.color}, počet kol: ${this.wheels}`
    );
    this.logDivider();
  }

  logDivider() {
    console.log("-------------------------------");
  }

  repaint(newColor) {
    const oldCar = this.color;
    this.color = newColor;
    console.log(
      `Auto ${this.carName} bylo přebarveno z ${oldCar} barvy na novou barvu: ${this.color}`
    );
  }

  getColor() {
    return this.color;
  }
}
