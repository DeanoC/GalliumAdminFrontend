import Phaser from "phaser";
import FocusableContainer from "./FocusableContainer";

export default class ClickableContainer extends FocusableContainer {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y);
  }

  onLeftClicked() {
  }

  onRightClicked() {
  }

}