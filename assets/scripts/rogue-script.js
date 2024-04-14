const scene = {
    preload: function () {
        //this.load.bitmapFont("arcade", "/assets/font/arcade.png", "/assets/font/arcade.xml");
        this.load.spritesheet(
            'tiles',
            '/assets/graphics/colored.png',
            {
                frameWidth: 16,
                frameHeight: 16,
                spacing: 1
            }
        )
    },
    create: function () {

        let level = [
            [1,1,1,1,1,1,1,1,1,1],
            [1,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,1],
            [1,1,1,1,1,1,1,1,1,1],
        ]

        const wall = 554
        const floor = 0
        level = level.map(r => r.map(t => t == 1 ? wall : floor))

        //draw the tilemap
        const tileSize = 16
        const config = {
            data: level,
            tileWidth: tileSize,
            tileHeight: tileSize,
        }
        const map = this.make.tilemap(config);
        const tileset = map.addTilesetImage('tiles', 'tiles', tileSize, tileSize, 0, 1)

        const ground = map.createStaticLayer(0, tileset, 0, 0)


        //this.cursors = this.input.keyboard.createCursorKeys();
    },

    update: function() {
        if(this.cursors.left.isDown){
            this.helloText.x -= 10;
        }
        if(this.cursors.right.isDown){
            this.helloText.x += 10;
        }
        if(this.cursors.up.isDown){
            this.helloText.y -= 10;
        }
        if(this.cursors.down.isDown){
            this.helloText.y += 10;
        }
    }
}


const config = {
    type: Phaser.AUTO,
    width: 80 * 16,
    height: 50 * 16,
    backgroundColor: "#016",
    parent: "game",
    pixelArt: true,
    zoom: 2,
    scene: scene,
    physics: {
        default: "arcade",
        arcade: {
            gravity: {y:0}
        }
    }
};

const game = new Phaser.Game(config);