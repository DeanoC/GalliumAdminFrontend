
import FocusableContainer from "../prefabs/FocusableContainer";
import GalliumFlow from "../GalliumFlowAPI";
import { Rarity, VirginCharacter } from "../VirginCharacter"

/* START OF COMPILED CODE */

import Phaser from "phaser";
import VCCard from "../prefabs/VCCard";
import GuiTextButton from "../prefabs/GuiTextButton";
import GuiLabelTextEdit from "../prefabs/GuiLabelTextEdit";
import GuiLabelNumberEdit from "../prefabs/GuiLabelNumberEdit";

export default class Characters extends Phaser.Scene {
	
	constructor() {
		super("Characters");
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}
	
	editorCreate() {
		
		// Title
		const title = this.add.text(402, 103, "", {});
		title.setOrigin(0.5, 0.5);
		title.text = "Characters";
		title.setStyle({"align":"center","fontSize":"100px","fontStyle":"bold","stroke":"#ffffffff","shadow.offsetX":10,"shadow.offsetY":10,"shadow.stroke":true,"shadow.fill":true});
		
		// vCCard
		const vCCard = new VCCard(this, 54, 752);
		this.add.existing(vCCard);
		vCCard.scaleX = 0.5;
		vCCard.scaleY = 0.5;
		
		// rectangle
		const rectangle = this.add.rectangle(400, 709, 737, 10);
		rectangle.isFilled = true;
		rectangle.fillColor = 6184542;
		
		// Save
		const save = new GuiTextButton(this, 666, 1136);
		this.add.existing(save);
		save.scaleX = 0.3;
		save.scaleY = 0.3;
		
		// Cancel
		const cancel = new GuiTextButton(this, 435, 1135);
		this.add.existing(cancel);
		cancel.scaleX = 0.3;
		cancel.scaleY = 0.3;
		
		// rectangle_1
		const rectangle_1 = this.add.rectangle(278, 731, 502, 345);
		rectangle_1.setOrigin(0, 0);
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 8553090;
		
		// CharacterEditName
		const characterEditName = new GuiLabelTextEdit(this, 317, 748);
		this.add.existing(characterEditName);
		
		// vCCard_preview_1
		const vCCard_preview_1 = new VCCard(this, 50, 180);
		this.add.existing(vCCard_preview_1);
		vCCard_preview_1.scaleX = 0.5;
		vCCard_preview_1.scaleY = 0.5;
		
		// vCCard_preview_2
		const vCCard_preview_2 = new VCCard(this, 300, 180);
		this.add.existing(vCCard_preview_2);
		vCCard_preview_2.scaleX = 0.5;
		vCCard_preview_2.scaleY = 0.5;
		
		// vCCard_preview_3
		const vCCard_preview_3 = new VCCard(this, 550, 180);
		this.add.existing(vCCard_preview_3);
		vCCard_preview_3.scaleX = 0.5;
		vCCard_preview_3.scaleY = 0.5;
		
		// guiLabelNumberEdit
		const guiLabelNumberEdit = new GuiLabelNumberEdit(this, 317, 796);
		this.add.existing(guiLabelNumberEdit);
		
		// vCCard (components)
		vCCard.emit("components-awake");
		
		// save (prefab fields)
		save.Text = "Save";
		
		// save (components)
		save.emit("components-awake");
		
		// cancel (prefab fields)
		cancel.Text = "Cancel";
		
		// cancel (components)
		cancel.emit("components-awake");
		
		// characterEditName (components)
		characterEditName.emit("components-awake");
		
		// vCCard_preview_1 (components)
		vCCard_preview_1.emit("components-awake");
		
		// vCCard_preview_2 (components)
		vCCard_preview_2.emit("components-awake");
		
		// vCCard_preview_3 (components)
		vCCard_preview_3.emit("components-awake");
		
		// guiLabelNumberEdit (prefab fields)
		guiLabelNumberEdit.Label = "Power: ";
		
		// guiLabelNumberEdit (components)
		guiLabelNumberEdit.emit("components-awake");
		
		this.vCCard = vCCard;
		this.save = save;
		this.cancel = cancel;
		this.characterEditName = characterEditName;
		this.vCCard_preview_1 = vCCard_preview_1;
		this.vCCard_preview_2 = vCCard_preview_2;
		this.vCCard_preview_3 = vCCard_preview_3;
		this.guiLabelNumberEdit = guiLabelNumberEdit;
	}
	
	private vCCard: VCCard|undefined;
	private save: GuiTextButton|undefined;
	private cancel: GuiTextButton|undefined;
	private characterEditName: GuiLabelTextEdit|undefined;
	private vCCard_preview_1: VCCard|undefined;
	private vCCard_preview_2: VCCard|undefined;
	private vCCard_preview_3: VCCard|undefined;
	private guiLabelNumberEdit: GuiLabelNumberEdit|undefined;
	
	/* START-USER-CODE */
	
	// Write your code here
	
	create() {
	
		this.editorCreate();

		// fetch character from flow server

		// display existing characters

		var hasFocus: FocusableContainer = this.characterEditName!
		hasFocus.onFocus();

		(this.characterEditName as any)["onEnter"] = (characterName: string) => {
			this.vCCard!.setCharacterName(characterName)
		}

		(this.guiLabelNumberEdit as any)["onEnter"] = (num: number) => {
			this.vCCard!.setPower(num)
		}

		this.characterEditName!.onLeftClicked = () => {
			hasFocus.onDefocus();
			hasFocus = this.characterEditName!
			hasFocus.onFocus();
		}

		this.guiLabelNumberEdit!.onLeftClicked = () => {
			hasFocus.onDefocus();
			hasFocus = this.guiLabelNumberEdit!
			hasFocus.onFocus();
		}

		(this.vCCard! as any)["__PushOnClick"].enabled = false;

		this.vCCard_preview_1!.onLeftClicked = () => {
			console.log("select 1");
		}

		this.vCCard_preview_2!.onLeftClicked = () => {
			console.log("select 2");
		}

		this.vCCard_preview_3!.onLeftClicked = () => {
			console.log("select 3");
		}

		(this.save as any)["OnLeftClicked"] = () => {
			console.log("save");
		}

		(this.cancel as any)["OnLeftClicked"] = () => {
			console.log("cancel");
		}

	}

	defaultVirginCharacter = JSON.stringify({
		"rarity": 5, 
		"power": 100.0, 
		"name": "Sofi", 
		"gifURL": "http://www.google.com"
	})

	virginCharacters: Array<VirginCharacter> = []

	async init() {
		try {
			this.virginCharacters = await GalliumFlow.virginCharacters();
			if (this.virginCharacters.length == 0) {
				console.log("Empty virtual character array")
				await GalliumFlow.virginCharacterCreate(this.defaultVirginCharacter)
				this.virginCharacters = await GalliumFlow.virginCharacters();
			}
		} catch (error) {
			console.log(error)
		}		
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
