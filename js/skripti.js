console.log("Tämä on javascript-testi.");
alert("Tervetuloa MJK:n etusivulle. Täältä löydät kaikki MJK:sta!");

function funktio(Parametri) {
  let V = "A";
  let M = "a";
  let C = "r";
  let X = "o";
  let x = Parametri;

  console.log(V + M + C + X + x);
}

funktio("");
funktio(" Tiitinen");
funktio(" Viljami Tiitinen");

function funktio2() {
  let x, y, z;
  (x = 5), (y = 8);
  z = y - x;

  console.log("Z arvo on:", z);
}

funktio2();

let count = 0;
count++;
console.log(count + " arvo lopussa");

const ageLimit = 18;

console.log(ageLimit);

function harjoitus() {
  let name = "Mikko";
  let student = name;

  console.log(student);
}

let age = 20;
let name = ["Aaro"];
let isStudent = true;
let hobbies = ["jääkiekko", "padel", "pelaaminen"];
let school = { schoolName: "BCH", grade: 1 };

console.log(age, name, isStudent, hobbies, school);

console.log(typeof age);
console.log(typeof name);
console.log(typeof isStudent);
console.log(typeof hobbies);
console.log(typeof school);

function convertNumberToString(number) {
  number = number.toString();

  return number;
}

function convertStringToNumber(string) {
  string = parseInt(string);

  return string;
}

// Numerot_01.js
console.log(convertNumberToString(42)); // haluttu vastaus: "42"
console.log(convertNumberToString(97)); // haluttu vastaus: "97"
console.log(convertNumberToString(11)); // haluttu vastaus: "11"

console.log(convertStringToNumber("42")); // haluttu vastaus: 42
console.log(convertStringToNumber("97")); // haluttu vastaus: 97
console.log(convertStringToNumber("11")); // haluttu vastaus: 11

// Numerot_02.js
function fahrenheitToCelsius(fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius.toFixed(1);
}

console.log(fahrenheitToCelsius(58));

// Numerot_03.js
function numeroita() {
  let num1 = 12.25;
  let num2 = 9.45;
  let roundedNum1 = Math.round(num1);
  let roundedNum2 = Math.round(num2);
  let sqrtNum1 = Math.sqrt(roundedNum1);
  let maxNum = Math.max(roundedNum1, roundedNum2);

  console.log(typeof roundedNum1);

  console.log(typeof roundedNum2);

  console.log(typeof sqrtNum1);

  console.log(typeof maxNum);

  console.log(roundedNum1, roundedNum2, sqrtNum1, maxNum);
}

numeroita();

// Numerot_04.js
function jakolasku() {
  let num1 = 22;
  let num2 = 5;
  let tulos = num1 / num2;
  return tulos;
}

console.log(jakolasku());

// Numerot_05.js
function ostoskori() {
  let omena = 1;
  let banaani = 1.2;
  let maito = 0.8;
  let sokeri = 3;
  let voiveitsi = 15;
  let vessapaperi = 19;
  let yhteishinta = omena + banaani + maito + sokeri + voiveitsi + vessapaperi;
  return yhteishinta;
}

console.log(ostoskori());

//operaattorit_01.js

function operaattorit_01() {
  let a = 8; // Muuttujalle a annetaan arvo 8
  let b = 3; // Muuttujalle b annetaan arvo 3
  let summa = a + b; // Muuttujalle summa annetaan arvo a + b (plus)
  let erotus = a - b; // Muuttujalle erotus annetaan arvo a - b (miinus)
  let tulo = a * b; // Muuttujalle tulo annetaan arvo a * b (kertolasku)
  let osamäärä = a / b; // Muuttujalle osamäärä annetaan arvo a / b (jakolasku)
  let jakojäännös = a % b; // Muuttujalle jakojäännös annetaan arvo a % b (jakojäännös)

  // päättää funktion toiminnan ja nimeää arvot mitkä palautetaan funktion kutsujalle (console.log)
  return {
    summa1: summa,
    erotus1: erotus,
    tulo1: tulo,
    osamäärä1: osamäärä,
    jakojäännös1: jakojäännös,
  };
}

// suorittaa operaattorit_01 toiminnon ja asettaa palautuksen muuttujan arvon operaattoritulos nimeen.
let operaattoritulos = operaattorit_01();

console.log(operaattoritulos.summa1);
console.log(operaattoritulos.erotus1);
console.log(operaattoritulos.tulo1);
console.log(operaattoritulos.osamäärä1);
console.log(operaattoritulos.jakojäännös1);

// operaattorit_02.js
function nimet() {
  let etunimi = "Aaro";
  let sukunimi = "Tiitinen";

  return `${etunimi} ${sukunimi}`;
  // voi myös käyttää tätä mutta ylempänä oleva parempi. return etunimi + " " + sukunimi;
}

console.log(nimet());
