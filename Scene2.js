class Scene2 extends Phaser.Scene {
	constructor() {
		super({ key: 'Scene2' })
	}

	preload(){
		this.load.image('perso', './assets/perso.png');
		this.load.image('platform', './assets/platform.png')
		this.load.image('virus', './assets/virus.png');
		this.load.image('gameOver', './assets/gameOver.png');
		this.load.image('restartButton', './assets/restartButton.png');
		this.load.audio('music', './assets/Music/musique.mp3');
		this.load.audio('lose', './assets/Music/lose.mp3');

	}
  
  create() {
		gameState.player = this.physics.add.sprite(225, 450, 'perso').setScale(0.6)
		
		gameState.player.setCollideWorldBounds(true);

		gameState.scoreText = this.add.text(210, 575, 'Score: 0', { fontSize: '15px', fill: '#333333' }).setDepth(3);


		const platforms = this.physics.add.staticGroup();

		platforms.create(225, 600, 'platform').setScale(2, 2).refreshBody();

		this.physics.add.collider(gameState.player, platforms);

		gameState.cursors = this.input.keyboard.createCursorKeys();


		const virus = this.physics.add.group()

		const virusGenerator = () => {
			const xCoord = Math.random() * 640
			virus.create(xCoord, 10, 'virus')
		}

		const virusGenLoop = this.time.addEvent({
			delay: 100,
			callback: virusGenerator,
			callbackScope: this,
			loop: true,
		});

		this.physics.add.collider(virus, platforms, function (virus) {
			virus.destroy();
			gameState.score += 10;
			gameState.scoreText.setText(`Score: ${gameState.score}`);
		})

		this.physics.add.collider(gameState.player, virus, () => {
			virusGenLoop.destroy();
			gameState.lose = this.sound.add('lose')
			let loseMusicConfig = {
				mute : false,
				volume : 1,
				rate : 1,
				detune : 0,
				seek : 0,
				loop : false,
				delay : 0
			}
			gameState.lose.play(loseMusicConfig)
			gameState.music.stop()
			this.physics.pause();
			gameState.gameOver = this.add.image(250,270, 'gameOver')
			gameState.reStart = this.add.image(250,450, 'restartButton').setScale(0.6)
			gameState.reStart.setInteractive({ cursor: 'pointer' })

			gameState.scoreTextFinal = this.add.text(170, 380, `Score final: ${gameState.score}`, { fontSize: '17px', fill: '#333333'}).setDepth(3);
			gameState.scoreText.setText(` `)


			gameState.reStart.on('pointerup', () => {
				gameState.score = 0;
				this.scene.restart();
			});

			gameState.reStart.on('pointerover',() =>{
				gameState.reStart.setScale(0.7);
			});
			gameState.reStart.on('pointerout', () => {
				gameState.reStart.setScale(0.6);
			});
		});

		gameState.music = this.sound.add('music')
		let musicConfig = {
			mute : false,
			volume : 0.2,
			rate : 1,
			detune : 0,
			seek : 0,
			loop : true,
			delay : 0
		}
		gameState.music.play(musicConfig)
	}
	
	update() {
		if (gameState.cursors.left.isDown) {
			gameState.player.setVelocityX(-280);
			gameState.player.flipX = true;
		} else if (gameState.cursors.right.isDown) {
			gameState.player.setVelocityX(280);
			gameState.player.flipX = false;
		} else {
			gameState.player.setVelocityX(0);
		}
	}
}