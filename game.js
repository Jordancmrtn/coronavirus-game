const gameState = {
  score: 0
};

const config = {
  type: Phaser.AUTO,
  width: 500,
  height: 600,
  backgroundColor: "f4f4f4",
  physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 },
			enableBody: true,
		}
	},
  scene: [Scene1, Scene2]
};

const game = new Phaser.Game(config);