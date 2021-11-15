///<reference path = "SceneBase.ts" />
namespace GameScene {
    export class DiceTesting extends SceneBase {
        constructor(sceneName: string) {
            super(sceneName);
        }

        preload() {
            // Load sprites
            this.load.setPath('assets/sprites/');
            this.load.spritesheet('D7', 'D7.png', {frameWidth: 16});
            this.load.image('UIBackground', 'UIBack.png');
            this.load.image('Town', 'Town.png');
            this.load.image('5pxFont', 'Font.png',)
        }

        create() {
            // Add font to cache
            //@ts-ignore
            this.cache.bitmapFont.add('5pxFont', Phaser.GameObjects.RetroFont.Parse(this, Constants.FONT_CONFIG))
            this.cameras.main.removeBounds();

            var background = this.add.image(Constants.SCREEN_MIDDLE.X, Constants.SCREEN_MIDDLE.Y, 'UIBackground').setScale(4);
            var town = this.add.image(246, 244, 'Town').setScale(4);

            //var testDie = this.add.sprite(Constants.SCREEN_WIDTH / 2, Constants.SCREEN_HEIGHT / 2, 'D7').setScale(4).setInteractive();

            //var testDie2 = this.add.sprite(Constants.SCREEN_WIDTH / 2, Constants.SCREEN_HEIGHT / 2, 'D7').setScale(4).setInteractive();
            var testDie = new Util.Die(this, Constants.SCREEN_MIDDLE.X, Constants.SCREEN_MIDDLE.Y).setScale(4);

            var testText = this.add.bitmapText(248,490,"5pxFont","THE QUICK BROWN DO");

            var terminal = this.add.existing(new Util.TextTerminal(this, testText));

            testText.setOrigin(0.5, 0.5).setScale(4);

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