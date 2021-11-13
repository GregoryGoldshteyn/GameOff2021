namespace Constants {
    export const MAIN_MENU_SCENE_NAME = 'MainMenuScene';
    export const LIGHT_TEST_SCENE_NAME = 'LightTestScene';
    export const DICE_TEST_SCENE_NAME = 'DiceTestScene';

    export const SCREEN_WIDTH = 960;
    export const SCREEN_HEIGHT = 540;

    export const COLORS = {
        DARK: new Phaser.Display.Color(27, 3, 38),
        RED: new Phaser.Display.Color(122, 28, 75),
        ORANGE: new Phaser.Display.Color(186, 80, 68),
        WHITE: new Phaser.Display.Color(239, 249, 214),
    }

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
                debugShowBody: false,
                debugShowStaticBody: false
            }
        },
        scene: [GameScene.DiceTesting]
    };
}