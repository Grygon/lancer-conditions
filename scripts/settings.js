export const registerSettings = function() {
  /**
   * Keep or replace stock icons
   */
  game.settings.register("lancer-conditions", "keepStockIcons", {
    name: "Keep Stock Icons",
    hint: "Keep stock Foundry status icons. The icons enabled in this module will be added to the stock icons.",
    scope: "world",
    type: Boolean,
    config: true,
    default: false
  });

  /**
   * Use Cancermantis' icons
   */
  game.settings.register("lancer-conditions", "cancermantis", {
    name: "Use Cancermantis' Icons",
    scope: "world",
    type: Boolean,
    config: true,
    default: false
  });

  /**
   * Use Hayley's conditions and status icons
   */
  game.settings.register("lancer-conditions", "hayleyConditionsStatus", {
    name: "Use Hayley's Condition and Status Icons",
    scope: "world",
    type: Boolean,
    config: true,
    default: true
  });

  /**
   * Use Hayley's PC systems icons
   */
  game.settings.register("lancer-conditions", "hayleyPC", {
    name: "Use Hayley's PC System Icons",
    scope: "world",
    type: Boolean,
    config: true,
    default: false
  });

  /**
   * Use Hayley's NPC systems icons
   */
  game.settings.register("lancer-conditions", "hayleyNPC", {
    name: "Use Hayley's NPC System Icons",
    scope: "world",
    type: Boolean,
    config: true,
    default: false
  });

  /**
   * Use Hayley's utility icons
   */
  game.settings.register("lancer-conditions", "hayleyUtility", {
    name: "Use Hayley's Utility Icons",
    scope: "world",
    type: Boolean,
    config: true,
    default: false
  });


}
