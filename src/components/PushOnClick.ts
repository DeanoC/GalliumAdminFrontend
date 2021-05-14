
/* START OF COMPILED CODE */

import UserComponent from "./UserComponent";
import Phaser from "phaser";

export default class PushOnClick extends UserComponent {
	
	constructor(gameObject: Phaser.GameObjects.Container) {
		super(gameObject);
		
		this.gameObject = gameObject;
		(gameObject as any)["__PushOnClick"] = this;
		
		/* START-USER-CTR-CODE */
		/* END-USER-CTR-CODE */
	}
	
	static getComponent(gameObject: Phaser.GameObjects.Container): PushOnClick {
		return (gameObject as any)["__PushOnClick"];
	}
	
	private gameObject: Phaser.GameObjects.Container;
	
	/* START-USER-CODE */
	public enabled: boolean = true;

	awake() {
		
		this.gameObject.list[0].setInteractive().on("pointerdown", () => {
			this.onPointerDown();
			
			if (this.enabled && (this.gameObject as any)["onLeftClicked"] != undefined) {
				(this.gameObject as any)["onLeftClicked"]()
			}
		});
	}

	private inTween: boolean = false;
	onPointerDown() {
		if (!this.inTween && this.enabled) {
			this.scene.add.tween({
				targets: this.gameObject,
				scaleX: this.gameObject.scaleX * 0.8,
				scaleY: this.gameObject.scaleX * 0.8,
				duration: 80,
				yoyo: true,
				onComplete: function (tween, targets) {
					targets[0]["__PushOnClick"].inTween = false;
				}
			});
			this.inTween = true;
		}

	}



	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
