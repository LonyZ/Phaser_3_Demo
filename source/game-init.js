import BootScene from "./states/boot-scene.js";
import PreloadScene from "./states/preload-scene.js";
import MainMenuScene from "./states/main-menu-scene.js";
import GameScene from "./states/game-scene.js";
import EndScene from "./states/end-scene.js";

const config = {
    type: Phaser.AUTO,
    parent: 'game-div',
    width: 800,
    height: 600,
    title: 'My Game',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: [
        BootScene,
        PreloadScene,
        MainMenuScene,
        GameScene,
        EndScene
    ]
}
export default new Phaser.Game(config);