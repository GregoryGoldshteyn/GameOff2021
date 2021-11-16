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
            this.load.image('5pxFont', 'Font.png',);
            this.load.image('Event', "Event.png");
        }

        create() {
            // Add font to cache
            //@ts-ignore
            this.cache.bitmapFont.add('5pxFont', Phaser.GameObjects.RetroFont.Parse(this, Constants.FONT_CONFIG))
            this.cameras.main.removeBounds();

            var background = this.add.image(Constants.SCREEN_MIDDLE.X, Constants.SCREEN_MIDDLE.Y, 'UIBackground').setScale(4);
            var town = this.add.image(246, 244, 'Town').setScale(4);
            var event = this.add.image(0, 0, 'Event').setScale(4);

            var eventContainer = this.add.container(246, 244);

            eventContainer.add(event);

            //var testDie = this.add.sprite(Constants.SCREEN_WIDTH / 2, Constants.SCREEN_HEIGHT / 2, 'D7').setScale(4).setInteractive();

            //var testDie2 = this.add.sprite(Constants.SCREEN_WIDTH / 2, Constants.SCREEN_HEIGHT / 2, 'D7').setScale(4).setInteractive();
            var testDie = new Util.Die(this, Constants.SCREEN_MIDDLE.X, Constants.SCREEN_MIDDLE.Y).setScale(4);

            var eventTitle = this.add.bitmapText(44, 48, "5pxFont", "EVENT").setScale(4).setMaxWidth(420).setTint(Constants.COLORS.ORANGE.color32);
            var eventDescription = this.add.bitmapText(44, 80, "5pxFont", "SOME EXAMPLE TEXT").setScale(2).setMaxWidth(420).setTint(Constants.COLORS.WHITE.color32);

            var testText = this.add.bitmapText(248, 490, "5pxFont", "THE QUICK BROWN DO").setTint(Constants.COLORS.WHITE.color32);

            var terminal = this.add.existing(new UI.TextTerminal(this, testText));

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

            this.input.on('dragend', function (pointer, gameObject, dragX, dragY) {
                var intersects = Phaser.Geom.Rectangle.Overlaps(
                    gameObject.getBounds(),
                    event.getBounds()
                );

                console.log(intersects);
            });
        }

        update(time, delta) {
            //console.log(Math.log(time));
        }
    }
}