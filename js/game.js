//---Section of User Functions---
//uluchshenyj randomaizer
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
//peremeshuvaet kolodu
function shuffle(arr) {
  for (var i = 0; i < arr.length; i++) {
    var j = getRandomInt(arr.length);
    var k = getRandomInt(arr.length);
    var t = arr[j];
    arr[j] = arr[k];
    arr[k] = t;
  }
  return arr;
}
//proverka cveta masti
function red_or_black(cart) {
  if (cart.includes("clubs") || cart.includes("spades")) return "black";
  if (cart.includes("diamond") || cart.includes("hearts")) return "red";
  if (cart.includes("placeholder")) return "placeholder";
}
//proverka masti
function take_suit(cart) {
  if (cart.includes("clubs")) return "clubs";
  if (cart.includes("spades")) return "spades";
  if (cart.includes("diamond")) return "diamond";
  if (cart.includes("hearts")) return "hearts";
  if (cart.includes("placeholder")) return "placeholder";
}
//vozvraschaet ves karty
function weight(name) {
  let weight = name.substring(name.length - 2);
  if (weight.includes("_")) weight = name.substring(name.length - 1);
  return parseInt(weight);
}
//predvaritelnoe napolnenie massiva nazvanij kart
function cards() {
  //function cards() {
  for (let i = 1; i <= 13; i++) {
    crd.push("clubs_" + i);
    crd.push("diamond_" + i);
    crd.push("hearts_" + i);
    crd.push("spades_" + i);
  }
  crd = shuffle(crd);
}
//---Section of Global Constant---
const y1 = 150; //First Line
const y2 = 378; //Second Line
const x1 = 100;
const x2 = 260;
const x3 = 420;
const x4 = 580;
const x5 = 740;
const x6 = 900;
const x7 = 1060;
const y_shift = 30; //! Smeschenie po vertikali
//---Section of Global Variables---
var crd = [];

var BootScene = new Phaser.Class({
  Extends: Phaser.Scene,
  initialize: function BootScene() {
    Phaser.Scene.call(this, { key: "BootScene" });
  },

  preload: function () {
    // здесь будет загрузка ресурсов
    // загрузка изображений
    this.load.atlas("placeholder", "assets/cards/placeholder.png", "assets/cards/placeholder_atlas.json");
    this.load.image("card_shirt", "assets/cards/card_shirt.png");
    this.load.atlas("cards", "assets/cards/cards.png", "assets/cards/cards_atlas.json");
  },

  create: function () {
    this.scene.start("WorldScene");
  },
});

var WorldScene = new Phaser.Class({
  Extends: Phaser.Scene,
  initialize: function WorldScene() {
    Phaser.Scene.call(this, { key: "WorldScene" });
  },

  preload: function () {},

  create: function () {
    // // фон
    // this.add.sprite(0, 0, "background");
    this.placehold = [];
    this.shirt = [];
    this.deck = []; //massiv of objects - cards
    //placeholders
    this.placehold.push(this.add.sprite(100, 150, "placeholder", "placeholder_16"));
    this.placehold[0].setInteractive();
    this.placehold.push(this.add.sprite(260, 150, "placeholder", "placeholder_14"));

    this.placehold.push(this.add.sprite(580, 150, "placeholder", "placeholder_15"));
    this.placehold.push(this.add.sprite(740, 150, "placeholder", "placeholder_15"));
    this.placehold.push(this.add.sprite(900, 150, "placeholder", "placeholder_15"));
    this.placehold.push(this.add.sprite(1060, 150, "placeholder", "placeholder_15"));

    this.placehold.push(this.add.sprite(100, 378, "placeholder", "placeholder_14"));
    this.placehold.push(this.add.sprite(260, 378, "placeholder", "placeholder_14"));
    this.placehold.push(this.add.sprite(420, 378, "placeholder", "placeholder_14"));
    this.placehold.push(this.add.sprite(580, 378, "placeholder", "placeholder_14"));
    this.placehold.push(this.add.sprite(740, 378, "placeholder", "placeholder_14"));
    this.placehold.push(this.add.sprite(900, 378, "placeholder", "placeholder_14"));
    this.placehold.push(this.add.sprite(1060, 378, "placeholder", "placeholder_14")); //*/

    //vykladka rubashki
    // this.shirt.push(this.add.sprite(100, 150, "card_shirt"));
    // this.shirt[0].setDepth(1);
    // this.shirt[0].setInteractive();

    //Sozdanie peremeshanoy kolody kart
    // cards(); //(crd[])
    // for (let i = 0; i <= crd.length - 1; i++) {
    //   this.deck.push(this.add.sprite(x1, y1, "cards", crd[i]));
    //   this.deck[i].enabled = true;
    //   this.deck[i].setInteractive();
    //   this.deck[i].name = crd[i];
    //   this.deck[i].suit = take_suit(crd[i]);
    //   this.deck[i].color = red_or_black(crd[i]);
    //   this.deck[i].value = weight(crd[i]);
    //   this.deck[i].pl = -1; //startovyj verhnij levyj placeholder (-1)
    //   this.deck[i].on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, () => {
    //     console.log(this);
    //   });
    // }
  },
  // startDrag = function (pointer, targets) {
  //   this.dragObj = targets[0];

  //   if (this.dragObj instanceof Phaser.GameObjects.Sprite) {
  //     if (this.dragObj.name != 'shirt' && this.dragObj.name != 'park1') {
  //       this.input.off('pointerdown', this.startDrag, this);
  //       var toplist = this.getListTopCards(this.dragObj);
  //       for (var i = 0; i < this.deck.length; i++) {
  //         this.deck[i].setDepth(0);
  //       }
  //       this.dragObj.toplist = toplist;
  //       this.dragObj.setDepth(1);
  //       if (this.dragObj.toplist.length > 0) {
  //         for (var i = 0; i < this.dragObj.toplist.length; i++) {
  //           this.deck[this.dragObj.toplist[i].idx].setDepth(i + 2);
  //         }
  //       }
  //       this.dragObj.startX = this.dragObj.x;
  //       this.dragObj.startY = this.dragObj.y;
  //       this.input.on('pointermove', this.doDrag, this);
  //       this.input.on('pointerup', this.stopDrag, this);
  //     }
  //   } else {
  //     this.input.on('pointerdown', this.startDrag, this);
  //   }
  // },
});
// конфигурация нашей игры

let config = {
  type: Phaser.AUTO, // Phaser сам решает как визуализировать нашу игру (WebGL или Canvas)
  width: 1280, // ширина игры
  height: 720, // высота игры
  backgroundColor: "#279732",
  scene: gameScene, // наша созданная выше сцена
  zoom: 1,
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
    },
  },
  scene: [BootScene, WorldScene],
};

// создаем игру и передам ей конфигурацию
let game = new Phaser.Game(config);
