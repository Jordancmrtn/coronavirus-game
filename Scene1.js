class Scene1 extends Phaser.Scene {
	constructor() {
		super({ key: 'Scene1' })
	}
	
	preload(){
		this.load.image('logo', './assets/logoCoronaVirus.png')
		this.load.image('startButton', './assets/buttonStart.png')
		this.load.audio('intro', './assets/Music/musiqueIntro.mp3');
	}
	
  create() {

		gameState.logo = this.add.image(250,200, 'logo')
		gameState.startButton = this.add.image(250, 450, 'startButton').setScale(0.6)
		this.add.text(52, 500, "Utilise les flèches pour éviter les virus", {fill: '#333333'})


		
		gameState.startButton.setInteractive({ cursor: 'pointer' })
		gameState.startButton.on('pointerdown', () => {  
			this.scene.stop('Scene1')
			this.scene.start('Scene2')
			gameState.introMusic.stop()
		})
		gameState.startButton.on('pointerover',() =>{
			gameState.startButton.setScale(0.7);
		});
		gameState.startButton.on('pointerout', () => {
			gameState.startButton.setScale(0.6);
		});

		gameState.introMusic = this.sound.add('intro');

		let musicConfig = {
			mute : false,
			volume : 0.2,
			rate : 1,
			detune : 0,
			seek : 0,
			loop : true,
			delay : 0
		}
		gameState.introMusic.play(musicConfig);
	}

}