let firstName = "Petr"; // ? Deklarace a inicializace proměnné
// "Petr" = let firstName2; // ! Nejde, proměnná vždy musí být vlevo
let lastName; // ? Deklarace proměnné
lastName = "Novák"; // ? Inicializace proměnné

console.log(firstName);
console.log(firstName + lastName); // ? slučovací operátor + spojuje 2 stringy dohromady - Nevytváří mezeru!
console.log(firstName + " " + lastName);
firstName = "Alžběta";
console.log(firstName);

{
  let x = "proměnná v bloku kódu";
  console.log(x);
  console.log(firstName);
}
// console.log(x); // ! Nejde, x je jen v bloku

{
  let x = "znovu";
  console.log(x);
}

// ! Redeklarace není možná:
// let firstName;

// * Proměnná var
// ! Proměnná var se deklaruje pro modul (soubor) a ne pro blok
{
  var y = "proměnná var";
}
console.log(y);
// ! Promměnnou var můžeme redeklarovat
var y = "změněná proměnná var";
console.log(y);

// * Proměnná const
const country = "Česko";
// country = "Německo"; // ? Proměnnou const nemůžu měnit, vyhodí chybu při spuštění
// const currency; // ! Nelze, musím proměnnou const deklarovat a rovnou inicializovat
// currency = "CZK";

/*
Více
řádková
poznámka
*/
