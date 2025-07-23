// alcohol_eligibility.js
// javascript-learning/conditions

const actualAge = 17;
const drinkingAgeLimit = 18;
const fullName = "Josef Nový";

if (actualAge >= drinkingAgeLimit) {
  console.log(`${fullName} už může pít alkohol.`);
} else if (actualAge >= 0) {
  console.log(
    `${fullName} ještě nemůže pít alkohol. Chybí mu/jí ještě ${
      drinkingAgeLimit - actualAge
    } roků/let.`
  );
} else {
  console.error("CHYBA: Zadán neplatný věk!");
}
