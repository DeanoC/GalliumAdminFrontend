
import ClickableContainer from "./ClickableContainer";

/* START OF COMPILED CODE */

import PushOnClick from "../components/PushOnClick";

export default class VCCard extends ClickableContainer {
	
	constructor(scene: Phaser.Scene, x: number, y: number) {
		super(scene, x, y);
		
		// Card
		const card = scene.add.rectangle(0, 0, 403, 404);
		card.scaleY = 2;
		card.setOrigin(0, 0);
		card.isFilled = true;
		this.add(card);
		
		// PictureFrame
		const pictureFrame = scene.add.rectangle(204, 223, 359, 376);
		pictureFrame.isFilled = true;
		pictureFrame.fillColor = 2763306;
		this.add(pictureFrame);
		
		// image
		const image = scene.add.image(204, 221, "S_dwarf icon");
		image.scaleX = 2.563761394602558;
		image.scaleY = 2.2994694438485186;
		this.add(image);
		
		// TextFrame
		const textFrame = scene.add.rectangle(205, 613, 359, 321);
		textFrame.isFilled = true;
		textFrame.fillColor = 2763306;
		this.add(textFrame);
		
		// RarityLabel
		const rarityLabel = scene.add.text(44, 408, "", {});
		rarityLabel.text = "Rarity:";
		rarityLabel.setStyle({"color":"#000000ff","fontSize":"40px","fontStyle":"bold","stroke":"#000000ff"});
		this.add(rarityLabel);
		
		// Rarit
		const rarit = scene.add.text(226, 408, "", {});
		rarit.text = "Common";
		rarit.setStyle({"color":"#000000ff","fontSize":"40px","fontStyle":"bold","stroke":"#000000ff"});
		this.add(rarit);
		
		// CharacterName
		const characterName = scene.add.text(47, 469, "", {});
		characterName.text = "Bob The Hero!";
		characterName.setStyle({"align":"center","fontSize":"40px","fontStyle":"bold","shadow.offsetX":5,"shadow.offsetY":5,"shadow.stroke":true,"shadow.fill":true});
		this.add(characterName);
		
		// PowerLabel
		const powerLabel = scene.add.text(43, 511, "", {});
		powerLabel.text = "Power:";
		powerLabel.setStyle({"color":"#ffffffff","fontSize":"40px","fontStyle":"bold","stroke":"#ffffffff"});
		this.add(powerLabel);
		
		// Power
		const power = scene.add.text(196, 511, "", {});
		power.text = "0";
		power.setStyle({"color":"#ffffffff","fontSize":"40px","fontStyle":"bold","stroke":"#ffffffff"});
		this.add(power);
		
		// KeywordsLabel
		const keywordsLabel = scene.add.text(50, 556, "", {});
		keywordsLabel.text = "Keywords";
		keywordsLabel.setStyle({"color":"#ffffffff","fontSize":"40px","fontStyle":"bold","stroke":"#ffffffff"});
		this.add(keywordsLabel);
		
		// Keywords
		const keywords = scene.add.text(89, 608, "", {});
		keywords.text = "Mining\nBellyBash\nShort";
		keywords.setStyle({"color":"#ffffffff","fontSize":"40px","fontStyle":"bold","stroke":"#ffffffff"});
		this.add(keywords);
		
		// this (components)
		new PushOnClick(this);
		
		this.rarit = rarit;
		this.characterName = characterName;
		this.power = power;
		this.keywords = keywords;
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}
	
	private rarit: Phaser.GameObjects.Text|undefined;
	private characterName: Phaser.GameObjects.Text|undefined;
	private power: Phaser.GameObjects.Text|undefined;
	private keywords: Phaser.GameObjects.Text|undefined;
	
	/* START-USER-CODE */
	public setCharacterName(newName:string): void {
		this.characterName!.text = newName
	}

	public setPower(num: number): void {
		this.power!.text = num.toString()
	}

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
