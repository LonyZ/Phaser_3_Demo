
class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
    }

    create() {
        this.createGameAssets();
        this.mapKeys();
    }

    createGameAssets() {
        let { width, height } = this.sys.game.canvas;

        const target = this.physics.add.sprite(0, 0, 'target');
        target.displayWidth = 80;
        target.displayHeight = 80;
        target.x = width - target.displayWidth;
        target.y = height - target.displayHeight;

        const player = this.physics.add.sprite(0, 0, 'player');
        player.setCollideWorldBounds(true);
        player.displayWidth = 40;
        player.displayHeight = 40;
        player.x += player.displayWidth;
        player.y += player.displayHeight;

        this.target = target;
        this.player = player;

        this.physics.add.overlap(this.player, this.target, this.endGame, null, this);
    }

    mapKeys() {
        this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    endGame() {
        this.scene.start('EndScene');
    }

    update() {
        this.player.setVelocity(0);

        if (this.cursors.left.isDown || this.keyA.isDown) {
            this.player.setVelocityX(-160);
        }
        else if (this.cursors.right.isDown || this.keyD.isDown) {
            this.player.setVelocityX(160);
        }

        if (this.cursors.up.isDown || this.keyW.isDown) {
            this.player.setVelocityY(-160);
        }
        else if (this.cursors.down.isDown || this.keyS.isDown) {
            this.player.setVelocityY(160);
        }
    }

}
export default GameScene;