import { Enemy } from "./enemies.js";
import { Hero } from "./heroes.js";

export class GameController {
    turno = 0;
    heroes = [];
    enemies = [];
    messages = [];
    render = ``;

    constructor() {
        this.enemies.push(new Enemy("Slime", "mago", this));
        this.enemies.push(new Enemy("Slime", "mago", this));
        this.enemies.push(new Enemy("Slime", "mago", this));

        this.heroes.push(new Hero("Ashe", "arqueiro", this));
        this.heroes.push(new Hero("Garen", "guerreiro", this));
        this.heroes.push(new Hero("Ryze", "mago", this));

        this.render = `<h3>Informações de Batalha</h3>
        <div id="controller-messages">
        </div>
    `;
    };


    startBattle() {
        setTimeout(() => {
            this.turno++;
            this.heroes[0].basicAttack();
            this.enemies[0].basicAttack();
            this.renderController();
            this.checkWinners();
        }, 1000);
    }

    updateRenders = function () {
        this.enemies.forEach((enemy) => {
            enemy.updateRender()
            if (!enemy.isAlive()) {
                this.enemies.pop(enemy);
                console.log(this.enemies);
            }
        });
        this.heroes.forEach((hero) => hero.updateRender());

    }

    checkWinners() {
        if (this.heroes[0].hp <= 0) {
            console.log("Heroi perdeu!");
        } else if (this.enemies[0].hp <= 0) {
            console.log("Inimigo perdeu!");
        } else {
            this.startBattle();
        }
    }
}