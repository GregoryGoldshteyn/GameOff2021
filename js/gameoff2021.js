var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Game;
(function (Game_1) {
    var Game = /** @class */ (function (_super) {
        __extends(Game, _super);
        function Game() {
            var _this = 
            // Init using config
            _super.call(this, 
            //@ts-ignore
            Constants.GAME_CONFIG) || this;
            //this.scene.start(Constants.TUTORIAL_SCENE_NAME);
            _this.scene.start(Constants.DICE_TEST_SCENE_NAME);
            return _this;
        }
        return Game;
    }(Phaser.Game));
    Game_1.Game = Game;
})(Game || (Game = {}));
var Game;
(function (Game) {
    Game.game = null;
})(Game || (Game = {}));
function startGame() {
    var game = new Game.Game;
    Game.game = game;
}
window.onload = startGame;
var Pipelines;
(function (Pipelines) {
    var fragShader = "\n        precision mediump float;\n\n        uniform sampler2D uMainSampler;\n        uniform vec2 uResolution;\n\n        varying vec2 outTexCoord;\n        varying vec4 outTint;\n\n        vec4 colorToPalette(vec4 incolor){\n            float mindist = 10000.0;\n\n            vec4 colors[42];\n\n            colors[0] = vec4( 0.12941176470588237 , 0.09411764705882353 , 0.10588235294117647 , 1.0);\n            colors[1] = vec4( 0.23137254901960785 , 0.12549019607843137 , 0.15294117647058825 , 1.0);\n            colors[2] = vec4( 0.49019607843137253 , 0.2196078431372549 , 0.2 , 1.0);\n            colors[3] = vec4( 0.6705882352941176 , 0.3176470588235294 , 0.18823529411764706 , 1.0);\n            colors[4] = vec4( 0.8117647058823529 , 0.4588235294117647 , 0.16862745098039217 , 1.0);\n            colors[5] = vec4( 0.9411764705882353 , 0.7098039215686275 , 0.2549019607843137 , 1.0);\n            colors[6] = vec4( 1.0 , 0.9333333333333333 , 0.5137254901960784 , 1.0);\n            colors[7] = vec4( 0.7843137254901961 , 0.8313725490196079 , 0.36470588235294116 , 1.0);\n            colors[8] = vec4( 0.38823529411764707 , 0.6705882352941176 , 0.24705882352941178 , 1.0);\n            colors[9] = vec4( 0.23137254901960785 , 0.49019607843137253 , 0.30980392156862746 , 1.0);\n            colors[10] = vec4( 0.1843137254901961 , 0.3411764705882353 , 0.3254901960784314 , 1.0);\n            colors[11] = vec4( 0.1568627450980392 , 0.20784313725490197 , 0.25098039215686274 , 1.0);\n            colors[12] = vec4( 0.10588235294117647 , 0.12156862745098039 , 0.12941176470588237 , 1.0);\n            colors[13] = vec4( 0.16862745098039217 , 0.16862745098039217 , 0.27058823529411763 , 1.0);\n            colors[14] = vec4( 0.22745098039215686 , 0.24705882352941178 , 0.3686274509803922 , 1.0);\n            colors[15] = vec4( 0.2980392156862745 , 0.40784313725490196 , 0.5215686274509804 , 1.0);\n            colors[16] = vec4( 0.30980392156862746 , 0.6431372549019608 , 0.7215686274509804 , 1.0);\n            colors[17] = vec4( 0.5725490196078431 , 0.9098039215686274 , 0.7529411764705882 , 1.0);\n            colors[18] = vec4( 0.9607843137254902 , 1.0 , 0.9098039215686274 , 1.0);\n            colors[19] = vec4( 0.8745098039215686 , 0.8784313725490196 , 0.9098039215686274 , 1.0);\n            colors[20] = vec4( 0.6392156862745098 , 0.6549019607843137 , 0.7607843137254902 , 1.0);\n            colors[21] = vec4( 0.40784313725490196 , 0.43529411764705883 , 0.6 , 1.0);\n            colors[22] = vec4( 0.25098039215686274 , 0.28627450980392155 , 0.45098039215686275 , 1.0);\n            colors[23] = vec4( 0.17254901960784313 , 0.20784313725490197 , 0.30196078431372547 , 1.0);\n            colors[24] = vec4( 0.0784313725490196 , 0.09411764705882353 , 0.1803921568627451 , 1.0);\n            colors[25] = vec4( 0.29411764705882354 , 0.11372549019607843 , 0.3215686274509804 , 1.0);\n            colors[26] = vec4( 0.4117647058823529 , 0.1411764705882353 , 0.39215686274509803 , 1.0);\n            colors[27] = vec4( 0.611764705882353 , 0.16470588235294117 , 0.4392156862745098 , 1.0);\n            colors[28] = vec4( 0.8 , 0.1843137254901961 , 0.4823529411764706 , 1.0);\n            colors[29] = vec4( 1.0 , 0.3215686274509804 , 0.4666666666666667 , 1.0);\n            colors[30] = vec4( 1.0 , 0.7607843137254902 , 0.6313725490196078 , 1.0);\n            colors[31] = vec4( 1.0 , 0.5372549019607843 , 0.2 , 1.0);\n            colors[32] = vec4( 0.9019607843137255 , 0.27058823529411763 , 0.2235294117647059 , 1.0);\n            colors[33] = vec4( 0.6784313725490196 , 0.1843137254901961 , 0.27058823529411763 , 1.0);\n            colors[34] = vec4( 0.47058823529411764 , 0.11372549019607843 , 0.30980392156862746 , 1.0);\n            colors[35] = vec4( 0.30980392156862746 , 0.11372549019607843 , 0.2980392156862745 , 1.0);\n            colors[36] = vec4( 0.1607843137254902 , 0.11372549019607843 , 0.16862745098039217 , 1.0);\n            colors[37] = vec4( 0.23921568627450981 , 0.1607843137254902 , 0.21176470588235294 , 1.0);\n            colors[38] = vec4( 0.3215686274509804 , 0.2 , 0.24705882352941178 , 1.0);\n            colors[39] = vec4( 0.5607843137254902 , 0.30196078431372547 , 0.3411764705882353 , 1.0);\n            colors[40] = vec4( 0.7411764705882353 , 0.41568627450980394 , 0.3843137254901961 , 1.0);\n            colors[41] = vec4( 1.0 , 06.823529411764706 , 0.4392156862745098 , 1.0);\n\n            vec4 newColor;\n\n            for(int i = 0; i < 42; i += 1)\n            {\n                float dist = distance(incolor, colors[i]);\n                if(dist < mindist)\n                {\n                    newColor = colors[i];\n                    mindist = dist;\n                }\n            }\n\n            return newColor;\n        }\n\n        void main()\n        {\n            vec2 pixelSize = vec2(2.0, 2.0);\n            vec2 dimensions = vec2(960.0, 540.0);\n            vec2 size = dimensions.xy / pixelSize;\n            vec2 color = floor((outTexCoord * size)) / size + pixelSize/dimensions.xy * 0.5;\n            gl_FragColor = colorToPalette(texture2D(uMainSampler, color));\n        }\n    ";
    var PixelatedFX = /** @class */ (function (_super) {
        __extends(PixelatedFX, _super);
        function PixelatedFX(game) {
            return _super.call(this, {
                game: game,
                renderTarget: true,
                fragShader: fragShader,
                //@ts-ignore
                uniforms: [
                    'uProjectionMatrix',
                    'uMainSampler',
                    'uTime',
                    'uResolution'
                ]
            }) || this;
        }
        PixelatedFX.prototype.onBoot = function () {
            this.set2f('uResolution', this.renderer.width, this.renderer.height);
        };
        PixelatedFX.prototype.onPreRender = function () {
            this.set1f('uTime', this.game.loop.time / 1000);
        };
        return PixelatedFX;
    }(Phaser.Renderer.WebGL.Pipelines.PostFXPipeline));
    Pipelines.PixelatedFX = PixelatedFX;
})(Pipelines || (Pipelines = {}));
// Class which serves as base for all scenes
// Contains common methods and properties for all scenes
var GameScene;
(function (GameScene) {
    var SceneBase = /** @class */ (function (_super) {
        __extends(SceneBase, _super);
        function SceneBase(sceneTitle) {
            return _super.call(this, sceneTitle) || this;
        }
        Object.defineProperty(SceneBase.prototype, "gameWidth", {
            get: function () {
                return this.sys.game.config.width;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SceneBase.prototype, "gameHeight", {
            get: function () {
                return this.sys.game.config.height;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SceneBase.prototype, "optionMenuWidth", {
            get: function () {
                return this.gameWidth * 3 / 4;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SceneBase.prototype, "optionMenuHeight", {
            get: function () {
                return this.gameHeight * 3 / 4;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SceneBase.prototype, "keyChangeModalWidth", {
            get: function () {
                return this.gameWidth / 2;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SceneBase.prototype, "keyChangeModalHeight", {
            get: function () {
                return this.gameHeight / 2;
            },
            enumerable: false,
            configurable: true
        });
        return SceneBase;
    }(Phaser.Scene));
    GameScene.SceneBase = SceneBase;
})(GameScene || (GameScene = {}));
///<reference path = "SceneBase.ts" />
var GameScene;
(function (GameScene) {
    var DiceTesting = /** @class */ (function (_super) {
        __extends(DiceTesting, _super);
        function DiceTesting(sceneName) {
            return _super.call(this, sceneName) || this;
        }
        DiceTesting.prototype.preload = function () {
            // Load sprites
            this.load.setPath('assets/sprites/');
            this.load.spritesheet('D7', 'D7.png', { frameWidth: 16 });
            this.load.image('UIBackground', 'UIBack.png');
            this.load.image('Town', 'Town.png');
            this.load.image('5pxFont', 'Font.png');
            this.load.image('EventBody', "Event.png");
            // Load events + messages
            this.load.setPath('assets/json/');
            this.load.json("events", "events.json");
        };
        DiceTesting.prototype.create = function () {
            // Add font to cache
            //@ts-ignore
            this.cache.bitmapFont.add('5pxFont', Phaser.GameObjects.RetroFont.Parse(this, Constants.FONT_CONFIG));
            this.cameras.main.removeBounds();
            // Add the town
            var background = this.add.image(Constants.SCREEN_MIDDLE.X, Constants.SCREEN_MIDDLE.Y, 'UIBackground').setScale(4);
            var town = this.add.image(246, 244, 'Town').setScale(4);
            // Add the first die
            var testDie = new UI.Die(this, Constants.SCREEN_MIDDLE.X, Constants.SCREEN_MIDDLE.Y).setScale(4);
            // Add the news terminal
            var terminal = this.add.existing(new UI.TextTerminal(this));
            // Add event object
            var eventObj = new UI.Event(this);
            console.log(this.cache.json.get("events"));
            eventObj.setUIForEvent(this.cache.json.get("events")[0]);
            // Add draggable to dice
            testDie.setInteractive();
            this.input.setDraggable(testDie);
            this.add.existing(testDie);
            var dice = this.add.group({
                name: 'dice',
                runChildUpdate: true
            });
            dice.add(testDie);
            this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
                gameObject.x = dragX;
                gameObject.y = dragY;
            });
            this.input.on('dragend', function (pointer, gameObject, dragX, dragY) {
                var intersects = Phaser.Geom.Rectangle.Overlaps(gameObject.getBounds(), eventObj.diceRect.getBounds());
                if (intersects) {
                    var num = parseInt(eventObj.countText.text);
                    num -= gameObject.getValue();
                    eventObj.countText.setText(num.toString());
                }
                else {
                    gameObject.startRolling = true;
                }
            });
        };
        DiceTesting.prototype.update = function (time, delta) {
            //console.log(Math.log(time));
        };
        return DiceTesting;
    }(GameScene.SceneBase));
    GameScene.DiceTesting = DiceTesting;
})(GameScene || (GameScene = {}));
///<reference path = "SceneBase.ts" />
var GameScene;
(function (GameScene) {
    var LightTesting = /** @class */ (function (_super) {
        __extends(LightTesting, _super);
        function LightTesting(sceneName) {
            var _this = _super.call(this, sceneName) || this;
            _this.startSwinging = false;
            return _this;
        }
        LightTesting.prototype.preload = function () {
            //this.load.image('testpic', ['assets/sprites/testpic.png', 'assets/sprites/testpic_n.png'])
            //this.load.image('testpic', ['assets/sprites/Cylander-Large.png', 'assets/sprites/Cylander-Large-n.png'])
            this.load.image('testpic', ['assets/sprites/CylanderBrickLarge.png', 'assets/sprites/CylanderBrickLarge_n.png']);
        };
        LightTesting.prototype.create = function () {
            this.cameras.main.removeBounds();
            var testpic = this.add.sprite(Constants.SCREEN_WIDTH / 2, Constants.SCREEN_HEIGHT / 2, 'testpic').setPipeline('Light2D').setScale(2);
            //@ts-ignore
            this.renderer.pipelines.addPostPipeline('PixelPalettePipeline', Pipelines.PixelatedFX);
            this.lights.enable();
            this.lights.setAmbientColor(0x999999);
            this.testLight = this.lights.addLight(Constants.SCREEN_WIDTH / 2, Constants.SCREEN_HEIGHT / 2 + 100, 200, 0xFF9922, 4);
            this.cameras.main.setPostPipeline('PixelPalettePipeline');
        };
        LightTesting.prototype.update = function (time) {
            if (this.startSwinging) {
                this.testLight.x += 3 * Math.cos(time / 1000);
                this.testLight.y += 3 * Math.sin(time / 1000);
            }
            else {
                if (Math.cos(time / 1000) > 0.95 || Math.cos(time / 1000) < -0.95) {
                    this.startSwinging = true;
                }
            }
        };
        return LightTesting;
    }(GameScene.SceneBase));
    GameScene.LightTesting = LightTesting;
})(GameScene || (GameScene = {}));
///<reference path = "SceneBase.ts" />
var GameScene;
(function (GameScene) {
    var MainMenu = /** @class */ (function (_super) {
        __extends(MainMenu, _super);
        function MainMenu(sceneName) {
            return _super.call(this, sceneName) || this;
        }
        return MainMenu;
    }(GameScene.SceneBase));
    GameScene.MainMenu = MainMenu;
})(GameScene || (GameScene = {}));
var UI;
(function (UI) {
    var Die = /** @class */ (function (_super) {
        __extends(Die, _super);
        function Die(scene, x, y) {
            var _this = _super.call(this, scene, x, y, 'D7') || this;
            _this.startRolling = false;
            _this.isRolling = false;
            _this.startTime = 0;
            _this.currThreshold = 0;
            _this.thresholds = [];
            _this.accum = 0;
            _this.currframe = 0;
            _this.generateThresholds();
            _this.currThreshold = _this.thresholds.length;
            return _this;
            //this.on('dragend', this.onDragend);
        }
        Die.prototype.onDragend = function () {
            this.startRolling = true;
        };
        Die.prototype.update = function (time, delta) {
            if (this.startRolling) {
                this.startTime = time;
                this.currThreshold = 0;
                this.startRolling = false;
            }
            if (this.currThreshold < this.thresholds.length) {
                var nextThreshold = this.getNextThreshold(time - this.startTime);
                if (nextThreshold > this.currThreshold) {
                    this.currThreshold = nextThreshold;
                    this.rollToNext();
                }
            }
        };
        Die.prototype.getValue = function () {
            return 7 - this.currframe;
        };
        Die.prototype.rollToNext = function () {
            this.currframe = (this.currframe + Math.ceil(Math.random() * 6)) % 7;
            this.setFrame(this.currframe);
        };
        Die.prototype.getNextThreshold = function (timePassed) {
            for (var i = 0; i < this.thresholds.length; i += 1) {
                if (this.thresholds[i] > timePassed) {
                    return i;
                }
            }
            return this.thresholds.length;
        };
        Die.prototype.generateThresholds = function () {
            var num = 2;
            var top = Math.pow(2, 10);
            for (var i = 2, j = 1; i <= Math.pow(2, 10); i = Math.pow(2, j), j += 0.5) {
                this.thresholds.push(i);
            }
        };
        return Die;
    }(Phaser.GameObjects.Sprite));
    UI.Die = Die;
})(UI || (UI = {}));
var UI;
(function (UI) {
    var Event = /** @class */ (function () {
        function Event(scene) {
            // The background
            this.eventBody = scene.add.image(0, 0, 'EventBody').setScale(4);
            // Text of the event
            this.eventTitle = scene.add.bitmapText(-200, -198, "5pxFont", "EVENT").setScale(4).setMaxWidth(420).setTint(Constants.COLORS.ORANGE.color32);
            this.eventDescription = scene.add.bitmapText(-200, -168, "5pxFont", "SOME EXAMPLE TEXT").setScale(2).setMaxWidth(420).setTint(Constants.COLORS.WHITE.color32);
            // The dice count
            this.countText = scene.add.bitmapText(-130, 138, "5pxFont", "8").setOrigin(0.5, 0.5).setScale(16).setCenterAlign().setLetterSpacing(-2);
            this.diceRect = scene.add.rectangle(-6, 138, 120, 84, Constants.COLORS.DARK.color, 0.0).setOrigin(0.5, 0.5);
            this.eventContainer = scene.add.container(246, 244);
            this.eventContainer.add(this.eventBody);
            this.eventContainer.add(this.eventTitle);
            this.eventContainer.add(this.eventDescription);
            this.eventContainer.add(this.diceRect);
            this.eventContainer.add(this.countText);
        }
        Event.prototype.setUIForEvent = function (event) {
            console.log(event.title);
            this.eventTitle.setText(event.title.toUpperCase());
            this.eventDescription.setText(event.description.toUpperCase());
            this.countText.setText(event.threshold.toString());
        };
        return Event;
    }());
    UI.Event = Event;
})(UI || (UI = {}));
var UI;
(function (UI) {
    var TextTerminal = /** @class */ (function (_super) {
        __extends(TextTerminal, _super);
        function TextTerminal(scene) {
            var _this = _super.call(this, scene, 'TextTerminal') || this;
            _this.currentPhraseIndex = 0;
            _this.currText = "                   ";
            _this.phrases = [
                " --- THERE ONCE WAS A MAN WHO LIVED IN A SHOE",
                " --- SOMEONE POISONED THE WATERING HOLE!",
                " --- WAR! WHAT IS IT GOOD FOR?",
                " --- Sphinx of black quartz, judge my vow"
            ];
            // Number of updates needed to scroll 1 character
            _this.updatesPerScroll = 4;
            _this.currentUpdateCount = 0;
            _this.textBox = scene.add.bitmapText(248, 490, "5pxFont", "                  ").setTint(Constants.COLORS.WHITE.color32).setOrigin(0.5, 0.5).setScale(4);
            return _this;
        }
        TextTerminal.prototype.preUpdate = function () {
            if (this.currentUpdateCount >= this.updatesPerScroll) {
                this.getNextTextChars();
                this.currentUpdateCount = 0;
            }
            else {
                this.currentUpdateCount += 1;
            }
        };
        TextTerminal.prototype.getNextPhrase = function () {
            var r = Math.floor(Math.random() * this.phrases.length);
            while (r == this.currentPhraseIndex) {
                r = Math.floor(Math.random() * this.phrases.length);
            }
            this.currentPhraseIndex = r;
            return this.phrases[r];
        };
        TextTerminal.prototype.getNextTextChars = function () {
            this.currText = this.currText.slice(1);
            this.textBox.setText(this.currText.slice(0, 18).toUpperCase());
            if (this.currText.length <= 18) {
                this.currText += this.getNextPhrase();
            }
        };
        return TextTerminal;
    }(Phaser.GameObjects.GameObject));
    UI.TextTerminal = TextTerminal;
})(UI || (UI = {}));
var Colors;
(function (Colors) {
    Colors.R_BROWN_0 = new Phaser.Display.Color(59, 32, 39);
    Colors.R_BROWN_1 = new Phaser.Display.Color(125, 56, 51);
    Colors.R_BROWN_2 = new Phaser.Display.Color(171, 81, 48);
    Colors.ORANGE_0 = new Phaser.Display.Color(207, 117, 43);
    Colors.YELLOW_0 = new Phaser.Display.Color(240, 181, 65);
    Colors.GREEN_6 = new Phaser.Display.Color(255, 238, 131);
    Colors.GREEN_5 = new Phaser.Display.Color(200, 212, 93);
    Colors.GREEN_4 = new Phaser.Display.Color(99, 171, 63);
    Colors.GREEN_3 = new Phaser.Display.Color(59, 125, 79);
    Colors.GREEN_2 = new Phaser.Display.Color(47, 87, 83);
    Colors.GREEN_1 = new Phaser.Display.Color(40, 53, 64);
    Colors.GREEN_0 = new Phaser.Display.Color(27, 31, 33);
    Colors.BLUE_0 = new Phaser.Display.Color(43, 43, 69);
    Colors.BLUE_1 = new Phaser.Display.Color(58, 63, 94);
    Colors.BLUE_2 = new Phaser.Display.Color(76, 104, 133);
    Colors.BLUE_3 = new Phaser.Display.Color(79, 164, 184);
    Colors.BLUE_4 = new Phaser.Display.Color(146, 232, 192);
    Colors.WHITE = new Phaser.Display.Color(245, 255, 232);
    Colors.GREY_5 = new Phaser.Display.Color(223, 224, 232);
    Colors.GREY_4 = new Phaser.Display.Color(163, 167, 194);
    Colors.GREY_3 = new Phaser.Display.Color(104, 111, 153);
    Colors.GREY_2 = new Phaser.Display.Color(64, 73, 115);
    Colors.GREY_1 = new Phaser.Display.Color(44, 53, 77);
    Colors.GREY_0 = new Phaser.Display.Color(20, 24, 46);
    Colors.PURPLE_0 = new Phaser.Display.Color(75, 29, 82);
    Colors.PURPLE_1 = new Phaser.Display.Color(105, 36, 100);
    Colors.PURPLE_2 = new Phaser.Display.Color(156, 42, 112);
    Colors.PINK_0 = new Phaser.Display.Color(204, 47, 123);
    Colors.PINK_1 = new Phaser.Display.Color(255, 82, 119);
    Colors.FLESH = new Phaser.Display.Color(255, 194, 161);
    Colors.GOLD = new Phaser.Display.Color(255, 137, 51);
    Colors.ORANGE_1 = new Phaser.Display.Color(230, 69, 57);
    Colors.VIOLET_2 = new Phaser.Display.Color(173, 47, 69);
    Colors.VIOLET_1 = new Phaser.Display.Color(120, 29, 79);
    Colors.VIOLET_0 = new Phaser.Display.Color(79, 29, 76);
    Colors.BROWN_0 = new Phaser.Display.Color(41, 29, 43);
    Colors.BROWN_1 = new Phaser.Display.Color(61, 41, 54);
    Colors.BROWN_2 = new Phaser.Display.Color(82, 51, 63);
    Colors.BROWN_3 = new Phaser.Display.Color(143, 77, 87);
    Colors.BROWN_4 = new Phaser.Display.Color(189, 106, 98);
    Colors.BROWN_5 = new Phaser.Display.Color(255, 174, 112);
})(Colors || (Colors = {}));
var Constants;
(function (Constants) {
    Constants.MAIN_MENU_SCENE_NAME = 'MainMenuScene';
    Constants.LIGHT_TEST_SCENE_NAME = 'LightTestScene';
    Constants.DICE_TEST_SCENE_NAME = 'DiceTestScene';
    Constants.SCREEN_WIDTH = 960;
    Constants.SCREEN_HEIGHT = 540;
    Constants.SCREEN_MIDDLE = {
        X: Constants.SCREEN_WIDTH / 2,
        Y: Constants.SCREEN_HEIGHT / 2
    };
    Constants.COLORS = {
        DARK: new Phaser.Display.Color(27, 3, 38),
        RED: new Phaser.Display.Color(122, 28, 75),
        ORANGE: new Phaser.Display.Color(186, 80, 68),
        WHITE: new Phaser.Display.Color(239, 249, 214),
    };
    Constants.FONT_TEXT = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!?:;0123456789\"(),-.' ";
    // The text terminal can fit at most 18 chars
    Constants.TEXT_TERMINAL_MAX_WIDTH = 18;
    Constants.FONT_CONFIG = {
        image: '5pxFont',
        width: 6,
        height: 6,
        chars: Constants.FONT_TEXT,
        charsPerRow: 4,
        spacing: { x: 0, y: 0 },
        offset: { x: 0, y: 0 },
        linespacing: 1
    };
    Constants.GAME_CONFIG = {
        type: Phaser.WEBGL,
        width: Constants.SCREEN_WIDTH,
        height: Constants.SCREEN_HEIGHT,
        parent: 'game-div',
        pixelArt: true,
        backgroundColor: Constants.COLORS.DARK,
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
})(Constants || (Constants = {}));
var Util;
(function (Util) {
    function colorToHexString(c) {
        return '0x' + Phaser.Display.Color.ComponentToHex(c.red) + Phaser.Display.Color.ComponentToHex(c.green) + Phaser.Display.Color.ComponentToHex(c.blue);
    }
    Util.colorToHexString = colorToHexString;
})(Util || (Util = {}));
//# sourceMappingURL=gameoff2021.js.map