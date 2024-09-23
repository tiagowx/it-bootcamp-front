export class Character {
    gameController;
    id;
    name;
    hp;
    mp;
    atk;
    def;
    charClass = "guerreiro" | "mago" | "arqueiro";

    constructor(name, charClass, gameController) {
        this.name = name;
        this.charClass = charClass;
        this.gameController = gameController;
        switch (this.charClass) {
            case "guerreiro": {
                this.class = "guerreiro";
                this.hp = 100 * 3;
                this.mp = 100 * 1;
                this.atk = 5 * 3;
                this.def = 5 * 3;
            } break;
            case "mago": {
                this.class = "mago";
                this.hp = 100 * 2;
                this.mp = 100 * 3;
                this.atk = 7 * 3;
                this.def = 3 * 2;
            } break;
            case "arqueiro": {
                this.class = "arqueiro";
                this.hp = 100 * 2;
                this.mp = 100 * 2;
                this.atk = 6 * 4;
                this.def = 4 * 2;
            } break;
        }
    }

    receiveDamage = (atk) => {
        let damage = atk - this.def;
        this.hp -= damage;

        if (this.hp < 0) this.hp = 0;

        this.updateRender();

    }

    isAlive = function () { };

    updateRender = function () { };

}