import { Character } from "./characters.js";

export class Enemy extends Character {
    render = "";

    constructor(name, charClass, gameController) {
        super(name, charClass);
        this.gameController = gameController;
        this.id = this.gameController.enemies.length;
        this.render = `
        <div id="enemy-${this.id}" class="hero">
            <p><span>Nome:</span> ${this.name}</p>
            <p><span>HP:</span>  ${this.hp} | <span>MP:</span> ${this.mp} </p>
            <span>Ataque: ${this.atk} - Defesa: ${this.def} </span>
            <span>Classe: ${this.charClass}</span>
        </div>
`;

    }

    updateRender = function () {
        this.render = `
        <p><span>Nome:</span> ${this.name}</p>
        <p><span>HP:</span>  ${this.hp} | <span>MP:</span> ${this.mp} </p>
        <span>Ataque: ${this.atk} - Defesa: ${this.def} </span>
        <span>Classe: ${this.charClass}</span>
        `;
        document.getElementById(`enemy-${this.id}`).innerHTML = this.render;

        
    }

    isAlive = function() {
        if (this.hp > 0) return true;
    }


}