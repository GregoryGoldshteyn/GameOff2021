///<reference path = "SceneBase.ts" />
namespace GameScene {
    export class LightTesting extends SceneBase {
        constructor(sceneName: string) {
            super(sceneName);
        }

        testLight;

        preload() {
            this.load.image('testpic', ['assets/sprites/testpic.png', 'assets/sprites/testpic_n.png'])
        }

        create() {
            this.cameras.main.removeBounds();
            var testpic = this.add.sprite(Constants.SCREEN_WIDTH / 2, Constants.SCREEN_HEIGHT / 2, 'testpic').setPipeline('Light2D');

            //@ts-ignore
            this.renderer.pipelines.addPostPipeline('PixelPalettePipeline', Pipelines.PixelatedFX);
            
            this.lights.enable();
            this.lights.setAmbientColor(0x555555);

            this.testLight = this.lights.addLight(Constants.SCREEN_WIDTH / 2, Constants.SCREEN_HEIGHT / 2, 200, 0xFFFFFF, 1);

            this.cameras.main.setPostPipeline('PixelPalettePipeline');
        }

        update () {
            this.testLight.radius += 1;
            this.testLight.intensity += 0.01;
        }
    }
}