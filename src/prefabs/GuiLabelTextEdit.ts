
import GuiButtonBase from "../prefabs/GuiButtonBase";

/* START OF COMPILED CODE */

import PushOnClick from "../components/PushOnClick";

export default class GuiLabelTextEdit extends GuiButtonBase {
	
	constructor(scene: Phaser.Scene, x: number, y: number) {
		super(scene, x, y);
		
		// Label
		const label = scene.add.text(0, 0, "", {});
		label.text = "Name:";
		label.setStyle({"fontSize":"32px","fontStyle":"bold"});
		this.add(label);
		
		// CharacterName
		const characterName = scene.add.text(100, 0, "", {});
		characterName.text = "Bob The Hero!";
		characterName.setStyle({"fontSize":"32px","fontStyle":"bold"});
		this.add(characterName);
		
		// focus_rect
		const focus_rect = scene.add.rectangle(-8, -5, 465, 46);
		focus_rect.setOrigin(0, 0);
		focus_rect.strokeColor = 13225881;
		focus_rect.lineWidth = 3;
		this.add(focus_rect);
		
		// this (components)
		new PushOnClick(this);
		
		this.focus_rect = focus_rect;
		
		/* START-USER-CTR-CODE */
		// setup input
		Object.defineProperty(this, 'Text', {
			set: function (txt: string) {
				characterName.setText(txt + "|");
			},
			get: function (): string {
				return characterName.text.slice(0, -1)
			}
		});

		Object.defineProperty(this, 'Label', {
			set: function (txt: string){
				label.setText(txt)
			},
			get: function (): string {
				return label.text
			}
		});

		this.scene.input.keyboard.on("keydown", (event: any) => {
			if (this.HasFocus) {
				if (event.keyCode === 8 && this.Text.length > 0) {
					this.Text = this.Text.slice(0, -1);
				}
				else if (event.keyCode === 32 || (event.keyCode >= 48 && event.keyCode < 90)) {
					this.Text = this.Text + event.key;
				} else if (event.keyCode === 13) {
					if ((this as any)["onEnter"] != undefined) {
						(this as any)["onEnter"](this.Text)
					}
				}
			}
		});

		/* END-USER-CTR-CODE */
	}
	
	private focus_rect: Phaser.GameObjects.Rectangle|undefined;
	public Text: string = "Bob The Hero!";
	public Label: string = "Name:";
	
	/* START-USER-CODE */
	onFocus() {
		this.focus_rect!.isStroked = true;
		super.onFocus();
	}

	onDefocus() {
		this.focus_rect!.isStroked = false;
		super.onDefocus();
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
