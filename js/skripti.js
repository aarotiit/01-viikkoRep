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
