let statoA = 0;
let statoB = 0;

const btnA = document.getElementById("btnA");
const btnB = document.getElementById("btnB");
const opSelect = document.getElementById("operation");
const inputBContainer = document.getElementById("inputB-container");
const logicImage = document.getElementById("logicImage");

// Cambia stato ON/OFF
function toggle(input) {
  if (input === "A") {
    statoA = statoA === 0 ? 1 : 0;
    aggiornaBottone(btnA, statoA);
  } else if (input === "B") {
    statoB = statoB === 0 ? 1 : 0;
    aggiornaBottone(btnB, statoB);
  }

  calcola();
}

// Cambia stile e testo del bottone
function aggiornaBottone(btn, stato) {
  btn.textContent = stato === 1 ? "ON" : "OFF";
  btn.className = `toggle ${stato === 1 ? "on" : "off"}`;
}

// Cambia immagine in base all'operazione
function aggiornaImmagine(op) {
  switch (op) {
    case "AND":
      logicImage.src = "https://openclipart.org/image/2000px/202692";
      break;
    case "OR":
      logicImage.src = "https://openclipart.org/image/800px/202696";
      break;
    case "NOT":
      logicImage.src = "https://openclipart.org/image/800px/202699";
      break;
  }
}

// Calcolo logico
function calcola() {
  const op = opSelect.value;
  let result;

  switch (op) {
    case "AND":
      result = statoA & statoB;
      break;
    case "OR":
      result = statoA | statoB;
      break;
    case "NOT":
      result = statoA ? 0 : 1;
      break;
  }

  // Mostra risultato numerico
  document.getElementById("result").textContent = result;

  // Cambia colore luce
  const light = document.querySelector(".light");
  if (result === 1) {
    light.classList.add("on");
  } else {
    light.classList.remove("on");
  }
}

// Cambio operazione
opSelect.addEventListener("change", () => {
  const op = opSelect.value;

  // Nasconde B se è NOT
  inputBContainer.style.display = op === "NOT" ? "none" : "block";

  aggiornaImmagine(op);
  calcola();
});

// Avvio iniziale
if (opSelect.value === "NOT") {
  inputBContainer.style.display = "none";
}
aggiornaImmagine(opSelect.value);
calcola();
