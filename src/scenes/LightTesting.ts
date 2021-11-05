///<reference path = "SceneBase.ts" />
namespace GameScene {
    export class LightTesting extends SceneBase {
        constructor(sceneName: string) {
            super(sceneName);
        }

        preload() {
            this.load.image('testpic', 'assets/sprites/testpic.png')
        }

        create() {
            const testpic = this.add.image(Constants.SCREEN_WIDTH / 2, Constants.SCREEN_HEIGHT / 2, 'testpic'); 
            this.cameras.main.setPostPipeline(Pipelines.PixelatedFX);
        }

        update () {

        }
    }
}