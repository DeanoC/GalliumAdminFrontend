import Phaser from "phaser";
import MainMenu from "./scenes/MainMenu";
import Characters from "./scenes/Characters";

class Boot extends Phaser.Scene {

    constructor() {
        super("Boot");
    }

    preload() {

        this.load.pack("pack", "assets/asset-pack.json");
    }

    create() {

       this.scene.start("MainMenu");
    }
}

const game = new Phaser.Game({
    width: 800,
    height: 1200,
    backgroundColor: "#2f2f2f",
    scale: {
        mode: Phaser.Scale.ScaleModes.FIT,
        autoCenter: Phaser.Scale.Center.CENTER_BOTH
    },
    scene: [Boot, MainMenu,Characters]
});

game.scene.start("Boot");


