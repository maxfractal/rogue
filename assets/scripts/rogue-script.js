const scene = {
    preload: function () {
        this.load.bitmapFont("arcade", "/assets/font/arcade.png", "/assets/font/arcade.xml");
    },
    create: function () {
        this.add.bitmapText(400,300, "arcade", "Hello Maxfractal").setOrigin(0.5);
    }
}


const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: "#016",
    parent: "game",
    pixelArt: true,
    scene: scene,
    physics: {
        default: "arcade",
        arcade: {
            gravity: {y:0}
        }
    }
};

const game = new Phaser.Game(config);