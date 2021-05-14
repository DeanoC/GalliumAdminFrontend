
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import PushOnClick from "../components/PushOnClick";

export default class GuiTextButton extends Phaser.GameObjects.Container {
	
	constructor(scene: Phaser.Scene, x: number, y: number) {
		super(scene, x, y);
		
		// sprite
		const sprite = scene.add.sprite(0, 0, "gui", "MenuContent_0014_Rectangle---------------.png");
		sprite.scaleX = 5;
		sprite.scaleY = 5;
		this.add(sprite);
		
		// buttonText
		const buttonText = scene.add.text(0, 0, "", {});
		buttonText.setOrigin(0.5, 0.5);
		buttonText.text = "Missing Text!";
		buttonText.setStyle({"fontSize":"90px","fontStyle":"bold"});
		this.add(buttonText);
		
		// this (components)
		new PushOnClick(this);
		
		/* START-USER-CTR-CODE */
		Object.defineProperty(this, 'Text', {
			set: function (txt) {
				buttonText.setText(txt);
			}
		});

		/* END-USER-CTR-CODE */
	}
	
	public Text: string = "Missing Text!";
	
	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
