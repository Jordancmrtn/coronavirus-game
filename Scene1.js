class Scene1 extends Phaser.Scene {
	constructor() {
		super({ key: 'Scene1' })
	}
	
	preload(){
		this.load.image('logo', './assets/logoCoronaVirus.png')
		this.load.image('startButton', './assets/buttonStart.png')
	}
	
  create() {
		gameState.logo = this.add.image(250,200, 'logo')
		gameState.startButton = this.add.image(250, 450, 'startButton').setScale(0.6)
		
		gameState.startButton.setInteractive({ cursor: 'pointer' })
		gameState.startButton.on('pointerdown', () => {  
			this.scene.stop('Scene1')
			this.scene.start('Scene2')
		})
	}

}