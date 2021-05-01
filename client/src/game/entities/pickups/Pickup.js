import gameConfig from "../../../shared/GameConfig";
import dungeonz from "../../../shared/Global";
import Sprite from "../Sprite";

class Pickup extends Sprite {
    constructor(x, y, config) {
        // -1 on Y to move it up slightly, so it appears behind the player when stood on after
        // being sorted in the dynamics container.
        super(x, y - 1, config);

        this.setFrame(this.frameName);
        this.setScale(gameConfig.GAME_SCALE * (this.scaleModifier || 1));
        this.setOrigin(0.5);

        // Starts this sprite doing a bobbing in-out effect.
        dungeonz.gameScene.tweens.add({
            targets: this,
            duration: 1000,
            scale: this.scaleX * 0.8,
            ease: "Linear",
            repeat: -1,
            yoyo: true,
        });
    }
}

Pickup.prototype.frameName = null;
Pickup.prototype.scaleModifier = null;

export default Pickup;
