import Phaser from "phaser";

export default class FocusableContainer extends Phaser.GameObjects.Container {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y);
  }

  public HasFocus: boolean = false;

  public onFocus() {
    this.HasFocus = true
  }

  public onDefocus() {
    this.HasFocus = false
  }

}