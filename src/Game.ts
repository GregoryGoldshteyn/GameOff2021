namespace Game {
    export class Game extends Phaser.Game {
        constructor() {
            // Init using config
            super(
                Constants.GAME_CONFIG
            );

            //this.scene.start(Constants.TUTORIAL_SCENE_NAME);
            this.scene.start(Constants.LIGHT_TEST_SCENE_NAME);
        }
    }
}