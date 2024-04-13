const scene = {
    preload: function () {
        this.load.bitmapFont("arcade", "/assets/font/arcade.png", "/assets/font/arcade.xml");
    },
    create: function () {
        this.helloText = this.add.bitmapText(400,300, "arcade", "Hello Maxfractal").setOrigin(0.5);
        this.helloXris = this.add.bitmapText(400,300, "arcade", " xris fractal").setOrigin(0.5);
    },
    update: function() {
        this.helloText.x += 10;
        this.helloXris.y += 10;

        if(this.helloText.x > 1000) {
            this.helloText.x = -200
        }

        if(this.helloXris.y > 630) {
            this.helloXris.y = -100
        }
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