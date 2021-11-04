namespace Constants {
    export const MAIN_MENU_SCENE_NAME = 'MainMenuScene';
    export const LIGHT_TEST_SCENE_NAME = 'LightTestScene';

    export const GAME_CONFIG = {
        type: Phaser.WEBGL,
        width: Global.SCREEN_WIDTH,
        height: Global.SCREEN_HEIGHT,
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