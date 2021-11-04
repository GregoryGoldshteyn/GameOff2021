namespace Constants {
    export const MAIN_MENU_SCENE_NAME = 'MainMenuScene';
    export const LIGHT_TEST_SCENE_NAME = 'LightTestScene';

    export const GAME_CONFIG = {
        type: Phaser.WEBGL,
        width: 960,
        height: 540,
        parent: 'game-div',
        pixelArt: true,
        dom: {
            createContainer: true
        },
        fps: {
            target: 30,
            forceSetTimeOut: true
        },
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 0 },
                debug: false,
                debugShowBody: true,
                debugShowStaticBody: true
            }
        },
        scene: [GameScene.MainMenu, GameScene.LightTesting]
    };
}