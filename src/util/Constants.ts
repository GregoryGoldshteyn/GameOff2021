namespace Constants {
    export const MAIN_MENU_SCENE_NAME = 'MainMenuScene';
    export const LIGHT_TEST_SCENE_NAME = 'LightTestScene';

    export const SCREEN_WIDTH = 960;
    export const SCREEN_HEIGHT = 540;

    export const GAME_CONFIG = {
        type: Phaser.WEBGL,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
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
        scene: [GameScene.LightTesting],
        pipeline: {pipeline: Pipelines.PixelatedFX}
    };
}