async function predict(mode) {

  const resultBox = document.getElementById("result");
  resultBox.innerHTML = "Analyse en cours...";

  // Charger les données réelles
  let data = await fetch("data.json").then(r => r.json());

  let list = mode === "classic" ? data.classic : data.fourfour;

  // Choisir un match au hasard parmi les données réelles
  let pick = list[Math.floor(Math.random() * list.length)];

  resultBox.innerHTML = `
    <strong>Match :</strong> ${pick.team1} vs ${pick.team2}<br>
    <strong>Score :</strong> ${pick.score}<br>
    <strong>Analyse :</strong> ${pick.comment}
  `;
}
