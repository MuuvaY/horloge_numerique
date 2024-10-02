const selectionnerBtn = document.querySelector("#btn");

const btnDemarer = document.createElement("button");
const btnPause = document.createElement("button");

btnDemarer.textContent = "Start";
btnDemarer.className = "btnStart";

btnPause.textContent = "Stop";
btnPause.className = "btnStop";

selectionnerBtn.append(btnDemarer, btnPause);

let count = 0;
let minutes = 0;
let heures = 0;
// console.log(count);

const startButton = document.querySelector(".btnStart");

startButton.addEventListener("click", start);

function start() {
  // console.log(startButton);
  intervalID = setInterval(test, 1);

  function test() {
    if (count === 59) {
      count = 0;
      minutes++;
    } else {
      count++;
    }

    if (minutes === 59) {
      minutes = 0;
      heures++;
    }

    const displayCompteur = document.querySelector(".compteur");
    displayCompteur.innerHTML = `${heures}:${minutes},${count}`;
    // console.log(count);
  }
}

const stopButton = document.querySelector(".btnStop");

stopButton.addEventListener("click", stop);

function stop() {
  // console.log(stopButton);
  clearInterval(intervalID);
}
