class PreloadScene extends Phaser.Scene {
    constructor() {
        super({ key: 'PreloadScene' });
    }
    preload() {
        // runs after init and before create, here you can preloaad all your assets
        // to store them on memory
        console.log('preload started');

        this.add.text(80, 150, 'Loading...', { font: '30px Arial', fill: '#ffffff' });
        this.load.image('player', 'assets/images/player.png');
        this.load.image('target', 'assets/images/target.png');
    }

    create() {
        this.scene.start('MainMenuScene');
    }

}
export default PreloadScene;