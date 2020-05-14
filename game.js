const gameState = {
  score: 0
};

const config = {
  type: Phaser.AUTO,
  // width: 500,
  // height: 600,
  backgroundColor: "f4f4f4",
  scale: {
    mode: Phaser.Scale.FIT,
    parent: 'phaserGame',
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 500,
    height: 600,
  },
  physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 },
			enableBody: true,
		}
  },
  audio: {
    disableWebAudio: true
  },
  scene: [Accueil,Instructions, Scene2]
};

const game = new Phaser.Game(config);