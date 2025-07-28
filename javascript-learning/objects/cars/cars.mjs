import { CarBlueprint } from "./car_blueprints.mjs";

const dieselCar = new CarBlueprint(
  "Červená",
  "1.6TDI",
  "Diesel",
  "Diesel auto"
);
dieselCar.logCarProperties();

// ? Můžeme vytvořit další objekt ze třídy, který bude fungovat nezávisle na dieselCar
const petrolCar = new CarBlueprint("Modrá", "1.2TSI", "Benzín", "Ropák");
// ? petrolCar i dieselCar má svoje vlastnosti (properties) a fungují nezávisle
dieselCar.logCarProperties();
petrolCar.logCarProperties();
// ? Změníme barvu petrolCar, dieselCar zůstane nezměněný
petrolCar.color = "Bílá";
dieselCar.logCarProperties(); // Červená barva
petrolCar.logCarProperties(); // Bílá barva
