class BootScene extends Phaser.Scene {
    constructor() {
        super({ key: 'BootScene' });
    }
    preload() {
        console.log('TEST');
    }

    create(data) {
        this.scene.start('PreloadScene');
    }
}
export default BootScene;