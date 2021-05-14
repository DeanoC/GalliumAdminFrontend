
import GalliumFlow from "../GalliumFlowAPI";

/* START OF COMPILED CODE */

import Phaser from "phaser";
import GuiTextButton from "../prefabs/GuiTextButton";

export default class MainMenu extends Phaser.Scene {
	
	constructor() {
		super("MainMenu");
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}
	
	editorCreate() {
		
		// Title
		const title = this.add.text(404, 69, "", {});
		title.setOrigin(0.5, 0.5);
		title.text = "Minter";
		title.setStyle({"align":"center","fontSize":"100px","fontStyle":"bold","stroke":"#ffffffff","shadow.offsetX":10,"shadow.offsetY":10,"shadow.stroke":true,"shadow.fill":true});
		
		// Characters
		const characters = new GuiTextButton(this, 421, 366);
		this.add.existing(characters);
		characters.scaleX = 0.5;
		characters.scaleY = 0.5;
		
		// ConnectError
		const connectError = this.add.text(400, 164, "", {});
		connectError.setOrigin(0.5, 0.5);
		connectError.text = "Error!!\nCan't connect to backend server!";
		connectError.setStyle({"align":"center","fontSize":"40px","fontStyle":"bold","stroke":"#ffffffff","shadow.offsetX":10,"shadow.offsetY":10});
		
		// ServerHello
		const serverHello = this.add.text(400, 256, "", {});
		serverHello.setOrigin(0.5, 0.5);
		serverHello.text = "Server Hello";
		serverHello.setStyle({"align":"center","fontSize":"40px","fontStyle":"bold","stroke":"#ffffffff","shadow.offsetX":10,"shadow.offsetY":10});
		
		// characters (prefab fields)
		characters.Text = "Characters";
		
		// characters (components)
		characters.emit("components-awake");
		
		this.characters = characters;
		this.connectError = connectError;
		this.serverHello = serverHello;
	}
	
	private characters: GuiTextButton|undefined;
	private connectError: Phaser.GameObjects.Text|undefined;
	private serverHello: Phaser.GameObjects.Text|undefined;
	
	/* START-USER-CODE */
	
	// Write your code here	
	
	create() {
			this.editorCreate();

			this.init();

			this.connectError!.setVisible(false);
			this.serverHello!.setVisible(false);

			(this.characters as any)["onLeftClicked"] = () => {
				this.scene.start("Characters");
			}
		
	}
	async init() {
		try {	
			let serverHello = await GalliumFlow.init();
			this.serverHello!.text = serverHello
			this.serverHello!.setVisible(true);
		} catch (error) {
			console.log(error)
			this.connectError!.setVisible(true);
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
