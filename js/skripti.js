console.log("Tämä on javascript-testi.");
//alert("Tervetuloa MJK:n etusivulle. Täältä löydät kaikki MJK:sta!");

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

let age = "20v";
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

// Numerot_01.js
function convertNumberToString(number) {
  number = number.toString();

  return number;
}

function convertStringToNumber(string) {
  string = parseInt(string);

  return string;
}

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

// numerot_06.js

function numerot_06() {
  let numString1 = "42";
  let numString2 = "3.14";
  number = parseInt(numString1);
  string = parseFloat(numString2);
  return number + " " + string;
}

console.log(numerot_06());

// numerot_07.js

function numerot_07() {
  let price = 19.56789;
  let desimalTwo = price.toFixed(2);
  let desimalZero = price.toFixed(0);

  return {
    desimalTwo: desimalTwo,
    desimalZero: desimalZero,
  };
}
let hinta = numerot_07();
console.log(
  `Hinta 2 desimaalilla: ${hinta.desimalTwo} \n Hinta ilman desimaaleja: ${hinta.desimalZero}`
);

console.log("Hinta kahdella desimaalilla: " + hinta.desimalTwo);
console.log("Hinta ilman desimaaleja: " + hinta.desimalZero);

// numerot_08.js

function numerot_08() {
  let num1 = "10";
  let num2 = "notANumber";

  let tulos1 = parseFloat(num1);
  let tulos2 = parseFloat(num2);

  return tulos1 + tulos2;
}

console.log(numerot_08());

// numerot_09.js

function numerot_09() {
  let userInput = "25.75 omenaa";
  let numero = parseFloat(userInput);
  let desimaali = numero.toFixed(1);

  return desimaali;
}

console.log(numerot_09());

// numerot_10.js

function numerot_10() {
  let num = 5.67;
  let num1 = Math.round(num);
  let num2 = Math.floor(num);
  let num3 = Math.ceil(num);

  return {
    num1: num1,
    num2: num2,
    num3: num3,
  };
}

let vastaus = numerot_10();

console.log("Pyöristettynä lähimpään kokonaislukuun: " + vastaus.num1);
console.log("Pyöristettynä alaspäin lähimpään kokonaislukuun: " + vastaus.num2);
console.log("Pyöristettynä ylöspäin lähimpään kokonaislukuun: " + vastaus.num3);

// numerot_11.js

function numerot_11() {
  let numRandom = Math.random(1);
  let numMultiply = numRandom * 10;
  let numRound = Math.round(numMultiply);

  return numRound;
}
let vastaus2 = numerot_11();

console.log("Arvottu lukusi on " + vastaus2);

// numerot_12.js

function numerot_12() {
  let a = 12;
  let b = 7;
  let c = 20;
  let maxNum = Math.max(a, b, c);
  let minNum = Math.min(a, b, c);

  return {
    maxNum: maxNum,
    minNum: minNum,
  };
}

let vastaus3 = numerot_12();
console.log("The biggest number out of these three is: " + vastaus3.maxNum);
console.log("The smallest number out of these three is: " + vastaus3.minNum);

// merkkijonot_01.js

function merkkijonot_01() {
  let etunimi = "Aaro";
  let sukunimi = "Tiitinen";
  let ikä = `${age}`;

  return {
    etunimi: etunimi,
    sukunimi: sukunimi,
    ikä: ikä,
  };
}

console.log(
  `${merkkijonot_01().etunimi} ${merkkijonot_01().sukunimi} ${
    merkkijonot_01().ikä
  }`
);

// merkkijonot_02.js

function merkkijonot_02() {
  let kieli = "Javascript";
  let lause = `I am learning ${kieli}`;

  return lause;
}

console.log(merkkijonot_02());

// merkkijonot_03.js

function merkkijonot_03() {
  let multiLine = `This is line one.
 This is line two.
 This is line three.`;

  return multiLine;
}

console.log(merkkijonot_03());

// merkkijonot_04.js

function merkkijonot_04() {
  let text = "Hello World!";
  let textLength = text.length;

  return textLength;
}

console.log(`The length of the text is ${merkkijonot_04()}`);

// merkkijonot_05.js

function merkkijonot_05() {
  let word = "Javascript";

  return word;
}

console.log(`The first character is ${merkkijonot_05()[0]}`);
console.log(`The last character is ${merkkijonot_05()[9]}`);

// merkkijonot_06.js

function merkkijonot_06() {
  let num1 = 7;
  let num2 = 5;
  let num3 = `The sum of ${num1} and ${num2} is ${num1 + num2}`;

  return num3;
}

console.log(merkkijonot_06());

// merkkijonot_07.js

function merkkijonot_07() {
  let greeting = "Moro maailmalle!";
  let greetingBig = greeting.toUpperCase();
  let greetingSmall = greeting.toLowerCase();

  return {
    greetingBig: greetingBig,
    greetingSmall: greetingSmall,
  };
}

console.log(`${merkkijonot_07().greetingBig}
  ${merkkijonot_07().greetingSmall}`);

// merkkijonot_08.js

function merkkijonot_08() {
  let sentence = "Learning Javascript is fun!";
  let word = sentence.substring(9, 19);

  return word;
}

console.log("Extracted word: " + merkkijonot_08());

// merkkijonot_09.js

function merkkijonot_09() {
  let messyString = " Clean me up! ";
  let trimmedString = messyString.trim(0, 13);

  return trimmedString;
}

console.log("Cleaned string: " + merkkijonot_09());

// merkkijonot_10.js

function merkkijonot_10() {
  let phrase = "JavaScript is versatile and powerful.";
  let word2 = phrase.includes("powerful");

  return word2;
}

console.log(`Does the phrase include the word "powerful"? ${merkkijonot_10()}`);

// merkkijonot_11.js

function merkkijonot_11() {
  let longText = "The quick brown fox jumps over the lazy dog.";
  let sliceText = longText.slice(4, 19);

  return sliceText;
}

console.log("Sliced text: " + merkkijonot_11());

// merkkijonot_12.js

function merkkijonot_12() {
  let desc = " JavaScript is Fun and powerful! ";
  let trimmed = desc.trim();
  let small = trimmed.toLowerCase();
  let word1 = small.includes("fun");
  let desc2 = small.replace("powerful", "amazing");

  return {
    trimmed: trimmed,
    small: small,
    word1: word1,
    desc2: desc2,
  };
}

console.log("Final description: " + merkkijonot_12().desc2);
console.log(`Does it include the word fun? ${merkkijonot_12().word1}.`);

// funktiot_01.js

function add(a, b) {
  let sum = a + b;
  return sum;
}

console.log(add(5, 10));
console.log(add(20, 30));
console.log(add(100, 200));

// funktiot_02.js

function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(9));
console.log(isEven(10));

let isEven2 = (num) => num % 2 === 0;
let result = isEven2(9, 10);

console.log(isEven(9));
console.log(isEven(10));

function isEven3(num) {
  return num % 2 === 0;
}

console.log(isEven3(9));
console.log(isEven3(10));
// funktiot_03.js

function getLength(str) {
  let length = str.length;
  return length;
}
console.log(getLength("JavaScript"));

// funktiot_04.js

function capitalize(str) {
  let word = str[0].toUpperCase();
  let word1 = str.slice(1).toLowerCase();
  return word + word1;
}

console.log(capitalize("javascript"));

// funktiot_05.js

function generateRandomNumber(min, max) {
  let randomNumber = Math.random(min, max);
  let finalNumber = Math.round(randomNumber * 100);
  let finalNumber1 = Math.round(finalNumber);
  console.log(
    `Your random number between ${min} and ${max} is: ${finalNumber1}`
  );
}

console.log(generateRandomNumber(1, 100));

// funktiot_06.js
function replaceWord(sentence, oldWord, newWord) {
  return sentence.replace(oldWord, newWord);
}

console.log(replaceWord("I like apples.", "apples", "bananas"));

function randomWord(sentence, word1, fruits) {
  let fruit = fruits[Math.floor(Math.random() * fruits.length)];
  return sentence.replace(word1, fruit);
}

console.log(
  randomWord("I like apples.", "apples", [
    "apples",
    "bananas",
    "oranges",
    "mangoes",
    "pomegranates",
    "kiwis",
  ])
);
//random testi
let multiply = (a, b) => {
  return a * b;
};

console.log(multiply(3, 4));
//random testi

// funktiot_07.js

function containsWord(sentence, word) {
  return sentence.includes(word);
}

console.log(containsWord("Tykkään javascriptistä, se on hauskaa", "hauskaa"));

// funktiot_08.js
function roundNumber(num, precision) {
  return num.toFixed(precision);
}

console.log(roundNumber(18.425352, 2));

// funktiot_09.js
let findMax = (a, b, c) => {
  return Math.max(a, b, c);
};

console.log(findMax(6, 2, 69));

// funktiot_10.js
function cleanAndTransform(str) {
  let cleanStr = str.trim();
  let smallStr = cleanStr.toLowerCase();
  let changeStr = smallStr.replace("tehokas", "mahtava");
  return changeStr;
}

console.log(cleanAndTransform("  Javascript on tehokas kieli!  "));

//ehtolauseet_01.js

function checkAdult(age) {
  if (age >= 18) {
    console.log("Olet aikuinen");
  } else {
    console.log("Et ole aikuinen");
  }
}

checkAdult(13);

// ehtolauseet_02.js
function checkForFox(hasFox) {
  if (hasFox === true) {
    console.log("Sinulla on lemmikkikettu!");
  } else {
    console.log("Ei kettua havaittu..");
  }
}

checkForFox(true);
checkForFox(false);

// ehtolauseet_03.js

function getGrade(score) {
  if (score >= 90) {
    console.log("Kiitettävä");
  } else if (score >= 70) {
    console.log("Hyvä");
  } else if (score >= 50) {
    console.log("Tyydyttävä");
  } else if (score <= 50) {
    console.log("Hylätty");
  }
}
getGrade(95);
getGrade(75);
getGrade(55);
getGrade(45);

// ehtolauseet_04.js
function canVote(age) {
  if (age >= 18) {
    console.log("Voit äänestää");
  } else {
    console.log("Et voi äänestää");
  }
}

canVote(20);
canVote(16);

// ehtolauseet_05.js

function checkAnimal(animalType) {
  let animal =
    animalType === "fox" ? "Onko ketut kivoja eläimiä?" : "Söpö lemmikki!";
  return animal;
}

console.log(checkAnimal("fox"));
console.log(checkAnimal("dog"));

// ehtolauseet_06.js
function onParillinen(luku) {
  if (luku % 2 === 0) {
    console.log("Luku on parillinen");
  } else {
    console.log("Luku on pariton");
  }
}

onParillinen(89);
onParillinen(88);
onParillinen(99);
onParillinen(100);

// ehtolauseet_07.js

function animalDesc(favoriteAnimal) {
  if (favoriteAnimal === "dog") {
    console.log("Koirat ovat fiksuja eläimiä");
  } else if (favoriteAnimal === "cat") {
    console.log("Kissat viihtyvät yleensä omissa oloissaan");
  } else if (favoriteAnimal === "turtle") {
    console.log("Kilpikonnat ovat hitaita");
  } else if (favoriteAnimal === "horse") {
    console.log("Hevosia käytetään ratsastamiseen ja ennen kuljetukseen");
  }
}

animalDesc("dog");
animalDesc("cat");
animalDesc("turtle");
animalDesc("horse");

// ehtolauseet_08.js

function canEat(isHungry, hasFood) {
  if (isHungry && hasFood) {
    console.log("Syömään");
  } else {
    console.log("Sinun täytyy löytää ruokaa");
  }
}

canEat(true, true);
canEat(false, true);
canEat(true, false);
canEat(false, false);

// ehtolauseet_09.js
function canEnterEvent(age, hasTicket, hasId, hasBeen) {
  if (age >= 18 && hasTicket && hasId && hasBeen <= 2) {
    console.log("Pääset sisään tapahtumaan");
  } else {
    console.log("Et pääse sisään tapahtumaan");
  }
}

canEnterEvent(20, true, true, 1);
canEnterEvent(17, true, true, 1);

// ehtolauseet_10.js

function findFox(hasFox, foxName) {
  if (hasFox && foxName === "Aaro") {
    console.log("Aaro-kettu on täällä!");
  } else {
    console.log("Ei kettuja paikalla");
  }
}

findFox(true, "Aaro");
findFox(false, "Aaro");

let hasDog = true;
let dogName = "Viola";
let findDog =
  hasDog && dogName === "Viola" ? "Viola on täällä!" : "Ei koiria paikalla";
console.log(findDog);

function findCat(hasCat, catName) {
  let findCat2 =
    hasCat && catName === "Mau" ? "Mau on täällä!" : "Ei kissoja paikalla";
  console.log(findCat2);
}

findCat(true, "Mau");
findCat(false, "Mau");

// ehtolauseet_11.js

function getDayName(day) {
  switch (day) {
    case 1:
      console.log("Maanantai");
      break;
    case 2:
      console.log("Tiistai");
      break;
    case 3:
      console.log("Keskiviikko");
      break;
    case 4:
      console.log("Torstai");
      break;
    case 5:
      console.log("Perjantai");
      break;
    case 6:
      console.log("Lauantai");
      break;
    case 7:
      console.log("Sunnuntai");
      break;
    default:
      console.log("Ei kelvollinen päivä");
  }
}

getDayName(6);
getDayName(3);
getDayName(8);
getDayName(1);

// ehtolauseet_12.js

function checkFoxLover(age, likesFoxes) {
  if (age >= 18 && likesFoxes) {
    console.log("Olet aikuinen ja tykkäät ketuista");
  } else {
    console.log("Et ole aikuinen tai et tykkää ketuista");
  }
}

checkFoxLover(20, true);
checkFoxLover(16, false);
checkFoxLover(25, false);

// ehtolauseet_13.js
function planAdventure(isWeekend, isSunny, likesFoxes) {
  if (isWeekend && isSunny && likesFoxes) {
    console.log("Täydellinen päivä kettuseikkailulle!");
  } else if (isWeekend || isSunny) {
    console.log("On hyvä päivä, mutta ei täydellinen");
  } else {
    console.log("Mennään ulkoilemaan jokin toinen päivä");
  }
}

planAdventure(true, true, true);
planAdventure(false, true, true);
planAdventure(true, false, false);
planAdventure(false, false, false);
planAdventure(true, false, true);

// ehtolauseet_14.js

function pekkaPouta(isRaining) {
  let weather = isRaining
    ? "Ei kannata lähteä ulos"
    : "Ehdottomasti ulos vain!";
  console.log(weather);
}
pekkaPouta(true);
pekkaPouta(false);

// ehtolauseet_bonus.js
