import { Character } from "./characters.js";


export class Hero extends Character {


    render = "";

    constructor(name, charClass, gameController) {
        super(name, charClass);
        this.gameController = gameController;
        this.id = this.name;
        this.render = `
        <div id="hero-${this.id}" class="hero">
            <p><span>Nome:</span> ${this.name}</p>
            <p><span>HP:</span>  ${this.hp} | <span>MP:</span> ${this.mp} </p>
            <span>Ataque: ${this.atk} - Defesa: ${this.def} </span>
            <span>Classe: ${this.charClass}</span>
            <button id="${this.name}-attack" >Atacar</button>
        </div>
        `;
    }

    basicAttack() {
        if (this.gameController.enemies.length === 0)
            return;

        let random = Math.floor(Math.random() * this.gameController.enemies.length);
        let target = this.gameController.enemies[this.gameController.enemies.length > 2 ? random : 0];

        target.receiveDamage(this.atk);
        let damage = target.def - this.atk;


        if (!target.isAlive()) {
            this.gameController.enemies.splice(this.gameController.enemies.indexOf(target), 1);
        }

        document.getElementById("controller-messages").innerHTML = `<br/><p>${this.name} atacou ${target.name} e causou ${damage}</p>`


    }

    updateRender = function () {
        document.getElementById(`${this.name}-attack`).addEventListener('click', () => this.basicAttack());
        this.render = `
        <div id="hero-${this.id}" class="hero">
            <p><span>Nome:</span> ${this.name}</p>
            <p><span>HP:</span>  ${this.hp} | <span>MP:</span> ${this.mp} </p>
            <span>Ataque: ${this.atk} - Defesa: ${this.def} </span>
            <span>Classe: ${this.charClass}</span>
            <button id="${this.name}-attack" >Atacar</button>
        </div>
`;
    }

    isAlive = function () {
        if (this.hp > 0) return true;

        this.gameController.heroes.pop(this);
    }
}

