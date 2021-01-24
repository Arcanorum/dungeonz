import eventResponses from "./EventResponses";

export default () => {
    eventResponses.effect_start_burn = (data) => {
        if (window.gameScene.dynamics[data] === undefined) return;
        window.gameScene.dynamics[data].spriteContainer.burnEffect.anims.play("burn");
    };

    eventResponses.effect_stop_burn = (data) => {
        if (window.gameScene.dynamics[data] === undefined) return;
        window.gameScene.dynamics[data].spriteContainer.burnEffect.anims.stop();
        window.gameScene.dynamics[data].spriteContainer.burnEffect.visible = false;
    };

    eventResponses.effect_start_poison = (data) => {
        if (window.gameScene.dynamics[data] === undefined) return;
        window.gameScene.dynamics[data].spriteContainer.poisonEffect.anims.play("poison");
    };

    eventResponses.effect_stop_poison = (data) => {
        if (window.gameScene.dynamics[data] === undefined) return;
        window.gameScene.dynamics[data].spriteContainer.poisonEffect.anims.stop();
        window.gameScene.dynamics[data].spriteContainer.poisonEffect.visible = false;
    };

    eventResponses.effect_start_health_regen = (data) => {
        if (window.gameScene.dynamics[data] === undefined) return;
        window.gameScene.dynamics[data].spriteContainer.healthRegenEffect.anims.play("health-regen");
    };

    eventResponses.effect_stop_health_regen = (data) => {
        if (window.gameScene.dynamics[data] === undefined) return;
        window.gameScene.dynamics[data].spriteContainer.healthRegenEffect.anims.stop();
        window.gameScene.dynamics[data].spriteContainer.healthRegenEffect.visible = false;
    };

    eventResponses.effect_start_energy_regen = (data) => {
        if (window.gameScene.dynamics[data] === undefined) return;
        window.gameScene.dynamics[data].spriteContainer.energyRegenEffect.anims.play("energy-regen");
    };

    eventResponses.effect_stop_energy_regen = (data) => {
        if (window.gameScene.dynamics[data] === undefined) return;
        window.gameScene.dynamics[data].spriteContainer.energyRegenEffect.anims.stop();
        window.gameScene.dynamics[data].spriteContainer.energyRegenEffect.visible = false;
    };

    eventResponses.effect_start_cured = (data) => {
        if (window.gameScene.dynamics[data] === undefined) return;
        window.gameScene.dynamics[data].spriteContainer.curedEffect.anims.play("cured");
    };

    eventResponses.effect_stop_cured = (data) => {
        if (window.gameScene.dynamics[data] === undefined) return;
        window.gameScene.dynamics[data].spriteContainer.curedEffect.anims.stop();
        window.gameScene.dynamics[data].spriteContainer.curedEffect.visible = false;
    };

    eventResponses.curse_set = (data) => {
        if (window.gameScene.dynamics[data] === undefined) return;
        window.gameScene.dynamics[data].spriteContainer.curseIcon.visible = true;
    };

    eventResponses.curse_removed = (data) => {
        if (window.gameScene.dynamics[data] === undefined) return;
        window.gameScene.dynamics[data].spriteContainer.curseIcon.visible = false;
    };

    eventResponses.enchantment_set = (data) => {
        if (window.gameScene.dynamics[data] === undefined) return;
        window.gameScene.dynamics[data].spriteContainer.enchantmentIcon.visible = true;
    };

    eventResponses.enchantment_removed = (data) => {
        if (window.gameScene.dynamics[data] === undefined) return;
        window.gameScene.dynamics[data].spriteContainer.enchantmentIcon.visible = false;
    };
};