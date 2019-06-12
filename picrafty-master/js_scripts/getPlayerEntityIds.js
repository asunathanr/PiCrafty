Blockly.Blocks['getPlayerEntityIds'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get player ids.");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['getPlayerEntityIds'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'mc.getPlayerEntityIds()\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
