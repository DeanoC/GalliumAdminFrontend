import Phaser from "phaser";
import ClickableContainer from "./ClickableContainer";

export default class GuiButtonBase extends ClickableContainer {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y);
  }
}