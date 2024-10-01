const selectionnerBtn = document.querySelector("#btn");

const btnDemarer = document.createElement("button");
const btnPause = document.createElement("button");

btnDemarer.textContent = "Start";
btnDemarer.className = "btnStart";

btnPause.textContent = "Stop";
btnPause.className = "btnStop";

selectionnerBtn.append(btnDemarer, btnPause);

const test = document.querySelector(".btnStart");

test.addEventListener("click", start);

function start() {
  console.log(test);
}

// setInterval(maFonction, 1000, "Parametre 1");

// function maFonction(a, b) {
//   console.log(a);
//   console.log(b);
// }

// const intervalID = setInterval(myCallback, 500, "Parameter 1", "Parameter 2");

// function myCallback(a, b) {
//   // Your code here
//   // Parameters are purely optional.
//   console.log(a);
//   console.log(b);
// }
