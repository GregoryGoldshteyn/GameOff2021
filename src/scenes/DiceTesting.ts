///<reference path = "SceneBase.ts" />
namespace GameScene {
    export class DiceTesting extends SceneBase {
        constructor(sceneName: string) {
            super(sceneName);
        }

        preload() {
            this.load.spritesheet('D7', 'assets/sprites/D7.png', {frameWidth: 16});
        }

        create() {
            this.cameras.main.removeBounds();

            //var testDie = this.add.sprite(Constants.SCREEN_WIDTH / 2, Constants.SCREEN_HEIGHT / 2, 'D7').setScale(4).setInteractive();

            //var testDie2 = this.add.sprite(Constants.SCREEN_WIDTH / 2, Constants.SCREEN_HEIGHT / 2, 'D7').setScale(4).setInteractive();
            var testDie = new Util.Die(this, Constants.SCREEN_WIDTH / 2, Constants.SCREEN_HEIGHT / 2).setScale(4);

            console.log(testDie);

            testDie.setInteractive();
            this.input.setDraggable(testDie);

            this.add.existing(testDie);

            var dice = this.add.group({
                name: 'dice',
                runChildUpdate: true
            });

            dice.add(testDie);

            this.input.on('drag', function( pointer, gameObject, dragX, dragY){
                gameObject.x = dragX;
                gameObject.y = dragY;
            });
        }

        update(time, delta) {
            //console.log(Math.log(time));
        }
    }
}