// создаем новую сцену с именем "Game"
let gameScene = new Phaser.Scene("Game");

// загрузка файлов ресурсов для нашей игры
gameScene.preload = function () {
  // загрузка изображений
  this.load.atlas("placeholder", "assets/cards/placeholder.png", "assets/cards/placeholder_atlas.json");
  this.load.image("card_shirt", "assets/cards/card_shirt.png");

  this.load.atlas("cards", "assets/cards/cards.png", "assets/cards/cards_atlas.json");
};

// выполняется один раз, после загрузки ресурсов
gameScene.create = function () {
  // // фон
  // this.add.sprite(0, 0, "background");
  this.placehold = [];
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
};

// конфигурация нашей игры
let config = {
  type: Phaser.AUTO, // Phaser сам решает как визуализировать нашу игру (WebGL или Canvas)
  width: 1280, // ширина игры
  height: 720, // высота игры
  backgroundColor: "#279732",
  scene: gameScene, // наша созданная выше сцена
  // zoom: 1,
  // pixelArt: true,
  // physics: {
  //   default: "arcade",
  //   arcade: {
  //     gravity: { y: 400 },
  //   },
  // },
  // scene: [BootScene, WorldScene],
};

// создаем игру и передам ей конфигурацию
let game = new Phaser.Game(config);
