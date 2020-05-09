class Accueil extends Phaser.Scene {
	constructor() {
		super({ key: 'Accueil' })
	}
	
	preload(){
		this.load.image('logo', './assets/logoCoronaVirus.png')
		this.load.image('startButton', './assets/buttonStart.png')
		this.load.image('instructionButton', './assets/instructions.png')
		this.load.audio('intro', './assets/Music/musiqueIntro.mp3');
	}
	
  create() {

		gameState.logo = this.add.image(250,200, 'logo')
		gameState.startButton = this.add.image(250, 450, 'startButton').setScale(0.6)
		gameState.instructionsButton = this.add.image(250, 520, 'instructionButton').setScale(0.6)


		gameState.instructionsButton.setInteractive({ cursor: 'pointer' })
		gameState.startButton.setInteractive({ cursor: 'pointer' })

		gameState.startButton.on('pointerdown', () => {  
			this.scene.stop('Accueil')
			this.scene.start('Scene2')
			gameState.introMusic.stop()
		})
		gameState.startButton.on('pointerover',() =>{
			gameState.startButton.setScale(0.7);
		});
		gameState.startButton.on('pointerout', () => {
			gameState.startButton.setScale(0.6);
		});

		gameState.instructionsButton.on('pointerdown', () => {  
			this.scene.stop('Accueil')
			this.scene.start('Instructions')
		})
		gameState.instructionsButton.on('pointerover',() =>{
			gameState.instructionsButton.setScale(0.7);
		});
		gameState.instructionsButton.on('pointerout', () => {
			gameState.instructionsButton.setScale(0.6);
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