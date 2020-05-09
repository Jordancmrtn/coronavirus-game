class Instructions extends Phaser.Scene {
	constructor() {
		super({ key: 'Instructions' })
	}
	
	preload(){
		this.load.image('logo', './assets/logoCoronaVirus.png')
		this.load.audio('intro', './assets/Music/musiqueIntro.mp3');
		this.load.image('leftArrow', './assets/leftArrow.png');
		this.load.image('rightArrow', './assets/rightArrow.png');
		this.load.image('retourButton', './assets/retour.png');
	}
	
  create() {

		gameState.logo = this.add.image(250,150, 'logo').setScale(0.8)

		gameState.ordiText = this.add.text(180, 300, `Sur Ordinateur`, { fontSize: '17px', fill: '#F06F22', fontWeight: 'bold'}).setDepth(3);
		gameState.ordiText2 = this.add.text(70, 340, `utilise les flèches de ton clavier !`, { fontSize: '17px', fill: '#333333', fontWeight: 'bold', boundsAlignH: 'center', boundsAlignV: 'middle'}).setDepth(3);

		gameState.mobileText = this.add.text(185, 400, `Sur Téléphone`, { fontSize: '17px', fill: '#F06F22', fontWeight: 'bold'}).setDepth(3);
		gameState.mobileText2 = this.add.text(100, 450, `utilise les flèches du jeu !`, { fontSize: '17px', fill: '#333333', fontWeight: 'bold', boundsAlignH: 'center', boundsAlignV: 'middle'}).setDepth(3);
		gameState.leftArrow = this.add.image(220, 500, 'leftArrow').setScale(0.5)
		gameState.rightArrow = this.add.image(280, 500, 'rightArrow').setScale(0.5)
		gameState.retourButton = this.add.image(70, 570, 'retourButton').setScale(0.6)


		gameState.retourButton.setInteractive({ cursor: 'pointer' })
		
		gameState.retourButton.on('pointerdown', () => {  
			this.scene.stop('Instructions')
			this.scene.start('Accueil')
		})
		gameState.retourButton.on('pointerover',() =>{
			gameState.retourButton.setScale(0.7);
		});
		gameState.retourButton.on('pointerout', () => {
			gameState.retourButton.setScale(0.6);
		});

		// gameState.introMusic = this.sound.add('intro');

		// let musicConfig = {
		// 	mute : false,
		// 	volume : 0.2,
		// 	rate : 1,
		// 	detune : 0,
		// 	seek : 0,
		// 	loop : true,
		// 	delay : 0
		// }
		// gameState.introMusic.play(musicConfig);
	}

}