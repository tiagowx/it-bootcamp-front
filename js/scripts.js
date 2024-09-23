import { GameController } from "./gameController.js";

let gameController = new GameController();

document.getElementById("heroes").innerHTML = `
<h3>Heróis</h3>
    <br />
    ${gameController.heroes.map((hero) => hero.render).join("")}
`;
document.getElementById("match-info").innerHTML = ` 
${gameController.render}
`;

document.getElementById("enemies").innerHTML = `
<h3> Inimigos</h3>
<br />
${gameController.enemies.map((enemy) => enemy.render).join("")} 
`;


gameController.updateRenders();