class EndScene extends Phaser.Scene {
    constructor() {
        super({ key: 'EndScene' });
    }
    create() {
        let { width, height } = this.sys.game.canvas;
        const title = this.add.text(80, 80, 'PHAS3R DEMO',
            { font: '50px Arial', fill: '#ffffff' });

        const subtitle = this.add.text(80, height - 80, 'Press W to play Again',
            { font: '50px Arial', fill: '#ffffff' });

        this.input.keyboard.on('keydown_W', this.proceedToGame, this);
    }

    proceedToGame() {
        this.scene.start('GameScene');
    }

}
export default EndScene;