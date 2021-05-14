
import GuiButtonBase from "../prefabs/GuiButtonBase";

/* START OF COMPILED CODE */

import PushOnClick from "../components/PushOnClick";

export default class GuiLabelNumberEdit extends GuiButtonBase {
	
	constructor(scene: Phaser.Scene, x: number, y: number) {
		super(scene, x, y);
		
		// Label
		const label = scene.add.text(0, 0, "", {});
		label.text = "Name:";
		label.setStyle({"fontSize":"32px","fontStyle":"bold"});
		this.add(label);
		
		// EditNumber
		const editNumber = scene.add.text(203, 0, "", {});
		editNumber.text = "0|";
		editNumber.setStyle({"fontSize":"32px","fontStyle":"bold"});
		this.add(editNumber);
		
		// focus_rect
		const focus_rect = scene.add.rectangle(-6, -7, 465, 45);
		focus_rect.setOrigin(0, 0);
		focus_rect.strokeColor = 13225881;
		focus_rect.lineWidth = 3;
		this.add(focus_rect);
		
		// this (components)
		new PushOnClick(this);
		
		this.focus_rect = focus_rect;
		
		/* START-USER-CTR-CODE */
		Object.defineProperty(this, 'Number', {
			set: function (num: number) {
					editNumber.setText(num.toString() + "|");
			},
			get: function () {
				return parseFloat(editNumber.text.slice(0, -1))
			}
		});

		Object.defineProperty(this, 'Label', {
			set: function (txt) {
				label.setText(txt);
				label.updateText();
			},
			get: function () {
				return label.text
			}
		});

		this.scene.input.keyboard.on("keydown", (event: any) => {
			if (this.HasFocus) {
				if (event.keyCode === 8 ) {
					if(editNumber.text.length > 1)
						editNumber.text = editNumber.text.slice(0, -2) + "|";
				}
				else if (event.key >= '0' && event.key <= '9') {
					editNumber.text = editNumber.text.slice(0, -1) + event.key + "|";
				}
				else if(event.key === '.' && editNumber.text.indexOf('.') == -1) {
					editNumber.text = editNumber.text.slice(0, -1) + event.key + "|";
				} else if (event.keyCode === 13) {
					if ((this as any)["onEnter"] != undefined) {
						(this as any)["onEnter"](this.Number)
					}
				}
			}
		});
		/* END-USER-CTR-CODE */
	}
	
	private focus_rect: Phaser.GameObjects.Rectangle|undefined;
	public Number: number = 0;
	public Label: string = "Name:";
	
	/* START-USER-CODE */
	onFocus () {
		this.focus_rect!.isStroked = true;
		super.onFocus();
	}

	onDefocus() {
		this.focus_rect!.isStroked = false;
		super.onDefocus();
	}

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
